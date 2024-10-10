import { model, Schema } from 'mongoose';


const PersonSchema = new Schema ({
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
    emailAddress: {
        type: String,
        required: [true, 'Please enter a valid email address!'],
        unique: [true, "An account with this email is already in use"]

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
},
    {timestamps: true}
);

const Person = model("Person", PersonSchema);
export default Person;