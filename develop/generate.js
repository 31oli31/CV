const util = require("util");
const config = require("../config.json");
const apps = require("./app.json");
const path = require("path");
const fs = require("fs");
const exec = util.promisify(require("child_process").exec);
const yaml = require("js-yaml");

const dockerFile = path.resolve(__dirname, "../docker-compose.yml");
const version = "3.8";

const execute = (command, args) =>
  new Promise((resolve, reject) => {
    const process = spawn(command, args);

    // process.stdout.on('data', (data) => {
    //   console.log(`${data}`);
    // });

    process.stderr.on("data", (data) => {
      if (!data) {
        return;
      }
      console.log(`${data}`);
    });

    process.on("error", (error) => {
      console.log(`Error: ${error.message}`);
      reject(error);
    });

    process.on("close", () => {
      resolve();
    });
  });

const updateNetwork = async () => {
  try {
    await apps.local.map(async (app) => {
      const appConfig = JSON.parse(
        fs.readFileSync(
          path.resolve(__dirname, `../${app.name}/config/local.json`)
        )
      );
      const mongoURL = appConfig.url.mongodb;
      const newURl = mongoURL.replace("localhost", config.DockerNetwork);
      appConfig.url.mongodb = newURl;
      await fs.writeFileSync(
        path.resolve(__dirname, `../${app.name}/config/default.json`),
        JSON.stringify(appConfig)
      );
    });
  } catch (e) {
    console.error(e); // should contain code (exit code) and signal (that caused the termination).
  }
};

const resetNetwork = async () => {
  await apps.apps.map(async (app) => {
    await fs.writeFile(
      path.resolve(__dirname, `../${app.name}/config/default.json`),
      "",
      function () {
        console.log("done");
      }
    );
    await fs.copyFileSync(
      path.resolve(__dirname, `../${app.name}/config/docker.json`),
      path.resolve(__dirname, `../${app.name}/config/default.json`)
    );
  });
};

const getNetwork = async () => {
  try {
    //Get Ip Address
    const output = await (await exec("docker network inspect cv_cv")).stdout;
    const network = JSON.parse(output);
    const ip = network[0].IPAM.Config[0].Gateway;
    config.DockerNetwork = ip;
    await fs.writeFileSync("../config.json", JSON.stringify(config));

    //Set IP
  } catch (e) {
    console.error(e); // should contain code (exit code) and signal (that caused the termination).
  }
};

const addApp = async (app) => {};

const removeAp = async (app) => {};

const defaultConfig = async () => {
  const initConfig = {
    version: version,
    services: {
      mongo: { image: "mongo", networks: ["cv"], ports: ["27018:27017"] },
    },
    networks: {
      cv: {
        driver: "bridge",
      },
    },
  };
  try {
    console.log("Generate initial Docker compose file ");
    const allApps = apps.apps;
    const localApps = apps.local.map(({ name }) => name);

    const dockerApps = allApps.filter((item) => !localApps.includes(item.name));

    await resetNetwork();

    dockerApps.map(async (app) => {
      initConfig.services[app.container] = {
        image: app.container,
        networks: ["cv"],
        ports: [`${app.port}:${app.port}`],
      };
    });

    fs.writeFileSync(dockerFile, yaml.safeDump(initConfig), (err) => {
      if (err) {
        console.log(err);
      }
    });

    console.log("Switch Networkconfig for local apps");
    await getNetwork();
    await updateNetwork();
  } catch (e) {
    console.log(e);
  }
};

defaultConfig();
