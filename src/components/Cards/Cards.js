import React from "react";
import styles from "./Cards.module.css";
import CardItem from "./Card/CardItem";
import { Grid } from "@material-ui/core";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardItem
          cardtitle="Infected"
          value={confirmed.value}
          className={styles.infected}
          lastUpdate={lastUpdate}
          cardsubtitle="Number of active cases from COVID-19."
        />
        <CardItem
          cardtitle="Recovered"
          value={recovered.value}
          className={styles.recovered}
          lastUpdate={lastUpdate}
          cardsubtitle="Number of recovered cases from COVID-19."
        />
        <CardItem
          cardtitle="Deaths"
          value={deaths.value}
          className={styles.deaths}
          lastUpdate={lastUpdate}
          cardsubtitle="Number of death cases from COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Cards;
