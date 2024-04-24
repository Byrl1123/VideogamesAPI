import mongoose from 'mongoose';
import { platform } from 'os';

const favoriteGames = new Schema({
    name: {
        type: String,
        ref: 'User',
        required: true,
    },
    genre: String,
    releaseYear: Date,
    platforms: [String]
});

export default mongoose.model('FavoriteGame', favoriteGames);