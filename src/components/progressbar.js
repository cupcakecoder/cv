import React from 'react';
import './style.css'

function progressBar(props){
    //console.log(props.percentage);
    return (
      <React.Fragment>
        <div className="w3-light-grey w3-round-xlarge" >
          <div className="w3-container w3-grey w3-round-xlarge progressbar" style={{"width":props.percentage}}></div>
        </div>
        </React.Fragment>
    );
}

export default progressBar;
