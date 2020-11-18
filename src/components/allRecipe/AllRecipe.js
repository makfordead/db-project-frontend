import React, {useState,useEffect} from 'react';
import Recipe from '../Recipe'
import axios from 'axios';
import Box from '@material-ui/core/Box';
import TopBar from '../TopBar';
import {useNavigate} from 'react-router-dom'
export default function AllRecipe (){
    const [recipes,setRecipes] = useState([]);
    const token = localStorage.getItem("token")
    useEffect(() => {
        
        axios.get("https://recipe-finder-db-project-back.herokuapp.com/unregistered/recipe/all"
            )
        .then(res => {setRecipes(res.data.list); console.log(res)})
        .catch(err => {console.log(err)})  
    },[])
    return(
        <div>
            <TopBar />
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