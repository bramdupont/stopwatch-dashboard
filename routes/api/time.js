const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const auth = require('../../middleware/auth');

const User = require('../../models/User');
const Time = require('../../models/Time');

// @route POST api/times
// @desc Create a time
// @access Private
router.post(
    '/',
    auth,
    check('time', 'Tijd is verplicht').notEmpty(),
    async (req, res) => {
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
            res.status(500).send('Server Error');
        }
    }
)
;
// router.post('/', auth,
//     check('time', 'Tijd is verplicht').notEmpty()
//     , async (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({errors: errors.array()});
//         }
//
//         try {
//             const user = await User.findById(req.user.id).select('-password');
//             const query = {id: req.user.id};
//
//             const times = await Time.findOne(query);
//             if (!times) {
//                 const newTime = new Time({
//                     time: req.body.time,
//                     name: user.name,
//                     user: req.user.id
//                 })
//                 const time = await newTime.save();
//                 res.json(time);
//             }
//
//             if (times.time > req.body.time) {
//                 if (times && times.length !== 0) {
//                     await times.remove();
//                 }
//                 const newTime = new Time({
//                     time: req.body.time,
//                     name: user.name,
//                     user: req.user.id
//                 })
//                 const time = await newTime.save();
//                 res.json(time);
//             } else {
//                 return res.status(400).json({msg: 'De tijd is trager.'});
//             }
//         } catch (err) {
//             console.error(err);
//             res.status(500).send('Server error');
//         }
//     });

// @route GET api/times
// @desc Get all times
// @access Private

router.get('/', auth, async (req, res) => {
    try {
        const times = await Time.find().sort({time: 'asc'});
        res.json(times);
    } catch (err) {
        console.error(err)
        res.status(500).send('Server error');
    }
});

// // @route GET api/times/:id
// // @desc Get time by id
// // @access Private
//
// router.get('/:id', auth, async (req, res) => {
//     try {
//         const time = await Time.findById(req.params.id);
//         if (!time) {
//             return res.status(404).json({msg: 'Time not found'});
//         }
//         res.json(time);
//     } catch (err) {
//         console.error(err)
//         if (err.kind === "ObjectId") {
//             return res.status(404).json({msg: 'Time not found'});
//         }
//         res.status(500).send('Server error');
//     }
// });

// // @route    DELETE api/posts/:id
// // @desc     Delete a post
// // @access   Private
// router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
//     try {
//         const post = await Time.findById(req.params.id);
//
//         if (!post) {
//             return res.status(404).json({msg: 'Post not found'});
//         }
//
//         // Check user
//         if (post.user.toString() !== req.user.id) {
//             return res.status(401).json({msg: 'User not authorized'});
//         }
//
//         await post.remove();
//
//         res.json({msg: 'Post removed'});
//     } catch (err) {
//         console.error(err.message);
//
//         res.status(500).send('Server Error');
//     }
// });

module.exports = router;