require('dotenv').config()

const cartExpress = require('express')

const cartCors = require('cors')

require('./Database/connect')

const routes = require('./Router/router')

const ShopCartServer = cartExpress()

ShopCartServer.use(cartCors())

ShopCartServer.use(cartExpress.json())

ShopCartServer.use(routes)

const PORT = 3000 || process.env.PORT

ShopCartServer.listen(PORT,()=>{
    console.log(`Your ShopCart server running at port ${PORT}`);
})

ShopCartServer.get('/',(req,res)=>{
    res.send(`<h1>ShopCArt Server </h1>`)
})