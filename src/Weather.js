import React, { useEffect, useState } from 'react'
import axios from 'react'
function Weather() {
    const ApiKey = '82dcab48c2783add30872391aadc69f7';
    const [data] = useState('')
    const [name, setname] = useState('')
    const [cityname, setcityname] = useState('')
    useEffect(() => {
     axios.get`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${ApiKey}`
     .then((response)=>console.log(response.data))
     .catch((err)=>console.log(err))
    }, [cityname])
    
    const handlechange=(e)=>{
        setname([e.target.name] = e.target.value)
    }
    const handleclick = ()=>{
        setcityname(name)
    }
    
  return (<>
    <h1>Weather in</h1>
    <h2>{name}</h2>
    <input placeholder='Enter City Name' name='name' type='text' onChange={handlechange} />
    <button onClick={handleclick}>Check Weather</button>
    <h2>City Name : {data && data.name}</h2>
    <h2>Temp : {data && data.main.temp-273}deg</h2>
    </>
  )
}

export default Weather;