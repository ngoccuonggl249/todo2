const white = "#FFFFFF";
const black = "#161617";
const gray = "#D6EAF8";
const darkslategray = "#2F4F4F";

const themeLight = {
  background: gray,
  text: black,
  inputBackground: white,
};

const themeDark = {
  background: black,
  text: white,
  inputBackground: darkslategray,
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;
