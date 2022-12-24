const User = require('../modal/User')
const bcrypt = require('bcryptjs')

exports.signUpHandler = (req, res) => {
    const email = req.body.data.email;
    const password = req.body.data.password
    bcrypt.hash(password, 12).then(hashedPw => {
        const user = new User({
            email: email,
            password: hashedPw
        })
        return user.save();
    }).then(result => console.log('User is created')).then(res.send('All Ok')).catch(err => res.json({
        message: 'An error occured!'
    }))


}