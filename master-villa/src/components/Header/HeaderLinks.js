import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import Button from "components/CustomButtons/Button.js";
import Tooltip from "@material-ui/core/Tooltip";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import ListItem from "@material-ui/core/ListItem";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem} justify="center">
        <Link to="/" className={classes.navLink}>
          <strong>Inicio</strong>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          buttonText={<strong>Quienes Somos</strong>}
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              <strong>Reseña Historica</strong>
            </Link>,
            { divider: true },
            <Link to="/landing-page" className={classes.dropdownLink}>
              <strong>Misión y Visión</strong>
            </Link>,
            { divider: true },
            <Link to="/Imagenes" className={classes.dropdownLink}>
            <strong>Galeria</strong>
          </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem} justify="center">
        <Link to="/" className={classes.navLink}>
          <strong>Plan Educativo</strong>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          buttonText={<strong>Recursos</strong>}
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              <strong>Circulares Informativo</strong>
            </Link>,
            { divider: true },
            <Link to="/Uniformes" className={classes.dropdownLink}>
              <strong>Uniformes Escolares</strong>
            </Link>,
            { divider: true },
            <Link to="/Listas-Escolares" className={classes.dropdownLink}>
            <strong>Listas Escolates</strong>
          </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem} justify="center">
        <Tooltip
          color="transparent"
          id="tooltip-bottom"
          title="0412-6585241"
          placement="bottom"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button>
            <strong>Contáctanos</strong>
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
