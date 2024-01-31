const users = require('../Model/usersmodel')
const jwt = require('jsonwebtoken')

//register
exports.registerController = async(req,res)=>{
    const {username,email,password} = req.body
    console.log(`${username},${email},${password}`);

    try{

        const existingUSer = await users.findOne({email})
        if(existingUSer){
            res.status(406).json('Account already exist')
        }
        else{
            const newUser = new users({
                username,email,password
            })
            console.log(`${username},${email},${password}`);

            await newUser.save()

            res.status(200).json(newUser)
        }
    }catch(err){
        res.status(401).json(err)
    }
}

// login

exports.loginController = async(req,res)=>{
    const {email,password}= req.body

    try {
        const existingUser = await users.findOne({email,password})
        if(existingUser){
            const token = jwt.sign({userId:existingUser._id},process.env.JWT_KEY)
            res.status(200).json({existingUser,token})
        }
        else{
            res.status(404).json("inccorrect email or password")
        }
    } catch (error) {
        res.status(401).json(error)
    }
}