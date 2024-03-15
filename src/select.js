import React from 'react'
const countries=[
    {
        country:'india',
        city:'Delhi'
    },
    {
        country:'USA',
        city:'newyork'
    },
    {
        country:'canada',
        city:'Ottawa'
    }
]

const Select = () => {
    const[country,setCountry]=React.useState('India');
    const[city,setCity]=React.useState('')
    const changeCountry=(e)=>{
       const  selectedCountry=e.target.value;
        setCountry(selectedCountry);
        const selectedCity=countries.find(item=>item.country===setCountry).city;
        setCity(selectedCity)
    }
  return (
    <div>
        <select value={country} onChange={changeCountry}>
          {  countries.map((coun,i)=>{
                return(
                    <div>
                           <option type='text' value={coun.country}>{coun.country}</option>
                    </div>
                )

            })
        }
        </select>
        <p>Selected Country:{country}</p>
        <p>City:{city}</p>
      
    </div>
  )
}

export default Select
