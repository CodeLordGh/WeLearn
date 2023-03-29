const router = require('express').Router();
const User = require ('../models/User');

//creating user
router.post('/', async(req, res) => {
    try {
        const {name, email, password, picture} = req.body;
        console.log(req.body);
        const user = await User.create({name, email, password, picture});
        res.status(201).json(user);
    } catch (e) {
        let msg;
        if(e == 11000){
            msg = 'User already exist!'
        } else {
            msg = e.message;
        }
        console.log(e)
        res.status(400).json(msg)
    }
})

router.post('/login', async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await findByCredentials(email, password);
        user.status = 'online';
        await user.save();
        req.status(200).json(user);
    } catch (e) {
        req.status(400).json(e.message)
    }finally{

    }
})


module.exports = router