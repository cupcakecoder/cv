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
            <tr className="qualification"><td>{context.qualification}</td></tr>
            <tr className="qualification"><td><IoLocationSharp width="30px"/>{context.location}</td></tr>
          </tbody>
        </table>

        <div className="info-spacer">
          <table className="icon-table">
            <tbody className="icon-table">
              <tr>
                <td width="100px"><a href={context.linkedinURL}><FaLinkedinIn/></a></td>
                <td><a href={context.linkedinURL}><span className="info-text">{context.linkedin}</span></a></td>
              </tr>
            </tbody>
            <tbody className="icon-table">
              <tr>
                <td width="100px"><FaGlobeAmericas/></td>
                <td><span className="info-text">{context.websiteURL}</span></td>
              </tr>
            </tbody>
            <tbody className="icon-table">
              <tr>
                <td width="100px"><a href={context.instagramURL}><RiInstagramFill/></a></td>
                <td><a href={context.instagramURL}><span className="info-text">{context.instagram}</span></a></td>
              </tr>
            </tbody>
            <tbody className="icon-table">
              <tr>
                <td width="100px"><a href={context.emailAddress}><MdEmail/></a></td>
                <td><a href={context.emailAddress}><span className="info-text">{context.email}</span></a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default info;
