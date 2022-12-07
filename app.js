
const express = require('express');
const bodyParser = require('body-parser');
const adminData = require('./router/admin')
const shopRouter = require('./router/shop')
const path = require('path')
const rootDir = require('./util/path')
const monggoose = require('mongoose')
const session = require('connect-mongodb-session')
const MONGODB_URL = 'mongodb+srv://maximilian:9u4biljMQc4jjqbe@cluster0-ntrwp.mongodb.net/shop'


const app = express();
app.set('view engine', 'ejs');
app.set('views','views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,'public')))


app.use('/admin',adminData.routers);
app.use(shopRouter);

app.use( (res, req, next) => {
    res.status(404).sendFile(path.joint(rootDir,'views','404.html'))
});


app.listen(3001);
