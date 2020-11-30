import React from 'react';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import classes from './Projects.module.css';

const Projects = () => {

  const projects = [
    { 
        title: "The Sanitizing Shop",
        description: "A mock e-commerce app that sells sanitizing products, such as wet wipes and hand sanitizers, that was \"inspired\" by the COVID-19 pandemic. Uses the MERN Stack.",
        chips: ['React', 'Redux', 'Material UI', 'Firebase', 'Heroku', 'MongoDB', 'Express', 'Node.js'],
        image: 'sanitizing.png',
        liveLink: 'https://the-sanitizing-shop.herokuapp.com/',
        githubLink: 'https://github.com/michaelmamuric/the-sanitizing-shop'
    },
    {
        title: "Weather App",
        description: "A Simple Weather App that uses the WeatherAPI Service to get the weather conditions of a particular location, such as the current temperature, humidity, and wind speed.",
        chips: ['React', 'Redux', 'Material UI', 'Weather API', 'Firebase'],
        image: 'weather-app.jpg',
        liveLink: 'https://weather-app-mmamuric.web.app/',
        githubLink: 'https://github.com/michaelmamuric/weather-app'        
    },
    {
        title: "Mario & Luigi Dash",
        description: "A Two-Player Java Game that uses Object-Oriented concepts such as Multithreading and Sockets.",
        chips: ['Java', 'JavaFX'],
        image: 'mario.jpg',
        liveLink: null,
        githubLink: 'https://github.com/michaelmamuric/MarioAndLuigi_ClientServerGame'        
    }    
  ];

  return (
      <Grid id="projects" item xs={12} className={classes.ProjectsGrid}>
        <h1>Here are some of my works.</h1>
        <br />
        <Grid container spacing={1}>
          {
              projects.map((project) => {
                  return (
                      <Grid key={`Project-${project.title}`} item xs={12} sm={6} style={{padding: '15px'}}>
                          <img src={`./${project.image}`} alt={project.title} className={classes.ProjectImg} />
                          <h3>{project.title}</h3>
                          {
                            project.chips.map((chip, index) => {
                                return ( 
                                    <React.Fragment key={`Chip-${project.title}-${index}`}> 
                                        <Chip style={{fontFamily: 'Titillium Web'}} label={chip} />&nbsp;&nbsp;
                                    </React.Fragment>
                                );
                            })
                          }
                          <p>{project.description}</p>
                          {
                            project.liveLink !== null ?
                            <a href={project.liveLink} className={classes.LiveDemo}>View Demo</a>
                            : null
                          }
                          {
                            project.githubLink !== null ?
                            <a href={project.githubLink} className={classes.LiveDemo}>View Code</a>
                            : null
                          }
                      </Grid>    
                  )
              })
          }
        </Grid>
    </Grid>
  )
}

export default Projects;