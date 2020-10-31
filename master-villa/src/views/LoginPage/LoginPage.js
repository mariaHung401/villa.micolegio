import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <GridItem>
            <div>
              <h3 className={classes.title}>
                <strong>Misión</strong>
              </h3>
            </div>
          </GridItem>
          <Card>
            <CardBody>
              <h5 className={classes.title}>
                Consolidar nuestra filosofía de "educar para la vida" preparando a niños y jóvenes con una formación integral, progresista y experimental, fundamentada en la práctica de aprender haciendo, proyectándoles hacia un futuro seguro a través del trabajo mancomunado de un equipo comprometido con el éxito.
              </h5>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <GridItem>
            <div>
              <h3 className={classes.title}>
                <strong>Visión</strong>
              </h3>
            </div>
          </GridItem>
          <Card>
            <CardBody>
              <h5 className={classes.title}>
                Brindar la mejor formación integral al niño y joven utilizando como herramienta los valores cívicos y morales, hábitos de trabajo y estudio, en armonía con una conciencia colectiva que contribuya a su consolidación como un ser crítico y constructivo, en búsqueda de la verdad, la justicia y la excelencia.
              </h5>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
