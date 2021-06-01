import React from 'react';
import { Card, Icon, Image, Label} from 'semantic-ui-react'
import './style.css';
import src from'../images/hair_me2020-192.png'
import {projs} from '../text/projects'
import useWindowDimensions from './windowDimensions'


function projects(){
  let itemsPerRow = 3;
  
  console.log(itemsPerRow);
  let colourMap = new Map();
  colourMap.set('SOFTWARE',{colour:'red'})
  colourMap.set('ART',{colour: 'green'})
  colourMap.set('DATA',{colour:'brown'})

  return (
    <React.Fragment>
      <Card.Group itemsPerRow={itemsPerRow}>
        {projs.p.map((proj, idx)=>{
          var colour = colourMap.get(proj.type).colour;
          return(
          <Card color={colour} key={idx}>
            <Image src={src} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{proj.title}</Card.Header>
              <Card.Meta>
                <span className='date'>{proj.date}</span>
              </Card.Meta>
              <Card.Description>
                {proj.description}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
                {proj.skills.map((tag, i)=>{
                  return(
                  <Label key={i}>
                    <Icon name='tags'/>
                      {tag}
                  </Label>);
                })}
            </Card.Content>
          </Card>);
        })}
      </Card.Group>
    </React.Fragment>
  );
}
export default projects;
