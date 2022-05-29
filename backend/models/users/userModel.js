const User = require('./userSchema');
const bcrypt = require('bcryptjs');
const auth = require('../../authentication/auth');


// -- REGISTER NEW USER -- //

exports.registerUser = (req, res) => {

    User.exists({ email: req.body.email }, (err, result) => {

        if(err) {
            return res.status(400).json({
                statusCode: 400, 
                status: false, 
                message: 'Ooops something went wrong...'
            })
        }

        if(result) {
            return res.status(400).json({
                statusCode: 400, 
                status: false,
                message: 'The email adress is already registred...'
            })
        }


        const salt = bcrypt.genSaltSync(10);
        bcrypt.hash(req.body.password, salt, (err, hash) => {

            if(err) {
                return res.status(500).json({
                    statusCode: 500, 
                    status: false,
                    message: 'Failed when encrypting the password...',
                    err
                })
            }

            User.create({
                firstName:      req.body.firstName,
                email:          req.body.email,
                password:       hash
            })
            .then(user => {
                res.status(201).json({
                    statusCode: 201, 
                    status: true,
                    message: 'User was created successfully!',
                    token: auth.generateToken(user),
                    user
                })
            })
            .catch(err => {
                res.status(500).json({
                    statusCode: 500, 
                    status: false,
                    message: 'Failed to create user...',
                    err
                })
            })

        })

    })

}


// -- LOGIN USER -- //

exports.loginUserWithEmailAndPassword = (req, res) => {

    User.findOne({ email: req.body.email }, (err, user) => {

        if(err) {
            return res.status(400).json({
                statusCode: 400, 
                status: false,
                message: 'Ooops something went wrong...',
            })
        }

        if(!user) {
            return res.status(401).json({
                statusCode: 401, 
                status: false,
                message: 'Incorrect email or password...',
            })
        }

        bcrypt.compare(req.body.password, user.password, (err, result) => {

            if(err) {
                return res.status(500).json({
                    statusCode: 500, 
                    status: false,
                    message: 'Ooops something went wrong when decrypting the password...',
                })
            }

            if(!result) {
                return res.status(401).json({
                    statusCode: 401, 
                    status: false,
                    message: 'Incorrect email or password...',
                })
            }

            res.status(200).json({
                statusCode: 200, 
                status: true,
                message: 'Login was successful!',
                token: auth.generateToken(user),
                user
            })

        })

    })

}