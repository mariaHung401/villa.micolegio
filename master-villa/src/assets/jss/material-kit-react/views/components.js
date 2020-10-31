import { container } from "assets/jss/material-kit-react.js";
import image from "assets/img/fotosCol/largo.png";

const componentsStyle = {
  container,
  brand: {
    color: "#000000",
    textAlign: "center",
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "static",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    textAlign: "center",
    backgroundImage: "url(" + image + ")",
  },
  mainRaised: {
    textAlign: "center",
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },
};

export default componentsStyle;
