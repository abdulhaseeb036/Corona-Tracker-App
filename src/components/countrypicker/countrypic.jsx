import { FormControl, NativeSelect } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {fetchcountrypicker} from '../../api/api'
import styles from '../countrypicker/countrypic.module.css'


function Countrypic({handleCountrychange}) {

    const [countryname, setCountryname] = useState([]);

    useEffect(()=> {
        async function getcountryname() {
            setCountryname(await fetchcountrypicker());
        }
        getcountryname();
    })
    return (
        <FormControl className={styles.container}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountrychange(e.target.value)} className={styles.selectcountry}>
                <option className={styles.options} value="">Global</option>
                {countryname.map((countriesname, ind) => {
                    return <option key={ind} value={countriesname}>{countriesname}</option>
                })}
            </NativeSelect>
        </FormControl>
    )
}

export default Countrypic;