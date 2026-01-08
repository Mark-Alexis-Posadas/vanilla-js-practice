const scoresChallenge = (scores) => {
  const filteredScores = scores
    .filter((score) => score >= 60)
    .map((item) => `Score: ${item}`);

  return filteredScores;
};

module.exports = scoresChallenge;
