const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const auth = require('../../middleware/auth');

const User = require('../../models/User');
const Time = require('../../models/Time');

// @route POST api/times
// @desc Create a time
// @access Private

router.post('/', auth,
    check('time', 'Time is required').notEmpty()
, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    try {
        const user = await User.findById(req.user.id).select('-password');
        const newTime = new Time({
            time: req.body.time,
            name: user.name,
            user: req.user.id
        })

        const time = await newTime.save();

        res.json(time);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }


});

module.exports = router;