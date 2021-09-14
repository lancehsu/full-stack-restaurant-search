# Restaurant search web app example

## To Use

### Build Front-end and run server

> `PORT: 8000`
#### Config setting
1. Copy `.env.example` and rename it to `.env`
2. Add `SECRET_KEY` for JWT token and `MONGO_URL`
3. Set `INITIALIZE_DB` to `true` for initialization (Then set it to `false` or it will initialize db every time you run server)

#### Build front-end and run server

```zsh
yarn install
yarn local-start
```
#### Go http://localhost:8000/

## Demo

[Full Stack Restaurant Search](https://full-stack-restaurant-search.herokuapp.com/)
