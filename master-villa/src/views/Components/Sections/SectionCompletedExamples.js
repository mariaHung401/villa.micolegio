import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Carousel from "react-slick";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";

import FileCopyIcon from '@material-ui/icons/FileCopy';

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";
import stylesProf from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);
const useStylesProf = makeStyles(stylesProf);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  const classesProf = useStylesProf();
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
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <h3>
              <strong>Listas Escolates</strong>
            </h3>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <div className={classes.profile}>
              <div className={classes.name}>
                <Card>
                  <GridItem>
                    <InfoArea
                      icon={FileCopyIcon}
                      iconColor="warning"
                      vertical
                    />
                  </GridItem>
                  <GridItem>
                    <div>
                      <h3>
                        <strong>Educación Inicial</strong>
                      </h3>
                    </div>
                    <Button
                      href="#"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="warning"
                    >
                      <strong>Ver</strong>
                    </Button>
                  </GridItem>
                </Card>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <div className={classes.profile}>
              <div className={classes.name}>
                <Card>
                  <GridItem>
                    <InfoArea
                      icon={FileCopyIcon}
                      iconColor="warning"
                      vertical
                    />
                  </GridItem>
                  <GridItem>
                    <div>
                      <h3>
                        <strong>Educación Primaria</strong>
                      </h3>
                    </div>
                    <Button
                      href="#"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="warning"
                    >
                      <strong>Ver</strong>
                    </Button>
                  </GridItem>
                </Card>
              </div>
            </div>
          </GridItem>
          {/* <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src="" alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img src="" alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img src="" alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img src="" alt="First slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem> */}
        </GridContainer>
      </div>
    </div>
  );
}
