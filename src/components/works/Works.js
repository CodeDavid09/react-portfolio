/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Ecommerce from '../../assets/recentprojects/Ecommerce.png';
import weatherdashboard from '../../assets/recentprojects/weatherdashboard.png';
import Startup from '../../assets/recentprojects/startup.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'React Portfolio', 
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element. Portfolio showcases previous work and is updated with new projects as they are completed.
      `,
      alter: 'React Portfolio',
      image: `${Portfolio}`,
    },
    { 
      id: 2,
      title: 'eCommerce Backend', 
      description: `Build the back end for an e-commerce site. Configure a working Express.js API to use Sequelize to interact with a MySQL database.`,
      alter: 'eCommerce',
      image: `${Ecommerce}`,
    },
    { 
      id: 3,
      title: 'Weather Dashboard', 
      description: `Build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.
      Using the OpenWeather One Call API to retrieve weather data for cities.`,
      alter: 'Weather Dashboard',
      image: `${weatherdashboard}`,
    },
    { 
      id: 4,
      title: 'Startup Project', 
      description: `A website portfolio project for the Startup Dev Team
      built using MEVN stack to demonstrate the CRUD capabilities of the tech stack.`,
      alter: 'Startup Project',
      image: `${Startup}`,
    },
    { 
      id: 5,
      title: 'LaCalle Cafe', 
      description: `A website project for the La Calle Cafe business
      built using Wordpress and PHP with integrated SEO tools to help
      the business ramp up its prospects and lead generation.`,
      alter: 'Startup Project',
      image: `${Lacalle}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
