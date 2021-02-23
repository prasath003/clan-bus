import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Button,Icon } from '@material-ui/core';
import plainchair from '../../assets/images/plainchair.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    bus:{
      margin: '10px 0px 0px 0px'
    },
    seating :{
        border : '1px solid black',

    },
    seat:{
        margin : '5px 0 0 0',
        padding: '10px',
        width: '20px',
        height: '20px',
        background : plainchair
    }
}));


function Book() {
    const svgIcon = (
        <Icon>
            <img alt="edit" src={plainchair} />
        </Icon>
    );
    
    const seatUpper = [{
        seatNo: 'UH1'
    },{
        seatNo: 'UH2'
    },{
        seatNo: 'UH3'
    },{
        seatNo: 'UH4'
    },{
        seatNo: 'UH5'
    },{
        seatNo: 'UH6'
    },{
        seatNo: 'UH7'
    },{
        seatNo: 'UH8'
    },{
        seatNo: 'UH9'
    },{
        seatNo: 'UH10'
    },{
        seatNo: 'UH11'
    },{
        seatNo: 'UH12'
    }];

    const seatLower = [{
        seatNo: 'UH1'
    },{
        seatNo: 'UH2'
    },{
        seatNo: 'UH3'
    },{
        seatNo: 'UH4'
    },{
        seatNo: 'UH5'
    },{
        seatNo: 'UH6'
    },{
        seatNo: 'UH7'
    },{
        seatNo: 'UH8'
    },{
        seatNo: 'UH9'
    },{
        seatNo: 'UH10'
    },{
        seatNo: 'UH11'
    },{
        seatNo: 'UH12'
    }];


    const classes = useStyles();


    return (
        <Container maxWidth="sm">

            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={6} className={classes.bus}>
                        <div className={classes.seating}>
                            {seatLower.map((item,i) => {
                                return(
                                    <img alt={item.seatNo} className={classes.seat} src={plainchair}/>
                                )})}
                        </div>
                    </Grid>

                    <Grid item xs={6} className={classes.bus}>
                        <div className={classes.seating}>
                            {seatLower.map((item,i) => {
                                return(
                                    <img alt={item.seatNo} className={classes.seat} src={plainchair}/>
                                )})}
                        </div>
                    </Grid>
                </Grid>

                <Grid container spacing={1}>
                    <Grid item xs={6} className={classes.bus}>
                        <div className={classes.seating}>
                            {seatLower.map((item,i) => {
                                return(
                                    <img alt={item.seatNo} className={classes.seat} src={plainchair}/>
                                )})}
                        </div>
                    </Grid>
                    <Grid item xs={6} className={classes.bus}>
                        <div className={classes.seating}>
                            {seatLower.map((item,i) => {
                                return(
                                    <img alt={item.seatNo} className={classes.seat} src={plainchair}/>
                                )})}
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Container>


    );
}

export default Book;