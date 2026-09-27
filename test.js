require("dotenv").config();

const mongoose = require("mongoose");

console.log("Atlas URL exists:", !!process.env.ATLASDB_URL);

mongoose.connect(process.env.ATLASDB_URL)
    .then(() => {
        console.log("✅ MongoDB CONNECTED");
        process.exit(0);
    })
    .catch((err) => {
        console.log("❌ MongoDB CONNECTION FAILED");
        console.error(err);
        process.exit(1);
    });