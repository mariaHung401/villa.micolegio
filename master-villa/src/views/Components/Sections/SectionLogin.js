import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import styleslog from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";

const useStyles = makeStyles(styles);
const useStyleslog = makeStyles(styleslog);

export default function Components() {
  const classes = useStyles();
  const classeslog = useStyleslog();
  return (
    <div className={classes.section}>
      <div className={classeslog.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <div className={classes.profile}>
              <div className={classes.name}>
                <Card>
                  <CardHeader color="warning" className={classes.cardHeader}>
                    <GridItem>
                      <div>
                        <h3>
                          <strong>Educación Inicial y Primaria</strong>
                        </h3>
                      </div>
                    </GridItem>
                  </CardHeader>
                  <CardBody>
                    <Button
                      href="#"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"
                    >
                      <strong>Ver</strong>
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <div className={classes.profile}>
              <div className={classes.name}>
                <Card>
                  <CardHeader color="warning" className={classes.cardHeader}>
                    <GridItem>
                      <div>
                        <h3>
                          <strong>Formación Especializada</strong>
                        </h3>
                      </div>
                    </GridItem>
                  </CardHeader>
                  <CardBody>
                    <Button
                      href="#"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"
                    >
                      <strong>Ver</strong>
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <div className={classes.profile}>
              <div className={classes.name}>
                <Card>
                  <CardHeader color="warning" className={classes.cardHeader}>
                    <GridItem>
                      <div>
                        <h3>
                          <strong>Personal Docente Profesional</strong>
                        </h3>
                      </div>
                    </GridItem>
                  </CardHeader>
                  <CardBody>
                    <Button
                      href="#"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"
                    >
                      <strong>Ver</strong>
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}