import mongoose from "mongoose";

const LanguageSchema = new mongoose.Schema({
  LanguageName: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  Questions: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Questions",
    },
  ],
});

const Languages = mongoose.model("Languages", LanguageSchema);
export default Languages;
