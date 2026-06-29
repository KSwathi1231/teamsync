const generateTeamId = require("../utils/generateTeamId");
const generateInviteCode = require("../utils/generateInviteCode");
const bcrypt=require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const Team = require("../models/Team");
const Leader = require("../models/Leader");
const Member = require("../models/Member");


const registerLeader = async (req, res) => {
    let session;
  try {
    const { leader, project, members } = req.body;
    if (!leader || !project || !members) {
        return res.status(400).json({
            success: false,
            message: "Required data is missing.",
        });
        }
    if (!leader.fullName || !leader.email || !leader.password) {
    return res.status(400).json({
        success: false,
        message: "Leader information is incomplete.",
    });
    }

    if (!project.teamName || !project.projectName || !project.projectDescription) {
    return res.status(400).json({
        success: false,
        message: "Project information is incomplete.",
    });
    }

    if (!Array.isArray(members) || members.length === 0) {
    return res.status(400).json({
        success: false,
        message: "At least one team member is required.",
    });
    }
    const existingProject = await Team.findOne({
        projectName: project.projectName,
        });
        if(existingProject){
            return res.status(400).json({
            success: false,
            message: "Project name already exists. Please choose another project name.",
            });
        }
    const teamId = generateTeamId();
    const inviteCode = generateInviteCode();

    console.log("Generated Team ID:", teamId);
    console.log("Generated Invite Code:", inviteCode);

    const hashedPassword = await bcrypt.hash(leader.password, 10);

    session = await mongoose.startSession();
    session.startTransaction();

    console.log("Hashed Password:", hashedPassword);

    const newLeader = await Leader.create(
        [
            {
            fullName: leader.fullName,
            email: leader.email,
            password: hashedPassword,
            teamId: teamId,
            },
        ],
        { session }
        );
            await Team.create(
        [
            {
            teamId,
            teamName: project.teamName,
            projectName: project.projectName,
            projectDescription: project.projectDescription,
            inviteCode,
            leaderId: newLeader[0]._id,
            },
        ],
        { session }
        );
    const memberDocuments = members.map((member) => ({
    fullName: member.fullName,
    email: member.email,
    password: "",
    teamId,
    status: "Invited",
    }));

    await Member.insertMany(memberDocuments, { session });

    await session.commitTransaction();
    
    console.log("Leader:", leader);
    console.log("Project:", project);
    console.log("Members:", members);

    return res.status(201).json({
        success: true,
        message: "Team created successfully.",
        teamId,
        inviteCode,
    });

  } catch (error) {

    if (session) {
        await session.abortTransaction();
    }

    return res.status(500).json({
        success: false,
        message: error.message,
    });

    }
    finally {

        if(session){

            session.endSession();

        }

    }
};

const leaderLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required.",
      });
    }

    // Find leader by email
    const leader = await Leader.findOne({ email });

    if (!leader) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or Password.",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, leader.password);

    console.log("Password Entered:", password);
    console.log("Password Match:", isMatch);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or Password.",
      });
    }
    const token = jwt.sign(
    {
        leaderId: leader._id,
        teamId: leader.teamId,
        role: leader.role,
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "7d",
    }
    );

    return res.status(200).json({
    success: true,
    message: "Login Successful.",

    token,

    leader: {
        id: leader._id,
        fullName: leader.fullName,
        email: leader.email,
        teamId: leader.teamId,
        role: leader.role,
    },
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const memberLogin = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Member Login API Working",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createMemberPassword = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Create Member Password API Working",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerLeader,
  leaderLogin,
  memberLogin,
  createMemberPassword,
};