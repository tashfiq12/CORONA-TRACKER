import React, { useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";
import coronaImage from "./images/image.png";

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");
  useEffect(() => {
    const fetchDatafromAPI = async () => {
      const fetcheddata = await fetchData();
      setData(fetcheddata);
    };
    fetchDatafromAPI();
  }, []);
  const handleCountryChange = async (country) => {
    const fetcheddata = await fetchData(country);
    setData(fetcheddata);
    setCountry(country);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
