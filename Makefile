
default:
	$(MAKE) stop && $(MAKE) build && $(MAKE) run

build: 
	cd cv-service && $(MAKE) build
	cd cv-app && $(MAKE) build

run:
	docker-compose up

stop:
	docker-compose down