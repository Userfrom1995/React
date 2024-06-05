import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 20px;
  text-align: center;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 1.5em;
  color: #333;
`;

const CardDescription = styled.p`
  margin: 0;
  font-size: 1em;
  color: #666;
`;

const CardButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #6a11cb;
  color: #fff;
  text-decoration: none;
  font-size: 1em;
  &:hover {
    background-color: #2575fc;
  }
`;





function Card(){
    return(
        <CardContainer>
        <CardImage src={image} alt={title} />
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardButton href={buttonLink}>{buttonText}</CardButton>
        </CardContent>
      </CardContainer>
      
        





    );
};

export default App