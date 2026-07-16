import cloudinary from "./src/config/cloudinary.js";

const test = async () => {
    try {
        const result =
            await cloudinary.api.ping();

        console.log(result);
    } catch (err) {
        console.error(err);
    }
};

test();