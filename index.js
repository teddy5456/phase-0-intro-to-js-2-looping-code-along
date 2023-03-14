function writeCards(namesArray, eventName) {
    let messagesArray = [];
    for (let i = 0; i < namesArray.length; i++) {
      let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
      messagesArray.push(message);
    }
    return messagesArray;
  }
  const messages = writeCards(["Ada", "Brendan", "Ali"], "birthday");
console.log(messages) 

function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }