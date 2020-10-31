import React from 'react';

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";

const useStyles = makeStyles(styles);

export default function SectionJavascript() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.sharingArea}>
          <GridContainer xs={12} sm={12} md={12}>
            <GridItem>
              <h3>Seccion</h3>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
