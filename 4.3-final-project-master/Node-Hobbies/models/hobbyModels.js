const mongoose = require('mongoose');

const HobbySchema =  mongoose.Schema(
    {
        
        name:{
            type: String,
            required : [true,"enter player name"]
        }
        
    }
)
const Hobby = mongoose.model('HobbySchema',HobbySchema);

module.exports = Hobby;