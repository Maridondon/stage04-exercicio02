const listOfStudents = [
  {
    name: "Katarina",
    firstTestScore: 8,
    secondTestScore: 6,
  },
  {
    name: "Mario",
    firstTestScore: 7,
    secondTestScore: 9,
  },
  {
    name: "Aloi",
    firstTestScore: 9,
    secondTestScore: 6,
  },
  {
    name: "Vitor",
    firstTestScore: 10,
    secondTestScore: 9,
  },
  {
    name: "Mel",
    firstTestScore: 5,
    secondTestScore: 5,
  },
]

function averageStudent(firstTestScore, secondTestScore) {
  return ((firstTestScore + secondTestScore) / 2);
}

function averagePrintStudent(student) {
  const note = averageStudent(student.firstTestScore, student.secondTestScore)
  if (note >= 7) {
    return `O(a) Aluno(a) ${student.name} tem uma média de: ${note} 
    Parabéns ${student.name}. Você foi aprovado(a)!`;
  } else {
    return `O(a) Aluno(a) ${student.name} tem uma média de: ${note} 
   Sinto muito, se esforce mais na proxima!`
  }
}

for (let student of listOfStudents) {
  let notes = averagePrintStudent(student);
  alert(notes);
}
