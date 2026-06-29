function generateTeamId() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let teamId = "TEAM_";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    teamId += characters[randomIndex];
  }

  return teamId;
}

module.exports = generateTeamId;