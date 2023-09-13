import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [countriesVisited,setCountriesVisited] = useState([]);

  const [visitedFlag,setVisitedFlag] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) =>{
    const newVisitedCountry = [...countriesVisited,country];
    setCountriesVisited(newVisitedCountry);
  }
  
  const handleVisitedFlag = (flag) =>{
    const newVisitedFlag = [...visitedFlag,flag];
    setVisitedFlag(newVisitedFlag);
  }
  return (
    <div>
      <h1>Names Of Countries In The World</h1>
      <div>
        <p>Countries I have visited: {countriesVisited.length}</p>
        <ul>
        {
            countriesVisited.map((country) => <li key={country?.name?.common}>{country?.name?.common}</li>)
        }
        
        </ul>
        <div className="visited-img-container">
        {
            visitedFlag.map((flag,idx) => <img key={idx} src={flag} ></img>)
        }
        </div>
      </div>
      {/* Showing Card Info about All countries */}
      <div className="country-container">
        {
            countries.map((country) => (
            <Country key={country?.cca3}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
            country={country}></Country>
            ))
        }
      </div>
    </div>
  );
};

export default Countries;
