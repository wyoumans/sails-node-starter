BROWSERIFY_IN  := ./assets/js/index.js
BROWSERIFY_OUT := ./assets/js/index-compiled.js

browserify := ./node_modules/.bin/browserify

default: run

browserify:
	@$(browserify) -e $(BROWSERIFY_IN) -o $(BROWSERIFY_OUT)
	@echo
	@echo Browserifying....

run:
	@echo
	@./bin/watch.sh

empty:
	@echo
	@./bin/empty.sh

populate:
	@echo
	@echo Starting DB Seed
	@./bin/populate.sh

reset:
	@make empty
	@make populate

.PHONY: browserify run empty populate reset
