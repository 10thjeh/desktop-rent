import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const imageURL = 'https://rental.crusty-crud.xyz/img/game/';

const useStyles = makeStyles({
  root: {
    margin: 20,
  },
  media: {
    width : 275,
    height : 405
  },
  mediaPopup:{
    height: 450
  },
  marginLeft:{
    margin: 20
  }
});

const modalStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "75%"
  },
}));

function GameCard(props){

  const classes = useStyles();
  const modalClasses = modalStyles();

  const [imagePath, setImagePath] = useState(imageURL + props.imgPath.toString())
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return(
    <>
    <Box component="span" className={classes.root}>
    <Card>
      <CardActionArea onClick={handleOpen}>
        <CardMedia
        className={classes.media}
        image={imagePath}
        />
      </CardActionArea>
    </Card>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={modalClasses.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={modalClasses.paper} >
            <Grid container spacing={2}>
              <Grid item xs={6}>
              <CardMedia
              className={classes.mediaPopup}
              image={imagePath}
              />
              </Grid>
              <Grid item xs={6}>
              <Grid container alignItems="center">
               <Grid item xs>
                 <Typography gutterBottom variant="h2">
                   {props.name.toString()}
                 </Typography>
               </Grid>
               <Grid item>
                 <Typography gutterBottom variant="h4">
                   Rp {props.price.toString()} / Day
                 </Typography>
               </Grid>
             </Grid>
                <Typography variant="h4">A game for {props.platform.toString()}</Typography>
                <Divider variant="gutterbottom"/>
                <Box mt={2} mb={2}>
                  <Typography variant="h5">{props.desc.toString()}</Typography>
                </Box>
                <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
                >
                  <Button><ShoppingCartIcon/></Button>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </Box>
    </>
  )
}

export default GameCard
