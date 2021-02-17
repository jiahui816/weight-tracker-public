import mongoose from "mongoose";
const { Schema } = mongoose;

const weightSchema = new Schema({
  weight: String, // String is shorthand for {type: String}
  time: { type: Date, default: Date.now },
});

export default mongoose.model("weight", weightSchema);
