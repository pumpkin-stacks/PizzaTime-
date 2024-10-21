import { model, Schema } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator'
import validator from 'validator'
const { isEmail } = validator
import bcrypt from 'bcrypt'
const UserSchema = new Schema ({

    firstName: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [1, "Name must have minimum 2 characters"],
        maxlength: [40, "Name must have less than 40 characters"]

    },
    lastName: {
        type: String,
        required: [true, "Last name is required!"],
        minlength: [1, "Last name must have minimum 2 characters"],
        maxlength: [40, "Last name must have less than 40 characters"]

    },
    email: {
        type: String,
        required: [true, 'Please enter a valid email address!'],
        unique: [true, "An account with this email is already in use"],
        validate: [isEmail, 'Not an email']

    },
    city: {
        type: String,
        required: [true, "City is required!"],
        minlength: [2, "Minimum length is 2!"],
        maxlength: [187, "City must be less than 187"]
    },
    state: {
        type: String,
        required: [true]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [8, "Password must be 8 characters"],
        maxlength: [16, "Password must not exceed 16 characters"]

    },
    favorites: [
        {
            method: {type: String, required: true},
            size: {type: String, required: true},
            qty: {type: String, required: true},
            toppings: {
                mushrooms: {type: Boolean, default: false},
                pineapple: {type: Boolean, default: false},
                olives: {type: Boolean, default: false},
                jalapenos: {type: Boolean, default: false},
                basil: {type: Boolean, default: false},
                tomatoes: {type: Boolean, default: false},
                potatoes: {type: Boolean, default: false},
                artichokes: {type: Boolean, default: false},
            },
        }
    ]
},
    {timestamps: true}
);
UserSchema.plugin(mongooseUniqueValidator)

// middleware
UserSchema.virtual('confirmPassword')
    .get(function(){
        return this._confirmPassword
    })
    .set(function(value){
        this._confirmPassword = value
    })

UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Passwords dont match')
    }
    next()
})

UserSchema.pre('save', function (next){
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash
            next()
        })
})

const User = model("User", UserSchema);
export default User;