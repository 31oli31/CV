

default:
	$(MAKE) stop && $(MAKE) build && $(MAKE) run
	
build: Dockerfile
	docker build -t cvapp .

run:
	docker run -d -p 2000:2000 cvapp

stop:
	docker-compose down