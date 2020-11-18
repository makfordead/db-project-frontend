import React,{useState,useEffect} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase'
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import {useNavigate} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));
  export default function TopBar() {
    const classes = useStyles()
    const [refresh,setRefresh] = useState("1");
    useEffect(() => {
      setRefresh("2")
    },[refresh])
    const navigate = useNavigate();
    const handleLogout = ()=>{
      localStorage.removeItem("token")
      navigate("/login")
    }
    return (
      <div  className={classes.grow}>
        {console.log(classes.grow)}
        <AppBar position="static">
        
        <div style={{paddingLeft:49,paddingBottom:20,paddingTop:10}}>
        <Link to="/" style={{padding:5, color: "inherit"}} >
                Home
                
            </Link>
            
         </div> 
         
            
          
              {
                localStorage.getItem("token")!==null ? <div style={{paddingLeft:49,paddingBottom:"20px"}}>   
                <Link to="/create-recipe" style={{padding:5,color:"inherit"}} >
                    Create Recipe
                </Link>
              </div> : <h2></h2>
              }
              {
                localStorage.getItem("token")!==null ? <div style={{paddingLeft:49,paddingBottom:"10px"}}>   
                <Link to="/allrecipe" style={{padding:5,color:"inherit"}} >
                    My Recipes
                </Link>
              </div> : <h2></h2>
              }

            
              <Typography>
            
            
              
          <Toolbar>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase 
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
              
        {
                localStorage.getItem("token")!==null ? <div style={{paddingLeft:49}}>   
        <button stlye={{height:"100px"}} onClick={()=>handleLogout()}> Logout</button>
                
              </div> : <h2></h2>
              }
          </Toolbar>
            
          </Typography>
        </AppBar>
      </div>
    );
  }  