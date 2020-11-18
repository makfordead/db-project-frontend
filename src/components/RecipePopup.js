import React, {useState} from 'react';
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import { List, ListItem } from '@material-ui/core';
export default function RecipePopup(props){
    {console.log("====>" + props.rec)}
    return(
        <Card>
                <CardContent>
                    <Typography>
                        Name
                    </Typography>
                    <Typography>
                        {props.rec.name}
                    </Typography>
                    <Typography>
                       Indegredient 
                    </Typography>
                        <List>
                        
                        {
                        props.rec.indegrients.map(r => {
                            return (
                                <ListItem>
                                    <Typography>
                                        {r.name}
                                    </Typography>
                                </ListItem>
                            );
                        })
                        }
                        </List>
                        
                        <Typography>
                            <div style={{fontWeight:"bold"}}>Method </div>
                        </Typography>
                        <Typography>
                            Place it on a stove and blah blah
                        </Typography>
                </CardContent>
        </Card>
    );

}