const Koa = require('koa');
const app = new Koa();
const weatherMiddleware = require('koa-weather')

app.use(weatherMiddleware())
app.use(ctx => {
  ctx.body = JSON.stringify(Object.assign({},
    {geoLocation: ctx.request.geoLocation},
    {weatherData: ctx.request.weatherData}),
  null, 4);
});

app.listen(3000);
