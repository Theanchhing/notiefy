# run locally

## backend

`docker-compose up`

 pgadmin is "dev" profile so if you want to see it you can either run docker-compose up --profile dev or put COMPOSE_PROFILES=dev in the .env

### create new model

<https://sequelize.org/docs/v6/other-topics/migrations/>

- create model and migration

`npx sequelize-cli model:generate --name ModelName --attributes firstName:string,lastName:string,email:string`

- create seed

seed is data that predefine by us
`npx sequelize-cli seed:generate --name demo-user`
then edit the seed file

After change to the migration file you can
1. `docker-compose down -v`
2. `docker-compose up`

you can also run migrate or seed using the container by

`npm run migrate` or `npm run seed` in the app backend container

## frontend

1. npm install
2. npm start

