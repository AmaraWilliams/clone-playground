import React from "react";

import "../styles/components/interviewcard.css";
import Grid from "@mui/material/Grid";


/**
 * This component is used on each collection page (../templates/collection.js) to 
 * house individual interview titles, authors, photos, 
 * and descriptions. Each component is a grid row.
 * 
 * @param {*} props 
 * @returns the card component
 */

export default function QueryCard(props) {
    const playgroundObject = props.objects
        return (
            <div>
            <Grid container spacing={0} alignItems="center" justifyContent="center">

                <Grid item sm={12} md={8} style={{ padding: "0% 0% 1% 3%" }}>
                    <h1 className="header-about">{props.subteam} Team</h1>
                    <div className="horizontal-line" ></div>
                    <p className="paragraph-about padding-bottom-about">{props.about}</p>
                </Grid>

                <Grid xs={6}>

                </Grid>
            </Grid>

            <Grid container spacing={3} alignItems="center" justifyContent="center">
                
                    {playgroundObject.map((item) => ( 
                    
                    <div>
                        <div>
                            <div>
                                <img src={"https://empathy.library.gatech.edu/" + item.field_pic.uri.url} alt="object"></img>
                                <p>{item.title}</p>
                                <p>{item.title}</p>
                            </div>
                        </div>
                        <div>
                            <p>{item.title}</p>
                        </div>
                    </div>
                        
                ))}
                
            </Grid>

           

            <Grid container spacing={3} alignItems="center" justifyContent="center">
            <p>
                <a href={props.learnMore} target="_blank" rel="noopener noreferrer">
                    Learn More
                </a>
            </p>
            </Grid>

        </div>  
    );
    
}