import User from "../models/user.model.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const UserController = {

    //register
    register: async (req, res) => {
        try {
            //create user with form data
            const newUser = await User.create(req.body)
            console.log(newUser);
            // ! Generate JWT and send with response 
            const userToken = jwt.sign(
                {userId:newUser._id, username:newUser.username},
                process.env.SECRET_KEY
            )
            res.cookie('userToken', userToken, {httpOnly:true})
            res.status(201).json(newUser)
        }
        catch(err) {
            res.status(500).json(err)
        }
    },



    //login
    login: async (req, res) => {
        try {
            //check if the user exists by email
            const {email, password} = req.body
            const potentialUser = await User.findOne({email})
            if(!potentialUser){
                return res.status(404).json({message: 'user not found register now'})
            }
            // if we've gotten to this point, the user exists by email
            // check to see if passwords match
            const passwordsMatch = await bcrypt.compare(password, potentialUser.password)
            if(!passwordsMatch){
                return res.status(400).json({message: 'invalid credentials'})
            }
            // Log user in (generate jwt)
            const userToken = jwt.sign(
                {userId:potentialUser._id, username:potentialUser.username},
                process.env.SECRET_KEY
            )
            res.cookie('userToken', userToken, {httpOnly:true})
            res.status(201).json({userId: potentialUser._id});
        }
        catch(err) {
            res.status(500).json(err)
        }
    },
    logout: async (req, res) => {
        res.clearCookie('userToken')
        res.status(200).json({message: 'Successfully logged out'})
    },
    getLoggedInUser: async (req, res) => {
        try{
            const {id} = req.params
            const user = await User.findById(id)
            res.status(200).json(user)
        }
        catch (err) {
            res.status(500).json(err)
        }
    },
    saveFavoritePizza: async (req, res) => {
        const {userId, pizza} = req.body;
        try {
            await User.findByIdAndUpdate(
                userId,
                {$push: {favorites: pizza}},
                {new: true}
            );
            console.log('Favorite pizza saved successfully');
        } catch (error) {
            console.log('Error saving favorite pizza:', error);
        }
    },

    logout: async (req, res) => {
        res.clearCookies('userToken')
        res.status(200).json({message:'Successfuly logged out!'})
    },

    getFavorites: async (req, res) => {
        const {userId} = req.params;
        try {
            const user = await User.findById(userId).select('favorites');
            if(!user) {
                return res.status(404).json({message: "User not found"});
            } 
            res.status(200).json(user.favorites);
            } catch(err) {
                res.status(500).json(err);
            }
        },
    
        deleteFavorite: async (req, res) => {
            const {userId, pizza} = req.body;
            try {
                const updatedUser = await User.findByIdAndUpdate(
                    userId,
                    {$pull: {favorites:{ _id: pizza} }},
                    {new: true}
                );
                if (!updatedUser) {
                    return res.status(404).json({message: 'User not found'});
                }
                console.log('Favorite pizza deleted');
                res.status(200).json({
                    message: 'favorite pizza deleted',
                    updatedFavorites: updatedUser.favorites
                });
            } catch (error) {
                console.log('Error saving favorite pizza:', error);
                res.status(500).json({message: 'Failed to delete favorite pizza'})
            }
}
}