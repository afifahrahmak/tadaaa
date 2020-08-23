const { displayCountdown } = require("./views");
const figlet = require("figlet");
const chalk = require("chalk");
const gradient = require("gradient-string");
const clear = require("clear");


const timer = seconds =>
  new Promise((resolve, reject) => {
    let minute = Math.floor(seconds/60)
    let second = seconds % 60;
    displayCountdown(minute, second)
    const waktu = setInterval(() => {
      seconds -= 1
      minute = Math.floor(seconds/60)
      second = seconds % 60
      if (seconds <= 0) {
        resolve();
        clear();
        clearInterval(waktu)
        console.log('🤪✌🏻🧑🏻‍💻🥳🥰🎉🌸✨🌼🔥🌻🍔🍟🍕🤪✌🏻🧑🏻‍💻🥳🥰🎉🌸✨🌼🔥🌻🍔🍟🍕🤪✌🏻🧑🏻‍💻🥳🥰🎉🌸🌼🥳🥰🎉🌸✨\n')
        console.log(chalk.black.bold(gradient.cristal.multiline(
          figlet.textSync("HBD NOLD :)",
            {
              font: 'colossal',
              horizontalLayout: 'default',
              verticalLayout: 'default',
            }))));
        console.log('🤪✌🏻🧑🏻‍💻🥳🥰🎉🌸✨🌼🔥🌻🍔🍟🍕🤪✌🏻🧑🏻‍💻🥳🥰🎉🌸✨🌼🔥🌻🍔🍟🍕🤪✌🏻🧑🏻‍💻🥳🥰🎉🌸🌼🥳🥰🎉🌸✨')
      } else {
        displayCountdown(minute,second)
      }
    }, 1000);
  });

module.exports = {
  timer
};
