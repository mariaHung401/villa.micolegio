import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/components/headerLeftStyle.js";

import logo from "assets/img/fotosCol/logo2.png";

const useStyles = makeStyles(styles);

export default function HeaderLeft() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <img src={logo} />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <h4>
              <strong>
                Instituto Integral de Educación Infantil Villa Merici
              </strong>
            </h4>
          </GridItem>
        </GridContainer>
      </ListItem>
    </List>
  );
}
