let randMsg1 = () => {
  let msg1 = ['Have a ', 'It\'s a ', 'I hope you have a '];
  let randNum = Math.floor(Math.random() * 3);
  return msg1[randNum];
}

let randMsg2 = () => {
  let msg2 = ['great ', 'fantastic ', 'beautiful '];
  let randNum = Math.floor(Math.random() * 3);
  return msg2[randNum];
}

let randMsg3 = () => {
  let msg3 = ['day!', 'week!', 'year!'];
  let randNum = Math.floor(Math.random() * 3);
  return msg3[randNum];
}

let randInspMsg = () => {
  return randMsg1() + randMsg2() + randMsg3();
}

console.log(randInspMsg());

let quoteButton = document.querySelector('button');
function runQuote(){
  document.querySelector('p').innerHTML = randInspMsg();
}
quoteButton.onclick = runQuote;