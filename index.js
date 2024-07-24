// Añadir un nuevo array de mensajes (se actualizo?)
const greetings = ["Hello", "Hi", "Hey", "Howdy", "Hola"];
const subjects = ["world", "friend", "stranger", "partner", "buddy"];
const actions = ["have a great day!", "enjoy your time!", "make the most of it!", "stay positive!", "keep smiling!"];

// Función para generar un número aleatorio
const getRandomIndex = (array) => Math.floor(Math.random() * array.length);

// Función para generar un mensaje aleatorio
const generateMessage = () => {
    const greeting = greetings[getRandomIndex(greetings)];
    const subject = subjects[getRandomIndex(subjects)];
    const action = actions[getRandomIndex(actions)];
    return `${greeting}, ${subject}, ${action}`;
};

// Salida del mensaje
console.log(generateMessage());