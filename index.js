const fs = require("fs");
const glob = require("glob");
const path = require("path");
const css = require("./css");
const argv = require("yargs-parser")(process.argv.slice(2));

require("@babel/register")({
  presets: ["@babel/react", "@babel/preset-env"]
});

const themePath = path.join(process.cwd(), argv.theme || "src/theme/theme.js");
const theme = require(themePath);

let stylesheet = ``;

const files = glob.sync("**/**.styles.js", {});

files.map(file => {
  const absolutePath = path.join(process.cwd(), file);
  const { styles } = require(absolutePath);

  stylesheet += css(styles, theme);
  stylesheet += "\n";
});

fs.writeFileSync("style.css", stylesheet);
