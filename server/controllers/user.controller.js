import Person from "../models/user.model.js";

export const personController = {

    // create new
    createPerson: async (req, res) => {
        try {
            const newPerson = await Person.create(req.body);
        } catch (error) {
            console.log(error)
            res.status(400).json(error);
        }
    },

    // get all people



    





























}