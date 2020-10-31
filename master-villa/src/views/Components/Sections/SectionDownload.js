import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

import Footer from "components/Footer/Footer.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.sharingArea}>
          <GridContainer xs={12} sm={12} md={12}>
            <GridItem>
              <h3>
                <strong>Contacta con nosotros!!</strong>
              </h3>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem>
              <h6>
                <strong>0412-6585241</strong>
              </h6>
              <h6>
                <strong>admvillamerici@gmail.com</strong>
              </h6>
            </GridItem>
          </GridContainer>
          <Footer />
        </div>
      </div>
    </div>
  );
}
