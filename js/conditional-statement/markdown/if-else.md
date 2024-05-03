### Grade Evaluation

```js
function gradeEvaluation(grade) {
  if (grade < 60) {
    return "Fail";
  }
  return "Pass";
}
console.log(gradeEvaluation(61)); //Pass
console.log(gradeEvaluation(59)); //Fail
```

### Age Group Determination

```js
function ageGroupDetermination(age) {
  if (age < 13) {
    return "Child";
  } else if (age > 19) {
    return "Adult";
  } else {
    return "Teenager";
  }
}

console.log(ageGroupDetermination(12));
```
