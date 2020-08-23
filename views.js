const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");
const gradient = require("gradient-string");

const displayCountdown = (minutes,seconds) => {
  clear();
  console.log(`
  ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨
  ${chalk.bold.bgMagenta(gradient.rainbow(' Hai Arnold Therigan, are you ready ?'))}

${gradient.atlas.multiline(figlet.textSync(minutes + ' : ' + seconds))}
  🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼
  `);
};

module.exports = { displayCountdown };
