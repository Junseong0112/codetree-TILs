const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const personLength = parseInt(input[0]);
const scores = {
  Bessie: 0,
  Elsie: 0,
  Daisy: 0,
  Gertie: 0,
  Annabelle: 0,
  Maggie: 0,
  Henrietta: 0,
};

// 학생들 점수 합산
for (let i = 1; i <= personLength; i++) {
  const [name, score] = input[i].split(" ");
  scores[name] += parseInt(score);
}
// 객체를 배열로 변환 map을 통해 [] -> {} 다시 만들기 그 후 정렬
const scoreArray = Object.entries(scores).map(([name, score]) => ({
  name,
  score,
}));
scoreArray.sort((a, b) => a.score - b.score);

// 두 번째 낮은 점수 찾기
let lowestScore = scoreArray[0].score;
let secondLowestScore;
for (let i = 1; i < scoreArray.length; i++) {
  if (scoreArray[i].score > lowestScore) {
    secondLowestScore = scoreArray[i].score;
    break;
  }
}

//  두 번째 낮은 점수 학생 찾기
const secondLowestScoreStudents = scoreArray.filter(
  (student) => student.score === secondLowestScore
);

if (secondLowestScoreStudents.length === 0 || secondLowestScoreStudents > 1) {
  console.log("Tie");
} else {
  console.log(secondLowestScoreStudents[0].name);
}