import { useState } from "react";
import LeaderInfo from "../../components/auth/LeaderInfo";
import ProjectInfo from "../../components/auth/ProjectInfo";
import TeamMembers from "../../components/auth/TeamMembers";
import Review from "../../components/auth/Review";

function RegisterLeader({ setCurrentPage }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [leaderData, setLeaderData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    teamName: "",
    projectName: "",
    projectDescription: "",
  });

  const [members, setMembers] = useState([
    {
      name: "",
      email: "",
    },
  ]);
  const previousStep = () => {
      if (step === 1) {
        setCurrentPage("landing");
      } else {
        setStep(step - 1);
      }
    };

    const nextStep = () => {

  // STEP 1 VALIDATION
  if (step === 1) {

    if (leaderData.fullName.trim() === "") {
      alert("Please enter your Full Name.");
      return;
    }

    if (leaderData.email.trim() === "") {
      alert("Please enter your Email Address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(leaderData.email)) {
      alert("Please enter a valid Email Address.");
      return;
    }

    if (leaderData.password.length <= 8) {
      alert("Password must contain at least 8 characters.");
      return;
    }

    if (leaderData.confirmPassword.trim() === "") {
      alert("Please confirm your password.");
      return;
    }

    if (leaderData.password !== leaderData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  }

  // STEP 2 VALIDATION
  if (step === 2) {

    if (leaderData.teamName.trim() === "") {
      alert("Please enter Team Name.");
      return;
    }

    if (leaderData.projectName.trim() === "") {
      alert("Please enter Project Name.");
      return;
    }

    if (leaderData.projectDescription.trim() === "") {
      alert("Please enter Project Description.");
      return;
    }
  }

  // STEP 3 VALIDATION
  if (step === 3) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    for (let i = 0; i < members.length; i++) {

      if (members[i].name.trim() === "") {
        alert(`Please enter name for Member ${i + 1}.`);
        return;
      }

      if (members[i].email.trim() === "") {
        alert(`Please enter email for Member ${i + 1}.`);
        return;
      }

      if (!emailRegex.test(members[i].email)) {
        alert(`Please enter a valid email for Member ${i + 1}.`);
        return;
      }
    }
  }

  if (step < 4) {
    setStep((prevStep) => prevStep + 1);
}
};
const createTeam = async () => {

    setLoading(true);

    try{

        // Backend API call will come here later

        await new Promise(resolve => setTimeout(resolve,1500));

        alert("🎉 Team registered successfully.\n\nPlease login using your Email and Password.");

        setCurrentPage("landing");

    }

    catch(error){

        alert("Registration failed.");

    }

    finally{

        setLoading(false);

    }

}

  return (
  <div className="register-page">
    <div className="register-container">

      <h1>Create Your Team</h1>
      <p>Step {step} of 4</p>

      <hr />

      {step === 1 && (
        <LeaderInfo
          formData={leaderData}
          setFormData={setLeaderData}
          nextStep={nextStep}
          previousStep={previousStep}
        />
      )}
      {step === 2 && (
        <ProjectInfo
          formData={leaderData}
          setFormData={setLeaderData}
          previousStep={previousStep}
          nextStep={nextStep}
        />
      )}
      {step === 3 && (
        <TeamMembers
          members={members}
          setMembers={setMembers}
          previousStep={previousStep}
          nextStep={nextStep}
        />
      )}
      {step === 4 && (
        <Review
            formData={leaderData}
            members={members}
            previousStep={previousStep}
            createTeam={createTeam}
            loading={loading}
            editLeader={() => setStep(1)}
            editProject={() => setStep(2)}
            editMembers={() => setStep(3)}
        />
      )}


    </div>
  </div>
);
}

export default RegisterLeader;