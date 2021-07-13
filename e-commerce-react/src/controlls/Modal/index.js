import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Box, Paper, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { createAPIEndpoint, ENDPIONTS } from '../../api';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: "300px",
    height: "250px",
  },
}));

export default function TransitionsModal({ modalText, ids }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useHistory()
 console.log(ids);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button variant="contained" color="primary" size="large" onClick={handleOpen}>
        checkout
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper>
            <Box p="1rem" textAlign="center" className={classes.paper} display="flex" justifyContent="space-between" flexDirection="column">
              <Box>
              <Typography variant="h4">Your Order</Typography>
              <Typography variant="body1">{modalText}</Typography>
              </Box>
              <Box display="flex" justifyContent="center" my="1rem" >
                <Button variant="outlined" color="primary" onClick={ () => history.push('/')}>
                  Confirm order
                </Button>
              </Box>
            </Box>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}