import React from 'react';
import { Card, Icon, Label} from 'semantic-ui-react'
import './style.css';
// import src from'../images/hair_me2020-192.png'
import {achievements} from '../text/achievements'
import useWindowDimensions from './windowDimensions'

const Achievements = () => {
  let itemsPerRow
   const { height, width } = useWindowDimensions();
   if (width < 768) {
      itemsPerRow = 1;
    }else{
      itemsPerRow = 2;
    }

  console.log(itemsPerRow);
  let colourMap = new Map();
  colourMap.set('Work',{colour:'brown'})
  colourMap.set('x',{colour: 'green'})
  colourMap.set('y',{colour:'brown'})
  return (
     <div className="content">
       <Card.Group itemsPerRow={itemsPerRow}>
         {achievements.p.map((achieve, idx)=>{
           var colour = colourMap.get(achieve.type).colour;
           return(
           <Card color={colour} key={idx}>
             <Card.Content>
               <Card.Header className="work-title proj-title">{achieve.title}</Card.Header>
               <Card.Meta>
                 <span className='date work-subtitle'>{achieve.date} | {achieve.collaboration}</span>
               </Card.Meta>
               <Card.Description className="desc">
                 <span dangerouslySetInnerHTML={{ __html: achieve.description}}/>
               </Card.Description>
             </Card.Content>
             <Card.Content extra className="skill-tags-space" >
                 {achieve.skills.map((tag, i)=>{
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
export default Achievements;
