const system = require("./system");
const kebabCase = require("lodash.kebabcase");

function css(styles, theme) {
  const stylesArray = flattenNestedStyles(styles);

  styleSheet = ``;

  stylesArray.forEach(function({ selector, styles }) {
    const interpolated = system.css(styles)(theme);

    const css = objectToCss(interpolated);

    styleSheet += `${selector} { \n  ${css} \n } \n`;
  });

  return styleSheet;
}

function flattenNestedStyles(styles, className) {
  const stylesArray = [];

  const keys = Object.keys(styles);

  keys.forEach(function(key) {
    if (typeof styles[key] === "object") {
      const nestedClassName = getFlatClassName(key);
      stylesArray.push({
        selector: "." + kebabCase(nestedClassName).replace("-", "--"),
        styles: styles[key]
      });
      delete styles[key];
    }
  });

  return stylesArray;
}

function getFlatClassName(selector) {
  // there are more unhandled cases for sure
  selector = selector.replace("&", "");

  if (selector.startsWith(":")) return selector;
  else return "." + selector;
}

function objectToCss(styles) {
  const propertyNames = Object.keys(styles);
  const cssArray = propertyNames.map(function(key) {
    const property = kebabCase(key);

    let value = styles[key];
    if (value && typeof value === "number") value += "px";

    return `${property}: ${value};`;
  });

  return cssArray.join("\n    ");
}

module.exports = css;
