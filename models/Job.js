import mongoose from "mongoose";
import validator from "validator";

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide a company"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide a position"],
      maxlength: 20,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending", "approuved"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "remote", "internship"],
      default: "full-time",
    },
    jobLocation: {
      type: String,
      required: true,
      default: "my city",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide the user"],
      default: "User.location",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Job", JobSchema);
