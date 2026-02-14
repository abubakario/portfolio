import React from 'react'
import styled from 'styled-components'


const Card = styled.div`
width: 330px;
height: 490px;
background-color: ${({ theme }) => theme.card};
cursor: pointer;
border-radius: 10px;
box-shadow: 0 0px 12px rgba(0, 0, 0, 0.4);
overflow: hidden;
padding:26px 20px;
display: flex;
flex-direction: column;
gap: 14px;
transition: all 0.5s ease-in-out;
}
`;
const Image = styled.img`
width: 60%;
height: 50%;
border-radius: 10px;
object-fit: cover;
margin: 0 auto;
`;
const Tags = styled.div`
width: 100%;
display: flex;
gap: 8px;
flex-wrap: wrap;
margin-top: 4px;
`;
const Details = styled.div`
width: 100%;
display: flex;
flex-direction: column;
// gap: 0px;
flex-wrap: wrap;
padding: 0px 2px;`;
const Title = styled.div`
font-size: 20px;
font-weight: 600;
color: ${({ theme }) => theme.text_secondary};
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`;
const Date = styled.div`
font-size: 12px;
font-weight: 400;
margin-left: 2px;
color: ${({ theme }) => theme.text_secondary + 80};
@media only screen and (max-width: 768px) {
font-size: 10px;
}
`;
const Description = styled.div`
font-weight: 400;
color: ${({ theme }) => theme.text_secondary + 99};
overflow: hidden;
margin-top: 8px;
display: -webkit-box;
-webkit-line-clamp: 6;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between; /* Spaced between as requested */
    align-items: center;
    gap: 12px;
    margin-top: 18px;
    width: 100%;
`;

export const Button = styled.a`
    flex: 1; /* Makes both buttons the same width */
    padding: 10px;
    background-color: ${({ theme }) => theme.primary + '15'}; /* Slight tint */
    color: ${({ theme }) => theme.primary};
    border: 1.5px solid ${({ theme }) => theme.primary};
    text-align: center;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.primary};
        color: white;
        box-shadow: 0 0 15px ${({ theme }) => theme.primary + '80'};
    }
`;





const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} />
      {/* <Tags>{project.tags} </Tags> */}
      <Details>
        <Title>{project.title}</Title>
        {/* <Date>{project.date}  </Date> */}
        <Description>{project.description}</Description>
      </Details>

      <ButtonGroup>
        <Button href={project.github} target="_blank">
          Github
        </Button>
        <Button href={project.weblink} target="_blank">
          View
        </Button>
      </ButtonGroup>
    </Card>

  )
}

export default ProjectCard;