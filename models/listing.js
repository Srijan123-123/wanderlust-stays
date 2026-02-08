const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required:true,
    },
    description: String,
    image: {
        filename: String,
        url: {
            type: String,
            default: "https://www.istockphoto.com/photo/sunset-on-tropical-beach-gm534716373-57062266?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fa-beach-photo-with-sunset&utm_term=a+beach+photo+with+sunset%3A%3Awallpapers-no-affiliates%3Aexperiment%3A10b375a3-d4c5-4dc4-b224-9d3f7e953eee",
            set: (v) => v === "" ? "https://www.istockphoto.com/photo/sunset-on-tropical-beach-gm534716373-57062266?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fa-beach-photo-with-sunset&utm_term=a+beach+photo+with+sunset%3A%3Awallpapers-no-affiliates%3Aexperiment%3A10b375a3-d4c5-4dc4-b224-9d3f7e953eee" : v,
        },

        
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;