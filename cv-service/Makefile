
default:
	$(MAKE) stop && $(MAKE) build && $(MAKE) run

build: Dockerfile
	docker build -t cvservice .

run:
	docker run -d -p 2002:2002 cvservice

stop:
	docker-compose down