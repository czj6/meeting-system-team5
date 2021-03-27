const Koa = require("koa");
const parser = require('koa-bodyparser')
const initApp = require('./core/init')

const app = new Koa();
app.use(catchError)
app.use(parser())
initApp.init(app)

app.listen(3000)