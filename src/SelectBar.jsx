import React from 'react';
const countries = [
  { name: 'India', cities: ['Mumbai', 'Delhi', 'Bangalore'] },
  { name: 'USA', cities: ['New York', 'Los Angeles', 'Chicago'] },
  { name: 'UK', cities: ['London', 'Manchester', 'Birmingham'] }
];

export function SelectBar() {
  const[selectedCountry,setSelectedCountry]=React.useState('India');
  // const[city,setCity]=React.useState('')

  const handleChange=(e)=>{
    setSelectedCountry(e.target.value);
  }
  // const handleCityChange=(e)=>{
  //   setCity(e.target.value)

  // }
  
  return (
    <div className='App'>
    <label>Select a Country:</label>
    <select onChange={handleChange}>
    {
      countries.map((country)=>{
        return(
          <option key={country.name}>{country.name}</option>
        )
      })
    }
    </select>
    <label>Select a city:</label>
    <select>
      {
        countries.find((country)=>country.name===selectedCountry)?.cities.map((city)=>{
          return(
            <option key={city}>{city}</option>
          )
        })
      }

    </select>
      
    </div>
  );
}

export default SelectBar;
