import inquirer from "inquirer";
const questions = [
  {
    type: "input",
    name: "first_name",
    message: "Welcome to the Coders Chatbox! What is your name?",
    validate(answer) {
      if (!answer) {
        return "Please enter your name";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "last_name",
    message: "Please enter your last name",
    validate(answer) {
      if (!answer) {
        return "Please enter your last name";
      }
      return true;
    },
  },
  {
    type: "number",
    name: "age",
    message: "How old are you?",
    validate(answer) {
      if (answer < 13) {
        return "You must be over 13 to create an account";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
    validate(answer) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(answer)) {
        return "Invalid email address. Example: name@email.com";
      }
      return true;
    },
  },
  {
    type: "list",
    name: "experience",
    message: "Choose your level of programming experience",
    choices: ["Noobie", "Student", "Junior dev", "Senior dev", "God"],
  },
  {
    type: "checkbox",
    name: "el_metodo",
    message: "Do you believe in El Método?",
    choices: ["Of course", "Hell yes"],
  },
  {
    type: "input",
    name: "username",
    message: "Please choose a username",
    validate: (answer) =>
      !answer || answer.length < 3
        ? "Username must be at least 3 characters long"
        : true,
  },
  {
    type: "password",
    name: "password",
    message: "Choose a password",
    mask: "*",
  },
  {
    type: "password",
    name: "confirm_password",
    message: "Confirm your password",
    mask: "*",
    validate(answer, answers) {
      if (answer !== answers.password) {
        return "Passwords don't match. Please try again.";
      }
      return true;
    },
  },
];
const program = async () => {
  await inquirer.prompt(questions).then(() => {
    console.log("Your account was created successfully. Happy chatting!");
  });
};
export default program;
await program();
