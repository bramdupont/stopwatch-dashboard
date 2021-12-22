const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TimeSchema = new Schema({
   user: {
       type: Schema.Types.ObjectId,
       ref: 'users'
   },
    name: {
      type: String
    },
    time: {
       type: String,
        required: true
    },
    date: {
       type: Date,
        default: Date.now()
    },
});

module.exports = Time = mongoose.model('time', TimeSchema);