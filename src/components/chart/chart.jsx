import React, { useEffect, useState } from 'react';
import { fetchchartdata } from '../../api/api';
import { Line, Doughnut } from 'react-chartjs-2';
import styles from '../chart/chart.module.css';

function Chart({ data: { confirmed, recovered, deaths }, country }) {
    const [chartdata, setChartdata] = useState([])  //empty object krna hy

    useEffect(() => {
        async function getdailydata() {
            setChartdata(await fetchchartdata())
        }
        getdailydata();
    }, []);


    const linechart = (
        chartdata    //.length lagana hy api k
            ? (
                <Line
                    data={{
                        labels: chartdata.map(({ date }) => date),
                        datasets: [
                            {
                                data: chartdata.map(({ confirmed }) => confirmed),
                                label: 'Infected',
                                fill: true,
                                lineTension: 0.1,
                                backgroundColor: 'rgb(255, 102, 0)',
                                borderColor: '#E74C3C',
                                borderCapStyle: "square",
                                borderDashOffset: 0,
                            },
                            {
                                data: chartdata.map(({ deaths }) => deaths),
                                label: 'Deaths',
                                fill: true,
                                lineTension: 0.1,
                                backgroundColor: 'rgb(255, 0, 0)',
                                borderColor: 'red',
                                borderCapStyle: 'square',
                                borderDashOffset: 0,

                            }
                        ]
                    }}
                />) : "loading"

    )

    const doungnutchart = (
        confirmed
            ? (
                <Doughnut className={styles.doungnutchart}
                    data={{
                        labels: [
                            'Injected',
                            'Recovereds',
                            'Deaths'
                        ],
                        datasets: [{
                            data: [confirmed.value, recovered.value, deaths.value],
                            backgroundColor: [
                                'rgb(255, 102, 0)',
                                'rgb(51, 204, 51)',
                                'rgb(255, 0, 0)'
                            ],
                        }]
                    }}
                />) : 'null'
    )

    return (
        <div className={styles.container}>
            <h1 className={styles.charname}>chart</h1>
            <div className={styles.chart}>
                {country ? doungnutchart : linechart}
            </div>
        </div>

    )
}

export default Chart;