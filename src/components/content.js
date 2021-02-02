import './style.css';
import React from 'react';
import profilepic from '../images/nic.png'
import {context} from '../text/context'
import { FaGraduationCap, FaMedal} from "react-icons/fa";
import { IoPersonCircle, IoBriefcase, IoFingerPrint, IoLanguage} from "react-icons/io5";
import { AiTwotoneExperiment} from "react-icons/ai";
import { HiOutlineCode} from "react-icons/hi";
import ProgressBar from 'react-bootstrap/ProgressBar'

function content() {
  return (
    <div className="Content">
      <div className="content-section">

        <div className="content-box">
          <table className = "box-header">
              <tbody>
              <tr>
                <td width="50px"><IoPersonCircle size="30px"/></td>
                <td>PROFILE</td>
              </tr>
              </tbody>
          </table>
          <div className="content">
            <p>{context.profile1}</p>
            <p>{context.profile2}</p>
            <p>{context.profile3}</p>
          </div>
          <table className="skill-table">
              <tbody>
               <tr>
                 <td>
                   <table width="100%">
                       <tbody>
                       <tr>
                         <td width="50px"><HiOutlineCode size="20px"/></td>
                         <td width="200px">TECH STACK</td>
                       </tr>
                       </tbody>
                   </table>
                 </td>
                  <td>
                    <table width="100%">
                        <tbody>
                        <tr>
                          <td width="50px"><IoLanguage size="20px"/></td>
                          <td width="200px">LANGUAGES</td>
                        </tr>
                        </tbody>
                    </table>
                    </td>
                </tr>
                <tr className="skill-option">
                  <td>
                  <table >
                    {context.tech.map((tech, index)=>(
                        <tbody key={index}>
                        <tr>

                          <td className="tech-title">{tech}</td>
                          <td ><ProgressBar now={60}/></td>
                        </tr>
                        </tbody>
                      ))}
                  </table>
                  </td>
                  <td>
                  <table >
                    {context.language.map((lang, index)=>(
                        <tbody key={index}>
                        <tr>
                          
                          <td className="tech-title">{lang}</td>
                          <td ><ProgressBar now={60}/></td>
                        </tr>
                        </tbody>
                      ))}
                  </table>
                  </td>
                </tr>
              </tbody>
          </table>
        </div>
        <div className="content-box">
          <table className = "box-header">
            <tbody>
            <tr>
              <td width="50px"><IoBriefcase size="30px"/></td>
              <td>WORK EXPERIENCE</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div className="content-box">
          <table className = "box-header">
            <tbody>
            <tr>
              <td width="50px"><FaGraduationCap size="30px"/></td>
              <td>EDUCATION</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div className="content-box">
          <table className = "box-header">
            <tbody>
            <tr>
              <td width="50px"><FaMedal size="30px"/></td>
              <td>ACHIEVEMENTS</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className="content-box">
          <table className = "box-header">
            <tbody>
            <tr>
              <td width="50px"><AiTwotoneExperiment size="30px"/></td>
              <td>PROJECTS</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className="content-box">
          <table className = "box-header">
              <tbody>
              <tr>
                <td width="50px"><IoFingerPrint size="30px"/></td>
                <td>ATTRIBUTE</td>
              </tr>
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default content;
