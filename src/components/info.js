import './style.css';
import React from 'react';
import { context } from '../text/context';
import profilepic from '../images/hair_me2020.png'

import { IoLocationSharp} from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGlobeAmericas } from "react-icons/fa";
import { RiInstagramFill} from "react-icons/ri";

function info() {
  return (
    <div className="Info">
      <div className="info-box">

        <div className="image-spacer">
          <span className="shadow"/>
          <img src={profilepic} alt={context.fullname} className="profile-pic"/>
        </div>

        <table className="nameTable">
          <tbody>
            <tr className="name"><td>{context.fullname}</td></tr>
            <tr className="title"><td>----- {context.title} -----</td></tr>
            <tr className="qualification"><td>  </td></tr>
            <tr className="qualification"><td>  </td></tr>
            <tr className="qualification"><td>{context.qualification}</td></tr>
            <tr><td>
            <table className="locTable">
            <tbody>
              <tr>
                <td className="location"><IoLocationSharp width="30px"/>  {context.location1}</td>
                <td>|</td>
                <td className="location"><IoLocationSharp width="30px"/>  {context.location2}</td>
              </tr>
            </tbody>
            </table>
            </td></tr>
          </tbody>
        </table>

        <div className="info-spacer">
          <table className="icon-table">
            <tbody className="icon-celltable">
              <tr>
                <td width="100px"><a href={context.linkedinURL} target="_blank"><FaLinkedinIn className="info-icon"/></a></td>
                <td><a href={context.linkedinURL} target="_blank" ><span className="info-text">/{context.linkedin}</span></a></td>
              </tr>
            </tbody>
            <tbody className="icon-celltable">
              <tr>
                <td width="100px"><a href={context.websiteURL} target="_blank" ><FaGlobeAmericas className="info-icon"/></a></td>
                <td><a href={context.websiteURL} target="_blank" ><span className="info-text">{context.websiteURL}</span></a></td>
              </tr>
            </tbody>
            <tbody className="icon-celltable">
              <tr>
                <td width="100px"><a href={context.instagramURL} target="_blank"><RiInstagramFill className="info-icon"/></a></td>
                <td><a href={context.instagramURL} target="_blank" ><span className="info-text">@{context.instagram}</span></a></td>
              </tr>
            </tbody>
            <tbody className="icon-celltable">
              <tr>
                <td width="100px"><a href={context.emailAddress}><MdEmail className="info-icon"/></a></td>
                <td><a href={'mailto:'+(context.emailAddress)}><span className="info-text">{context.email}</span></a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default info;
