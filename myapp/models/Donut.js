import { Schema, model, models } from "mongoose";

const DonutSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  imageUrl: {
    type: String,
    required: true,
},
likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: []
},

  creator: { type: String },
});

const Donut = models.Donut || model("Donut", DonutSchema);

export default Donut;