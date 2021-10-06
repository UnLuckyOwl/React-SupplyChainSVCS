import React from 'react'
import './Loads.css'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'
import scraper from '../../media/image1.JPG'
import pink from '../../media/pink.PNG'
import military from '../../media/military.jpg'
import pan from '../../media/KTECA.jpg'
import flatbed from '../../media/image2.JPG'
import rig from '../../media/Rig.jpg'

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: '#181818', // theme.palette.text.secondary,
        fontWeight: '600',
        backgroundColor: '#aaaaaa', //theme.palette.success.light,
    },
}))

function Loads() {
    const classes = useStyles()

    return (
        <div className="loads">
            <div className="header">
                <h1>
                    Some of Our <span>Loads</span>
                </h1>
            </div>
            <Grid container spacing={6} className={classes.grid}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Paper
                        className={classes.paper}
                        style={{ height: '275px' }}
                    >
                        <img src={scraper} alt="" />
                        <p>
                            Ballast Regulator on Stretch RGN trailer in Kansas
                            City, KS.
                        </p>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Paper
                        className={classes.paper}
                        style={{ height: '275px' }}
                    >
                        <img src={pink} alt="" />
                        <p>Office Crew on location at Kansas City, KS.</p>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Paper
                        className={classes.paper}
                        style={{ height: '275px' }}
                    >
                        <img src={military} alt="" />
                        <p>
                            Loading of Military equipment on RGN trailer in
                            Texarkana, TX.
                        </p>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Paper
                        className={classes.paper}
                        style={{ height: '275px' }}
                    >
                        <img src={pan} alt="" />
                        <p>Pan Scrapper on RGN trailer in Oklahoma.</p>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Paper
                        className={classes.paper}
                        style={{ height: '275px' }}
                    >
                        <img src={flatbed} alt="" />
                        <p>80 ft rail on Stretch Flatbed in Kansas City, KS.</p>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Paper
                        className={classes.paper}
                        style={{ height: '275px' }}
                    >
                        <img src={rig} alt="" />
                        <p>96,000 lbs. Concrete Beam in Dallas, TX.</p>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Loads
