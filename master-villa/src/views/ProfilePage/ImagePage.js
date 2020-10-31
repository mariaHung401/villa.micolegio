import React from "react";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import WcIcon from '@material-ui/icons/Wc';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import HeaderLeft from "components/Header/HeaderLeft.js";
import Parallax from "components/Parallax/Parallax.js";
import Card from "components/Card/Card.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Carousel from "react-slick";

import image1 from "assets/img/fotosCol/fachada-merici.jpg";
import image2 from "assets/img/fotosCol/actividad4.jpg";
import image3 from "assets/img/fotosCol/grupos4.jpg";
import image4 from "assets/img/fotosCol/actividad3.jpg";
import image5 from "assets/img/fotosCol/actividad2.jpg";
import image6 from "assets/img/fotosCol/instituto3.jpg";
import image7 from "assets/img/fotosCol/grupos5.jpg";
import image8 from "assets/img/fotosCol/grupos1.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function Page1(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div>
      <Header
        brand={<HeaderLeft />}
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/fotosCol/fachada-merici.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.section}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <div className={classes.profile}>
                  <div className={classes.name}>
                    <Card>
                      <GridItem>
                        <InfoArea
                          icon={ArtTrackIcon}
                          iconColor="danger"
                          vertical
                        />
                        <h3 className={classes.title}>Galeria de Imagenes</h3>
                      </GridItem>
                    </Card>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={7} className={classes.marginAuto}>
                <Card plain carousel>
                  <Carousel {...settings}>
                    <div>
                      <img
                        src={image1}
                        alt="First slide"
                        className="slick-image"
                      />
                    </div>
                  </Carousel>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.marginAuto}>
                <Card plain carousel>
                  <Carousel {...settings}>
                    <div>
                      <img
                        src={image2}
                        alt="First slide"
                        className="slick-image"
                      />
                    </div>
                  </Carousel>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.marginAuto}>
                <Card plain carousel>
                  <Carousel {...settings}>
                    <div>
                      <img
                        src={image3}
                        alt="First slide"
                        className="slick-image"
                      />
                    </div>
                  </Carousel>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
                <Card plain carousel>
                  <Carousel {...settings}>
                    <div>
                      <img
                        src={image4}
                        alt="First slide"
                        className="slick-image"
                      />
                    </div>
                  </Carousel>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
                <Card plain carousel>
                  <Carousel {...settings}>
                    <div>
                      <img
                        src={image5}
                        alt="First slide"
                        className="slick-image"
                      />
                    </div>
                  </Carousel>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.marginAuto}>
                <Card plain carousel>
                  <Carousel {...settings}>
                    <div>
                      <img
                        src={image6}
                        alt="First slide"
                        className="slick-image"
                      />
                    </div>
                  </Carousel>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4} className={classes.marginAuto}>
                <Card plain carousel>
                  <Carousel {...settings}>
                    <div>
                      <img
                        src={image8}
                        alt="First slide"
                        className="slick-image"
                      />
                    </div>
                  </Carousel>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={7} className={classes.marginAuto}>
                <Card plain carousel>
                  <Carousel {...settings}>
                    <div>
                      <img
                        src={image7}
                        alt="First slide"
                        className="slick-image"
                      />
                    </div>
                  </Carousel>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
