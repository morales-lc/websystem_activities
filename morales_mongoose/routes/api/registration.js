const express = require('express'); //Import Express.js
const router = express.Router(); //create router
const User = require('../../models/User'); //import "User" model
const {body, validationResult} = require('express-validator') //import validations form the express-validator

//route for registration 
//with validation
router.post('/',[
    body('firstName') //validate firstname
        .notEmpty()
        .withMessage("firstname is required"),
    body('lastName') //validate lastname
        .notEmpty()
        .withMessage('Lastname is required'),
    body('sex') //validate sex
        .notEmpty()
        .withMessage('Please select gender'),
    body('birthday') //bday must be date
        .notEmpty()
        .isDate()
        .withMessage('Birthday must be a valid date'),
    body('username')//reuqired username
        .notEmpty()
        .withMessage('username is required'),
    body('email') //make sure email is valid
        .isEmail()
        .withMessage("must be a valid email"),
    body('password') //password must be atleast 8 chars
        .isLength({min: 8})
        .withMessage('password must be at least 8 character'),
    body('agreed') //valid must agree field check if its true
        .isBoolean()
        .withMessage('You must agree to terms')
        .custom((value) => value === true)
        .withMessage("You must agree to terms")
], 
    async (req, res) => {
        //check if there are validation errors
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.mapped() }) //if there is a validation that did not meet conditions
        }

        //extract user data from req body
        const { firstName, lastName, sex, birthday, username, email, password, agreed } = req.body;
        //check if a username or email alraedy exist
        const existingUser = await User.findOne({ $or: [{ email: req.body.email }, { username: req.body.username }] })


        if (existingUser) {
            return res.status(400).json({ error: "Email or Username is already registered" })
        } //display error when email or user exists

        //create user if no errors
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            sex: req.body.sex,
            birthday: req.body.birthday,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            agreed
        })

        //save the user to the database.
        await newUser
        .save()
        .then(() => res.status(201).json({message: "Registration successful", user: newUser}))
        .catch(() => res.status(500).json({ error: "Something went wrong on the server"}))
        
    
});

module.exports = router
