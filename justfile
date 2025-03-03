# https://github.com/casey/just
# https://just.systems/

dev:
    npm run dev

format:
    npm run prettier-writer

build:
    npm run build

start: build
    npm run run

install:
    npm install

lint:
    npm run lint

release:
    npm run release

upgrade:
     npx npm-check-updates --interactive
