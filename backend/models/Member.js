const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      default: "",
    },

    teamId: {
      type: String,
      required: true,
      trim: true,
    },

    role: {
      type: String,
      enum: ["member"],
      default: "member",
    },

    status: {
      type: String,
      enum: ["Invited", "Active","Inactive"],
      default: "Invited",
    },

    profileImage: {
      type: String,
      default: "",
    },

    joinedAt: {
      type: Date,
      default: null,
    },

    lastLogin: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);
memberSchema.index(
  { email: 1, teamId: 1 },
  { unique: true }
);

module.exports = mongoose.model("Member", memberSchema);