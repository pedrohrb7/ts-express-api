# Node API started with TDD

I decided to start this project to learn more about Docker config and TDD.
## Start project
  - Clone this repo
  - run the following commands:
      - `yarn` or `npm install`
      - `npm run config` -> this command will copy the .env file from .env.example

After install the dependencies run this command to start the server in dev mode: `docker-compose up --build`

To run the project using docker compose prod file, use this command:
`docker-compose -f docker-compose.yml -f docker-compose.prod.yml`.

## Tests

To run the tests
- `yarn tests` or `npm run tests`


### About the code
Code style: `eslint - airbnb`

### LinkedIn

https://www.linkedin.com/in/pedrohrb/
