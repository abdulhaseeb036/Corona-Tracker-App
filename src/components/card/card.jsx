import React from 'react';
import { makeStyles } from '@material-ui/core'
import CountUp from 'react-countup'
import { Typography, Paper, Grid } from '@material-ui/core';
import styles from '../card/card.module.css'

const useStyles = makeStyles((theme) => ({
    root: {
        overflowX: 'hidden',
        display: 'flex',
        margin: '0 auto',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },

}));


function Card({ data: { confirmed, recovered, deaths, lastUpdate }}) {
    const classes = useStyles();

    if (!confirmed) {
        return 'loading'
    }
 

   
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xm={12} md={3} lg={3} xl={3}>
                <Paper className={styles.confirmedpaper}>
                    <Typography className={styles.confirmed} variant="h4">Confirmed</Typography>
                    <Typography variant="h5">
                        <CountUp className={styles.confirmedvalue} separator="," start={0} end={confirmed.value} duration={0.9} />
                    </Typography>
                    <Typography variant="h6">No of Confirmed Covid Cases 2021</Typography>
                    <Typography variant="caption">{new Date(lastUpdate).toDateString()}</Typography>

                </Paper>
            </Grid>

            <Grid item xm={12} md={3} lg={3} xl={3}>
                <Paper className={styles.recoverdpaper}>
                    <Typography className={styles.recovered} variant="h4">Recovered</Typography>
                    <Typography variant="h5">
                        <CountUp className={styles.recoveredvalue} separator="," start={0} end={recovered.value} duration={0.9} />
                    </Typography>
                    <Typography variant="h6">No of Recovered Covid Cases 2021</Typography>
                    <Typography variant="caption">{new Date(lastUpdate).toDateString()}</Typography>
                </Paper>
            </Grid>

            <Grid item xm={12} md={3} lg={3} xl={3}>
                <Paper className={styles.deathspaper}>
                    <Typography className={styles.deaths} variant="h4">Deaths</Typography>
                    <Typography variant="h5">
                        <CountUp className={styles.deathsvalue} separator="," start={0} end={deaths.value} duration={0.9} />
                    </Typography>
                    <Typography variant="h6">No of Deaths Covid Cases 2021</Typography>
                    <Typography variant="caption">{new Date(lastUpdate).toDateString()}</Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Card;