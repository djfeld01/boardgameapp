const mongoose = require('mongoose');

const GamesSchema= new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Make sure you include the game name"],
        trim: true
    }, 
    rating: {
        type: Number
    },
    designer: {
        type: String,
        trim: true
    },
    artist: {
        type: String,
        trim: true
    },
    publisher: {
        type: String,
        trim: true
    },
    gameType:{
        type: [String]
    }
})

export default Games = mongoose.model('Game', GamesSchema);