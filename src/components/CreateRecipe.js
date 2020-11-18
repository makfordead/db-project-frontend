import React,{useState,useEffect} from 'react';
import TopBar from './TopBar'
import TextField from '@material-ui/core/TextField'
import { InputBase, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button'
import axios from 'axios';
import FileBase64 from 'react-file-base64';
import Box from '@material-ui/core/Box';
import {useNavigate} from 'react-router-dom'
export default function CreateRecipe(){
    const [name,setName] = useState("");
    const [method,setMethod] = useState("");
    const [nameError,setNameError] = useState(false);
    const [methodError,setMethodError] = useState(false)
    const [Ingredients, setIngredients] = useState([]);
    const [image,setImage] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem("token")===null)
        navigate('/login')
        
    })

    const handleImageChange = (e)=> {
        setImage(e.base64)
    }
    
    const handleChangeName = (e)=>{
        if(e.target.value.length === 0)
            setNameError(true)
        else{
            setNameError(false)
            setName(e.target.value);
            console.log(e.target.value);
        }
    }
    const handleMethodChange= (e)=>{
        if(e.target.value.length === 0)
            setMethodError(true)
        else{
            setMethodError(false)
            setMethod(e.target.value);
            console.log(e.target.value);
        }
    }
    const handleAdd =() =>{

        setIngredients(Object.assign([], Ingredients, {[Ingredients.length]: {}}))
        console.log(Ingredients)
    }
    const token = localStorage.getItem("token")
    const handleCreateRecipe = ()=> {
        const obj = {"name":name,"indegrients":Ingredients,"method":method,"image":image}
        axios.post("https://recipe-finder-db-project-back.herokuapp.com/recipe/create",obj,{
            headers: {
              Authorization: 'Bearer ' + token //the token is a variable which holds the token
            }
           });
    }
    return(
        <div>
        <TopBar />
        <Box flexDirection="row" display="flex" justifyContent="center">
        <div style={{paddingLeft:"90px"}}>
        <Box flexDirection="column" flexWrap="wrap">
        <h2> RECIPE CREATOR </h2>
        <TextField error={nameError} id={nameError ? "standard-error":"standard-basic"} 
        label="name"
        onChange={e => handleChangeName(e)}
        helperText={nameError ? "Name cannot be empty" : ""}
        />
        <br/>
        <div style={{padding:5}}>
        <Typography style={{padding:5}}> 
            Ingredients 
                <AddIcon /> 
                    <Button style={{paddingBot:"5px"}} onClick={handleAdd} >
                        Add
                    </Button>
        </Typography>
        {
            Ingredients.map((key,index) => {
                return (<div><TextField label={"Ingredient # " + (index+1)} onChange={
                    e => {
                        setIngredients
                        (Object.assign([],Ingredients,{[index]:{"name": e.target.value}}));
                        console.log(Ingredients)
                }}/>
            <br/>
            </div>)})
        }
        </div>
        <TextField error={methodError} id={nameError ? "standard-error":"standard-basic"} 
        label="name"
        onChange={e => handleMethodChange(e)}
        helperText={nameError ? "Name cannot be empty" : ""} label="method" />
        <br/>
        
        <FileBase64
        multiple={ false }
        onDone={ handleImageChange } />

        <Button onClick={handleCreateRecipe}>
            Create Recipe!
        </Button>
        </Box>
        </div>
        </Box>
        </div>
    );
}