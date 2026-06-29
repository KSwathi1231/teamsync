const mongoose = require("mongoose");

const leaderSchema = new mongoose.Schema(
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
      required: true,
    },

    teamId: {
      type: String,
      required: true,
      trim: true,
    },

    role: {
      type: String,
      enum: ["leader"],
      default: "leader",
    },

    profileImage: {
      type: String,
      default: "",
    },

    isVerified: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);
leaderSchema.index(
  { email: 1, teamId: 1 },
  { unique: true }
);

module.exports = mongoose.model("Leader", leaderSchema);