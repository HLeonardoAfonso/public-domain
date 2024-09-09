import { Schema, models, model } from 'mongoose';

const movieSchema = new Schema(
    {
        title: String,
        minutes: String,
        year: Number,
        poster: String,
        movie: String,
        silent: Boolean,
        genres: Array,
    }
);

const Mango = models.movie || model('movie', movieSchema, 'movie');

export default Mango;