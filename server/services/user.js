const User = require("../models/User");


const register = async(req,res) =>{
    try{
        const{username,email,password} = req.body;
        if(!username || !email ||!password){ return res.status(404).json({error : "all fields are required"})

        }

        if(username.length<5){
            return res
            .status(404)
            .json({error : "username must have 5 characters"})
        }

        if(password.length<5){
            return res
            .status(404)
            .json({error : "password must have 6 characters"})
        }

        const  checkUsers = await User.findOne({$or: [{email}, {username}] });
        if(checkUsers){
            return res
            .status(404)
            .json({error : "Username or Email already exists"})
        }
        else{
            const newUser = new User({username, email, password}) ;
            await newUser.save();
            return res.status(200).json({success : "Registration successful"})
        }
    }catch(error){
      return res.status(404).json({error : "Internal Server error"});
    }
};
module.exports ={register};