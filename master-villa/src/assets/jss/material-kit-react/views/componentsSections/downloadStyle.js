import { container } from "assets/jss/material-kit-react.js";
import image from "assets/img/fotosCol/fondoAmarillo.png";

const downloadStyle = {
  section: {
    padding: "70px 0",
    backgroundImage: "url(" + image + ")",
  },
  container,
  sharingArea: {
    marginTop: "80px"
  },
  socials: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    fontSize: "20px",
    marginRight: "40px",
    textAlign: "center",
  },
  textCenter: {
    textAlign: "center",
  },
};

export default downloadStyle;
