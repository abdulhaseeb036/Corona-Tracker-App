import styles from './App.module.css';
import {useEffect, useState} from 'react';
import {fetchdata} from './api/api'
import {Card, Chart, Countrypic, MenuAppBar} from './components'

function App() {

  const [data, setData] = useState({})

  const [country, setCountry] = useState('');



  useEffect(() => {
    async function getglobaldata() {
        const fetchingdata = await fetchdata();
        setData(fetchingdata);
        
    }
    getglobaldata()
}, [])

const handleCountrychange = async (country) => {
  const fetchingdata = await fetchdata(country);
  setData(fetchingdata);
  setCountry({country: country})
}

  return (
    <div className={styles.App}>
      <MenuAppBar />
       <Card data={data}/>
       <Countrypic handleCountrychange={handleCountrychange}/>
       <Chart data={data} country={country}/>
    </div>
  );
}

export default App;
