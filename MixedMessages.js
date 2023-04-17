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
  console.log(randMsg1() + randMsg2() + randMsg3());
}

randInspMsg();