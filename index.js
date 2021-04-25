const readlineSync = require('readline-sync');

const ques = [
  (q1 = {
    q: 'Where do I stay',
    a: 'vasco',
  }),
  (q2 = {
    q: 'Who is my favourite superhero?',
    a: 'spiderman',
  }),
  (q3 = {
    q: 'Am i above 20?',
    a: 'yes',
  }),
  (q4 = {
    q: 'What is my favourite song?',
    a: 'mann mera',
  }),
  (q5 = {
    q: 'What is my favourite sport?',
    a: 'volleyball',
  }),
];

let score = 0;

var userName = readlineSync.question('Whats your name?');

console.log('Hey ' + userName + ' ,welcome to this little quiz on Amar');

const play = (q) => {
  var userAns = readlineSync.question(q.q);

  if (userAns === q.a) {
    score += 1;
    console.log('Right');
  } else {
    score -= 1;
    console.log('wrong');
  }
  console.log('current score: ' + score);
};

for (let q in ques) {
  play(ques[q]);
}

console.log('Your final score is:' + score);
