import React from 'react';
import { Card, Icon, Image, Label} from 'semantic-ui-react'
import './style.css';
// import src from'../images/hair_me2020-192.png'
import {projs} from '../text/projects'
import useWindowDimensions from './windowDimensions'

const Projects = () => {
  let itemsPerRow
   const { height, width } = useWindowDimensions();
   if (width < 768) {
      itemsPerRow = 1;
    }else{
      itemsPerRow = 2;
    }

  let colourMap = new Map();
  colourMap.set('SOFTWARE',{colour:'red'})
  colourMap.set('ART',{colour: 'green'})
  colourMap.set('DATA',{colour:'brown'})
  return (
     <div className="content">
       <Card.Group itemsPerRow={itemsPerRow}>
         {projs.p.map((proj, idx)=>{
           var colour = colourMap.get(proj.type).colour;
           return(
           <Card color={colour} key={idx}>
             <Card.Content>
               <Card.Header className="work-title proj-title">{proj.title}</Card.Header>
               <Card.Meta>
                 <span className='date work-subtitle'>{proj.date} |</span> <span dangerouslySetInnerHTML={{__html: proj.collaboration}}/>
               </Card.Meta>
               <Card.Description className="desc">
                 <span dangerouslySetInnerHTML={{ __html: proj.description}}/>
               </Card.Description>
             </Card.Content>
             <Card.Content extra className="skill-tags-space" >
                 {proj.skills.map((tag, i)=>{
                   return(
                       <Label key={i} className="tags">
                            <Icon name="check"/> {tag}
                       </Label> );
                 })}
             </Card.Content>
           </Card>);
         })}
       </Card.Group>
     </div>
   );
  };
export default Projects;
