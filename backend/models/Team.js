const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    teamId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    teamName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    projectName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: 150,
    },

    projectDescription: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },

    githubRepository: {
      type: String,
      default: "",
      trim: true,
    },

    inviteCode: {
      type: String,
      required: true,
      unique: true,
    },

    leaderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Leader",
      default: null,
    },

    projectStatus: {
      type: String,
      enum: ["Active", "Completed", "Archived"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Team", teamSchema);