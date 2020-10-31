import React from "react";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import ClassIcon from '@material-ui/icons/Class';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import Filter4Icon from '@material-ui/icons/Filter4';
import Filter5Icon from '@material-ui/icons/Filter5';
import Filter6Icon from '@material-ui/icons/Filter6';

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import HeaderLeft from "components/Header/HeaderLeft.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Card from "components/Card/Card.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import primerGrado from "assets/img/docsListas/primerGrado.pdf";
import segundoGrado from "assets/img/docsListas/segundoGrado.pdf";
import tercerGrado from "assets/img/docsListas/tercerGrado.pdf";
import cuartoGrado from "assets/img/docsListas/cuartoGrado.pdf";
import quintoGrado from "assets/img/docsListas/quintoGrado.pdf";
import sextoGrado from "assets/img/docsListas/sextoGrado.pdf";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
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
                        <InfoArea
                          icon={ClassIcon}
                          iconColor="danger"
                          vertical
                        />
                        <h3 className={classes.title}>Listas Escolares</h3>
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
                sm={6}
                md={3}
                className={classes.navWrapper}
              >
                <Card>
                  <GridItem>
                    <InfoArea
                      title="1er Grado"
                      icon={Filter1Icon}
                      iconColor="warning"
                      vertical
                    />
                  </GridItem>
                  <GridItem>
                    <h5>Listas Escolares</h5>
                    <h6>
                      <strong>Primer Grado</strong>
                    </h6>
                    <Button
                      color="danger"
                      round
                      href={primerGrado}
                      target="_blank"
                    >
                      Descargar Archivo
                    </Button>
                  </GridItem>
                </Card>
              </GridItem>
              <GridItem
                justify="center"
                xs={12}
                sm={6}
                md={3}
                className={classes.navWrapper}
              >
                <Card>
                  <GridItem>
                    <InfoArea
                      title="2do Grado"
                      icon={Filter2Icon}
                      iconColor="warning"
                      vertical
                    />
                  </GridItem>
                  <GridItem>
                    <h5>Listas Escolares</h5>
                    <h6>
                      <strong>Segundo Grado</strong>
                    </h6>
                    <Button
                      color="danger"
                      round
                      href={segundoGrado}
                      target="_blank"
                    >
                      Descargar Archivo
                    </Button>
                  </GridItem>
                </Card>
              </GridItem>
              <GridItem
                justify="center"
                xs={12}
                sm={6}
                md={3}
                className={classes.navWrapper}
              >
                <Card>
                  <GridItem>
                    <InfoArea
                      title="3er Grado"
                      icon={Filter3Icon}
                      iconColor="warning"
                      vertical
                    />
                  </GridItem>
                  <GridItem>
                    <h5>Listas Escolares</h5>
                    <h6>
                      <strong>Tercer Grado</strong>
                    </h6>
                    <Button
                      color="danger"
                      round
                      href={tercerGrado}
                      target="_blank"
                    >
                      Descargar Archivo
                    </Button>
                  </GridItem>
                </Card>
              </GridItem>
              <GridItem
                justify="center"
                xs={12}
                sm={6}
                md={3}
                className={classes.navWrapper}
              >
                <Card>
                  <GridItem>
                    <InfoArea
                      title="4to Grado"
                      icon={Filter4Icon}
                      iconColor="warning"
                      vertical
                    />
                  </GridItem>
                  <GridItem>
                    <h5>Listas Escolares</h5>
                    <h6>
                      <strong>Cuarto Grado</strong>
                    </h6>
                    <Button
                      color="danger"
                      round
                      href={cuartoGrado}
                      target="_blank"
                    >
                      Descargar Archivo
                    </Button>
                  </GridItem>
                </Card>
              </GridItem>
              <GridItem
                justify="center"
                xs={12}
                sm={6}
                md={3}
                className={classes.navWrapper}
              >
                <Card>
                  <GridItem>
                    <InfoArea
                      title="5to Grado"
                      icon={Filter5Icon}
                      iconColor="warning"
                      vertical
                    />
                  </GridItem>
                  <GridItem>
                    <h5>Listas Escolares</h5>
                    <h6>
                      <strong>Quinto Grado</strong>
                    </h6>
                    <Button
                      color="danger"
                      round
                      href={quintoGrado}
                      target="_blank"
                    >
                      Descargar Archivo
                    </Button>
                  </GridItem>
                </Card>
              </GridItem>
              <GridItem
                justify="center"
                xs={12}
                sm={6}
                md={3}
                className={classes.navWrapper}
              >
                <Card>
                  <GridItem>
                    <InfoArea
                      title="6to Grado"
                      icon={Filter6Icon}
                      iconColor="warning"
                      vertical
                    />
                  </GridItem>
                  <GridItem>
                    <h5>Listas Escolares</h5>
                    <h6>
                      <strong>Sexto Grado</strong>
                    </h6>
                    <Button
                      color="danger"
                      round
                      href={sextoGrado}
                      target="_blank"
                    >
                      Descargar Archivo
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
