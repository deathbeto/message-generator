// Data arrays
const greetings = ["Hello", "Hi", "Hey", "Howdy", "Hola"];
const subjects = ["world", "friend", "stranger", "partner", "buddy"];
const actions = ["have a great day!", "enjoy your time!", "make the most of it!", "stay positive!", "keep smiling!"];

// Function to generate random number
const getRandomIndex = (array) => Math.floor(Math.random() * array.length);

// Function to generate random message
const generateMessage = () => {
    const greeting = greetings[getRandomIndex(greetings)];
    const subject = subjects[getRandomIndex(subjects)];
    const action = actions[getRandomIndex(actions)];
    return `${greeting}, ${subject}, ${action}`;
};

// Output the message
console.log(generateMessage());
