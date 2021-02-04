import './style.css';
import React from 'react';
import WorkExp from './workExp'
import Profile from './profile'
import { FaGraduationCap, FaMedal} from "react-icons/fa";
import { IoPersonCircle, IoBriefcase, IoFingerPrint,} from "react-icons/io5";
import { AiTwotoneExperiment} from "react-icons/ai";

function content() {
  return (
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
          <Profile/>
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
          <WorkExp/>
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
  );
}

export default content;
