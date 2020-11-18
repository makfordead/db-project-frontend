import React, {useState} from 'react';
import Card from '@material-ui/core/Card'
import {  CardContent, CardMedia, IconButton, makeStyles, Typography } from '@material-ui/core';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import CardActions from '@material-ui/core/CardActions';
import Modal from '@material-ui/core/Modal'
import RecipePopup from './RecipePopup'
function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    root:{
        maxHeight:345,
        maxWidth:345
    },
    media:{
        height:140,
    }
  }));

export default function Recipe(props){
    
    const classes = useStyles();
    const [modalOpen,setModalOpen] = useState(false);
    const [modalStyle] = React.useState(getModalStyle);

    const handleOpen = ()=>{
        setModalOpen(true);
    }
    const handleClose = ()=>{
        setModalOpen(false);
    }
    const body = (
        <div style={modalStyle} className={classes.paper}>
          <RecipePopup rec={props.rec}/>
        </div>
      );
    return(
        <div style={{padding:"90px",minWidth:"400px"}} className= {classes.root}>

            <Modal open={modalOpen} 
                    onClose={handleClose} style={{overflow:'scroll'}}>
                        {body} 
            </Modal>
            <Card >
                    <CardMedia style={{height:"140px"}} image={props.rec.image}/>
                <CardContent>
                    <Typography>
                      {console.log(props)}
                      {props.rec.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton aria-label="add to favorites" onClick={handleOpen}>
                        <ViewAgendaIcon/>
                    </IconButton>
                </CardActions>

            </Card>
        </div>
    );
}