import React from "react";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import AccessibilityNewRoundedIcon from '@material-ui/icons/AccessibilityNewRounded';
import ClassRoundedIcon from '@material-ui/icons/ClassRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <h2 className={classes.title}>
              <strong>Recursos</strong>
            </h2>
            <h6>
              Las listas de útiles escolares y uniformes para el año escolar
              2020-2021
            </h6>
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
                <Link to="/Listas-Escolares" className={classes.link}>
                  <Button color="danger" size="xs" simple>
                    <strong>Listas Escolares</strong>
                  </Button>
                </Link>
                <InfoArea
                  title="Educación Primaria"
                  icon={ClassRoundedIcon}
                  iconColor="warning"
                  vertical
                />
              </GridItem>
              <GridItem>
                <Link to="/Listas-Escolares">
                  <Button color="danger" round target="_blank">
                    <ArrowForwardIosRoundedIcon />
                    Ver mas...
                  </Button>
                </Link>
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
                <Link to="/Uniformes" className={classes.link}>
                  <Button color="danger" size="xs" simple>
                    <strong>Uniformes</strong>
                  </Button>
                </Link>
                <InfoArea
                  title="Educación Inicial"
                  icon={AccessibilityNewRoundedIcon}
                  iconColor="warning"
                  vertical
                />
              </GridItem>
              <GridItem>
                <Link to="/Uniformes">
                  <Button color="danger" round target="_blank">
                    <ArrowForwardIosRoundedIcon />
                    Ver mas...
                  </Button>
                </Link>
              </GridItem>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
