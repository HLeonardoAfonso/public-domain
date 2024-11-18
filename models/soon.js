import { Schema, models, model } from 'mongoose';

const soonSchema = new Schema(
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

const Sango = models.soon || model('soon', soonSchema, 'soon');

export default Sango;