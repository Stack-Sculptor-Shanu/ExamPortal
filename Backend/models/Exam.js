import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
  examName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
  totalMarks: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true, // Duration in minutes
  },
  passingMarks: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Exam = mongoose.model("Exam", examSchema);
export default Exam;
