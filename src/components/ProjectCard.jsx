// src/components/ProjectCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;  /* Set a fixed width for the cards */
  box-sizing: border-box;
`;
const ProjectCard = ({ title, description, tech, githubUrl, deployUrl }) => (
  <Card>
    <h3>{title}</h3>
    <p>{description}</p>
    <p><strong>Technologies:</strong> {tech.join(', ')}</p>
    <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
    <br />
    <a href={deployUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
  </Card>
);

export default ProjectCard;
