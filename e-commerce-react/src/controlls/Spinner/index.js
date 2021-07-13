import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: '500px',
    overflow: 'hidden',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    
    },
  },
  customSpinner: {
    width: '95px !important',
    height: '400px !important' ,
    display: 'flex',
  }
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.customSpinner} color="primary" />
    </div>
  );
}