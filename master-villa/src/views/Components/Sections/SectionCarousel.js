import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";

import stylesExp from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import SectionFeed from "./SectionFeed";

const useStyles = makeStyles(styles);
const useStylesExp = makeStyles(stylesExp);

export default function SectionCarousel() {
  const classes = useStyles();
  const classesExp = useStylesExp();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <h2 className={classesExp.title}>
              <strong>Mira Nuestro Instagram</strong>
            </h2>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Button
              color="transparent"
              href="https://www.instagram.com/villamerici/"
              target="_blank"
            >
              <i className={classes.socialIcons + " fab fa-instagram"} />
              Instagram
            </Button>
          </GridItem>
          <GridItem xs={12} sm={10} md={9} className={classes.marginAuto}>
            <Card plain>
              <SectionFeed account="villamerici" numberOfMediaElements={4} />
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}