// Voting Eligibility
// Input: Age of a person
// Output: "Eligible to vote" if age is 18 or above, "Not eligible to vote" otherwise.

function votingEligibility(age) {
  let result;
  if (age >= 18) {
    result = "Eligible to vote";
  } else {
    result = "Not eligible to vote";
  }
  return result;
}

console.log(votingEligibility(18)); //Eligible to vote
console.log(votingEligibility(12)); // Not eligible to vote
