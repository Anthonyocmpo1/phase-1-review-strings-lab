const currentUser = "Your Name"; // Replace "Your Name" with the actual user name

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;
const shortGreeting = `Welcome, ${currentUser[0]}!`;

module.exports = { currentUser, welcomeMessage, excitedWelcomeMessage, shortGreeting };
