import React from "react";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import WcIcon from '@material-ui/icons/Wc';
import ChildCareIcon from '@material-ui/icons/ChildCare';

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

import uniforme1 from "assets/img/docsListas/uniforme1.png";
import uniforme2 from "assets/img/docsListas/uniforme2.png";
import uniforme3 from "assets/img/docsListas/uniforme3.png";
import uniforme4 from "assets/img/docsListas/uniforme4.png";
import uniforme5 from "assets/img/docsListas/uniforme5.png";

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
      <Parallax image={require("assets/img/fotosCol/instituto2.png")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.section}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <div className={classes.profile}>
                  <div className={classes.name}>
                    <Card>
                      <GridItem>
                        <InfoArea icon={WcIcon} iconColor="danger" vertical />
                        <h3 className={classes.title}>Uniformes</h3>
                      </GridItem>
                    </Card>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem
                justify="center"
                xs={12}
                sm={12}
                md={6}
                className={classes.navWrapper}
              >
                <Card>
                  <GridItem>
                    <InfoArea
                      title="Preescolar"
                      icon={ChildCareIcon}
                      iconColor="warning"
                      vertical
                    />
                  </GridItem>
                  <GridItem className={classes.marginAuto}>
                    <h5>Uniforme Diario</h5>
                    <h6>
                      <strong>Niñas</strong>
                    </h6>
                    <Carousel {...settings}>
                      <div>
                        <img
                          src={uniforme1}
                          alt="First slide"
                          className="slick-image"
                        />
                      </div>
                    </Carousel>
                    <Button
                      color="warning"
                      round
                      href={uniforme1}
                      target="_blank"
                    >
                      Descargar Imagen
                    </Button>
                  </GridItem>
                </Card>
              </GridItem>
              <GridItem
                justify="center"
                xs={12}
                sm={12}
                md={6}
                className={classes.navWrapper}
              >
                <Card>
                  <GridItem>
                    <InfoArea
                      title="Preescolar"
                      icon={ChildCareIcon}
                      iconColor="warning"
                      vertical
                    />
                  </GridItem>
                  <GridItem className={classes.marginAuto}>
                    <h5>Uniforme Diario</h5>
                    <h6>
                      <strong>Niñas</strong>
                    </h6>
                    <Carousel {...settings}>
                      <div>
                        <img
                          src={uniforme2}
                          alt="First slide"
                          className="slick-image"
                        />
                      </div>
                    </Carousel>
                    <Button
                      color="warning"
                      round
                      href={uniforme2}
                      target="_blank"
                    >
                      Descargar Imagen
                    </Button>
                  </GridItem>
                </Card>
              </GridItem>
              <GridItem
                justify="center"
                xs={12}
                sm={12}
                md={6}
                className={classes.navWrapper}
              >
                <Card>
                  <GridItem>
                    <InfoArea
                      title="Preescolar"
                      icon={ChildCareIcon}
                      iconColor="warning"
                      vertical
                    />
                  </GridItem>
                  <GridItem className={classes.marginAuto}>
                    <h5>Uniforme Diario</h5>
                    <h6>
                      <strong>Niños</strong>
                    </h6>
                    <Carousel {...settings}>
                      <div>
                        <img
                          src={uniforme3}
                          alt="First slide"
                          className="slick-image"
                        />
                      </div>
                    </Carousel>
                    <Button
                      color="warning"
                      round
                      href={uniforme3}
                      target="_blank"
                    >
                      Descargar Imagen
                    </Button>
                  </GridItem>
                </Card>
              </GridItem>
              <GridItem
                justify="center"
                xs={12}
                sm={12}
                md={6}
                className={classes.navWrapper}
              >
                <Card>
                  <GridItem>
                    <InfoArea
                      title="Preescolar"
                      icon={ChildCareIcon}
                      iconColor="warning"
                      vertical
                    />
                  </GridItem>
                  <GridItem className={classes.marginAuto}>
                    <h5>Uniforme de Deportes</h5>
                    <h6>
                      <strong>Niños</strong>
                    </h6>
                    <Carousel {...settings}>
                      <div>
                        <img
                          src={uniforme4}
                          alt="First slide"
                          className="slick-image"
                        />
                      </div>
                    </Carousel>
                    <Button
                      color="warning"
                      round
                      href={uniforme4}
                      target="_blank"
                    >
                      Descargar Imagen
                    </Button>
                  </GridItem>
                </Card>
              </GridItem>
              <GridItem
                justify="center"
                xs={12}
                sm={12}
                md={6}
                className={classes.navWrapper}
              >
                <Card>
                  <GridItem>
                    <InfoArea
                      title="Preescolar"
                      icon={ChildCareIcon}
                      iconColor="warning"
                      vertical
                    />
                  </GridItem>
                  <GridItem className={classes.marginAuto}>
                    <h5>Uniforme de Karate</h5>
                    <h6>
                      <strong>Niñas y Niños</strong>
                    </h6>
                    <Carousel {...settings}>
                      <div>
                        <img
                          src={uniforme5}
                          alt="First slide"
                          className="slick-image"
                        />
                      </div>
                    </Carousel>
                    <Button
                      color="warning"
                      round
                      href={uniforme5}
                      target="_blank"
                    >
                      Descargar Imagen
                    </Button>
                  </GridItem>
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
