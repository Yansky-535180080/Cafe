const express = require('express');

const router = express.Router();

const bcrypt = require('bcryptjs');

const passport = require('passport');

const Member = require('../models/member');
const { deserializeUser } = require('passport');

router.get('/login', async (req, res) => {
    res.render('pages/login');
});

router.get('/register', async (req, res) => {
    res.render('pages/register');
})

router.post('/login', async (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/user/login',
        failureFlash: true
    })(req, res, next);
});

router.post('/register', async (req, res, next) => {
    name = req.body.name;
    email = req.body.email;
    password = req.body.password;
    retype = req.body.retype;

    let errors = [];

    // Required
    if (!name || !email || !password || !retype) {
        errors.push({ msg: "Please fill all required data." });
    }

    if (password !== retype) {
        errors.push({ msg: "Password do not match." });
    }

    if (errors.length > 0) {
        res.render('pages/register', {
            errors,
            name,
            email,
            password,
            retype,
        });
    }
    else {
        // Validation
        Member.findOne({ email: email }).then((member) => {
            // User found
            if (member) {
                errors.push({ msg: "Email is in our member list." });
                res.render('pages/register', {
                    errors,
                    name,
                    email,
                    password,
                    retype,
                });
            }
            else {
                const newMember = new Member({
                    name,
                    email,
                    password
                });

                // Password hashing
                bcrypt.genSalt(15, (err, salt) => {
                    bcrypt.hash(newMember.password, salt, (err, hash) => {
                        if (err) {
                            throw err;
                        }
                        newMember.password = hash;

                        newMember.save().then((member) => {
                            req.flash(
                                "success_msg",
                                "Registration success, please login."
                            );

                            res.redirect("/user/login");
                        })
                            .catch((err) => console.log(err));
                    });
                });
            }
        });
    }
});

module.exports = router;