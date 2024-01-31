const mongoose = require('mongoose')

const connectionString = process.env.CONNECTION_STRING

mongoose.connect(connectionString).then((res)=>{
    console.log('MongoDB connected successfully');
}).catch((err)=>{
    console.log('MongoDB connected succesfully');
})