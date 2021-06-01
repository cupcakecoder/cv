import React from 'react';
import preface_profile from'../images/Nicola_Profile-preface.pdf';
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

  let colourMap = new Map();
  colourMap.set('Work',{colour:'brown'})
  colourMap.set('x',{colour: 'green'})
  colourMap.set('y',{colour:'brown'})
  return (
     <div className="content">
       <Card.Group itemsPerRow={itemsPerRow}>
         {achievements.p.map((achieve, idx)=>{
           var colour = colourMap.get(achieve.type).colour;
           var note = achieve.note;
           return(
           <Card color={colour} key={idx}>
             <Card.Content>
               <Card.Header className="work-title proj-title">{achieve.title}</Card.Header>
               <Card.Meta>
                 <span className='date work-subtitle'>{achieve.date} |</span> <span dangerouslySetInnerHTML={{__html: achieve.collaboration}}/>
               </Card.Meta>
               <Card.Description className="desc">
                 <span dangerouslySetInnerHTML={{ __html: achieve.description}}/>
                 {note == "preface_profile" && <span><b><a href = {preface_profile} target="_blank">TEACHER PROFILE HERE</a></b></span>}

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
