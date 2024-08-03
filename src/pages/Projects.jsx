// src/pages/Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import styled from 'styled-components';


const ProjectsContainer = styled.div`
  padding: 20px;
`;

const ProjectsList = styled.div`
  display: flex;
  flex-wrap: wrap;  /* Allows wrapping of cards to the next line */
  gap: 20px;  /* Adds spacing between cards */
  justify-content: center;  /* Centers the cards horizontally */
`;

const projects = [
  {
    title: 'Eshop laravel,crud, session, dashboard',
    description: 'use master branch in github to see the code. you can use this superadmin credentials to see the dashboard : -email : hatemmoalla368@gmail.com -password : steelseries368',
    tech: ['laravel'],
    githubUrl: 'https://github.com/hatemmoalla368/Eshop-Laravel-crud-session-dashboard-please-read-readme-',
    deployUrl: 'http://www.eshop.wuaze.com'
  },
  {
    title: 'frontend, react, hooks, crud, filepond',
    description: '',
    tech: ['react','nodejs','express'],
    githubUrl: 'https://github.com/hatemmoalla368/Frontend-React-CRUD-hooks-filepond-cloudinary-usememo-confirmalert-mui-bootstrap-read-readme-',
    deployUrl: 'https://frontend-react-crud-hooks-filepond-cloudinary-usemem-cvtdsmo1s.vercel.app/'
  },
  {
    title: 'frontend, react, redux, crud, panier, stripe, middleware, jwt',
    description: 'you can use this superadmin credentials to see the list of users and list of orders : -email : hatemmoalla368@gmail.com -password : steelseries368',
    tech: ['react','nodejs','express'],
    githubUrl: 'https://github.com/hatemmoalla368/frontend-react-redux-crud-carousel-mui-filepond-stripe',
    deployUrl: 'https://frontend-react-redux-crud-carousel-mui-filepond-stri-acgew3t9k.vercel.app/'
  },
  // Add more projects
];

const Projects = () => (
  <ProjectsContainer>
    <h2>My Projects</h2>
    <ProjectsList>
      {projects.map(project => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </ProjectsList>
  </ProjectsContainer>

);

export default Projects;
