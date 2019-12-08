const responses = [
  "Ask me if I care",
  "You would be better off going to medical school",
  "You've got to be kidding",
  "You wish",
  "Would your mother approve of that?",
  "That's how you end up in jail",
  "Why would you even think that?",
  "Uh, no",
  "Outlook not so good",
  "No one likes a whiner",
  "Don't ask me, I'm a ball",
  "Yes, but do it drunk as fuck",
  "Do it and blame the patriarchy",
  "Do it, but do it in a clown outfit",
  "Helen Keller could see that that's a bad idea",
  "Epstein didn't kill himself",
  "I would give you advice, but I'm just a ball"
];

const randomResponse = () => {
  return responses[Math.floor(Math.random() * responses.length)];
};

module.exports = randomResponse;
