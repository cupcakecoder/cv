import './style.css';
import React from 'react';
import WorkExp from './workExp';
import Profile from './profile';
import Education from './education';
import Projects from './projects';
import Achievements from './achievements';
import { context } from '../text/context';
import { FaGraduationCap, FaMedal} from "react-icons/fa";
import { IoPersonCircle, IoBriefcase, IoFingerPrint,} from "react-icons/io5";
import { RiUserSearchFill} from "react-icons/ri";
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
              <td width="50px"><AiTwotoneExperiment size="30px"/></td>
              <td>PROJECTS</td>
            </tr>
            </tbody>
          </table>

            <Projects/>
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
              <td width="50px"><FaMedal size="30px"/></td>
              <td>ACHIEVEMENTS</td>
            </tr>
            </tbody>
          </table>
          <Achievements/>
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
          <Education/>
        </div>

        <div className="content-box lastbox">
          <table className = "box-header">
              <tbody>
              <tr>
                <td width="50px"><RiUserSearchFill size="30px"/></td>
                <td>REFERENCE</td>
              </tr>
              </tbody>
          </table>
          <div className="content">
            <p>{context.reference}</p>
          </div>
        </div>

        <footer className="footer">HAND CRAFTED BY NICOLA WONG 2021
        </footer>
      </div>

  );
}

export default content;
