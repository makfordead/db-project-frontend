import React, {useState,useEffect} from 'react';
import TopBar from './TopBar'
import Recipe from './Recipe'
import axios from 'axios';
import Box from '@material-ui/core/Box';
import {useNavigate} from 'react-router-dom'
export default function Home (){
    const [recipes,setRecipes] = useState([]);
    const token = localStorage.getItem("token")
    const navigate= useNavigate()

    useEffect(() => {
        if(token ===null){
            navigate("/login")
        }
        axios.get("https://recipe-finder-db-project-back.herokuapp.com/recipe/all",{
            headers: {
              Authorization: 'Bearer ' + token //the token is a variable which holds the token
            }
           })
        .then(res => {setRecipes(res.data.list);})
        .catch(err => {console.log(err)})  
    }, [])
    return(
        <div>
            <TopBar/>
            <div style={{width:"100%"}}>
            <Box display="flex" flexDirection="row" p={1} m={1} flexWrap="wrap"
            justifyContent="space-between"  alignItems="center">
            {

                recipes.map((r,val) => {console.log(r);return (<Recipe key={val} rec={r}/>)})
            }
            </Box >
            </div>
        </div>
        );
}