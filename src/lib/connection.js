const { default: mongoose } = require("mongoose");

async function dbConnect() {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("db just connected");
  } catch (error) {
    console.log("failed to connect database...", error);
  }
}

export default dbConnect;
