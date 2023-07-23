const User = require('../models/user');

module.exports.profile = function (req,res) {
    return res.render('user_profile', {
        title: 'User Profile'
    });
}

module.exports.signIn = function (req, res) {
    return res.render('userSignIn', {
        title: 'Codeial | Sign In'
    });
};

module.exports.signUp = function (req, res) {
    return res.render('userSignUp', {
        title: 'Codeial | Sign Up'
    });
};

// get the sign up data
module.exports.create = function (req,res) {
    // Mismatch in confirm password
    if (req.body.password !== req.body.confirmPassword) {
        console.log("Passwords don't match");
        return res.redirect('back');
    }

    User.findOne({ email: req.body.email })
    .then((user) => {
        if (!user) {
            User.create(req.body)
            .then(() =>{
                console.log('User created successfully');
                return res.redirect('/users/sign-in');
            })
            .catch((err) => {
                console.log(err);
                return;
            });
        } else {
            console.log('User already found');
            return res.redirect('back');
        }
    }).catch((err) => {
        console.log(err);
        return;
    });
};

// sign in and create a session for user
module.exports.createSession = function (req, res) {
    // TODO later
};