import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountries,handleVisitedFlag}) => {
    const {name,flags,population} = country;

    const [visited,setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited ? 'visited' : 'country'}`}>
            <h2>{name?.common}</h2>
            <div className='country-image'>
              <img src={flags.png} alt="image not found" />
            </div>
            <p>Population: {population}</p>
            <div>
                <button onClick={()=>handleVisitedCountries(country)}>Mark As visited</button>
                <button onClick={()=>handleVisitedFlag(flags.png)}>Add Flags</button>
            </div>
            <button onClick={handleVisited} style={{outline:"0" ,border:"black"}}>{visited ? "Visited" : "Plan to go"}</button>
            {
                visited ? "I have visited this country" : "I have to visit this country"
            }
        </div>
    );
};

export default Country;