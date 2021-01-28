import axios from 'axios';
const url = "https://covid19.mathdro.id/api"


// card data from api with confirmed , deaths, recovered & lastUpdate only.
// cuz there are lot of data we desturured only these.
export const fetchdata = async(country) => {
    let changeurl = url;

    if (country) {
        changeurl = `${url}/countries/${country}`
    }

    try {
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeurl);
        return {confirmed, recovered, deaths, lastUpdate}
    } catch (error){
        console.log(error)

    }
}



////////////// chart data only from api
export const fetchchartdata = async() => {
    try {
        const {data} = await axios.get(`${url}/daily`);
        const modifiedchartdata = data.map((dailydata)=>({
            confirmed: dailydata.confirmed.total,
            deaths: dailydata.deaths.total,
            recovered: dailydata.recovered.total,
            date: dailydata.reportDate
        }))
    return modifiedchartdata
    } catch (error){
        console.log(error)
    }
}


// country fetch data
export const fetchcountrypicker = async() => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);
        return countries.map(countries=> countries.name)

    } catch (error){
        console.log(error)
    }

}