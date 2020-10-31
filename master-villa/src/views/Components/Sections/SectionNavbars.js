import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Carousel from "react-slick";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import stylesExamp from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

import image1 from "assets/img/fotosCol/fachada-merici.jpg";
import image2 from "assets/img/fotosCol/fachada.jpg";
import image3 from "assets/img/fotosCol/fachada1.jpg";
import image4 from "assets/img/fotosCol/fachada2.jpg";

const useStyles = makeStyles(styles);
const useStylesExamp = makeStyles(stylesExamp);

export default function SectionCarousel() {
  const classes = useStyles();
  const classesExamp = useStylesExamp();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classesExamp.title}>
            <strong>Nuestras Intalaciones</strong>
          </h2>
        </GridItem>
        <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
          <Card plain carousel>
            <Carousel {...settings}>
              <div>
                <img src={image1} alt="First slide" className="slick-image" />
              </div>
              <div>
                <img src={image2} alt="First slide" className="slick-image" />
              </div>
              <div>
                <img src={image3} alt="First slide" className="slick-image" />
              </div>
              <div>
                <img src={image4} alt="First slide" className="slick-image" />
              </div>
            </Carousel>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
