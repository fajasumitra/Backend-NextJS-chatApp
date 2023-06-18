// const db = require('../models');
// const User = db.user;
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// //login
// exports.login = (req, res) => {
//     try{
//         // Get user input
//         const { email, password } = req.body;

//         // Validate user input
//         if (!(email && password)) {
//         res.status(400).send("All input is required");
//         }
//         // Validate if user exist in our database
//         const user = User.findOne({ email });

//         if (user && (bcrypt.compare(password, user.password))) {
//         // Create token
//         const token = jwt.sign(
//             { user_id: user._id, email },
//             process.env.TOKEN_KEY,
//             {
//             expiresIn: "5h",
//             }
//         );
//         }
//     } catch (err) {
//     console.log(err);
//     }
// }

// //register
// exports.register = (req, res) => {
//     try {
//         // Get user input
//         const { firstName, lastName, email, password } = req.body;

//         // Validate user input
//         if (!(email && password && firstName && lastName)) {
//         res.status(400).send("All input is required");
//         }
//         // check if user already exist
//         // Validate if user exist in our database
//         const oldUser = User.findOne({ email });

//         if (oldUser) {
//             return res.status(409).send("User Already Exist. Please Login");
//         }

//         //Encrypt user password
//         encryptedUserPassword = bcrypt.hash(password, 10);
        
//         // Create user in our database
//         const user = User.create({
//             first_name: firstName,
//             last_name: lastName,
//             email: email.toLowerCase(), // sanitize
//             password: encryptedUserPassword,
//         });

//         // Create token
//         const token = jwt.sign(
//             { user_id: user._id, email },
//             process.env.TOKEN_KEY,
//             {
//             expiresIn: "5h",
//             }
//         );
//         // save user token
//         user.token = token;
    
//         // return new user
//         res.status(201).json(user);
//     } catch (err) {
//         console.log(err);
//     }
// }