import './style.css';
import React from 'react';
import { context } from '../text/context';
import { IoLanguage} from "react-icons/io5";
import { HiOutlineCode} from "react-icons/hi";
import ProgressBar from './progressbar';

function profile() {
  return (
    <div>
      <div className="content">
        <p dangerouslySetInnerHTML={{ __html: context.profile1}}/>
        <p dangerouslySetInnerHTML={{ __html: context.profile2}}/>
        <p dangerouslySetInnerHTML={{ __html: context.profile3}}/>
      </div>
      <div className="content">
      <ul>

        <li>
          <table width="100%">
              <tbody>
              <tr>
                <td width="50px"><IoLanguage className="skill-icon"/></td>
                <td className="tech-title-column"> LANGUAGES</td>
              </tr>

              {context.language.map((lang, index)=>(
                <tr key={index}>
                  <td width="30%" className="lang-title">{lang.lang}</td>
                  <td width="70%" className="progressbar"><ProgressBar percentage={lang.percentage} className="progressbar"/></td>
                </tr>
              ))}
              </tbody>
            </table>
          </li>
          <li>
            <table width="100%">
                <tbody>
                <tr>
                  <td width="50px"><HiOutlineCode className="skill-icon"/></td>
                  <td className="tech-title-column">TECH STACK</td>
                </tr>
                {context.tech.map((tech, index)=>(
                <tr key={index}>
                  <td width="30%" className="tech-title">{tech.tech}</td>
                  <td width="70%" className="progressbar"><ProgressBar percentage={tech.percentage} /></td>
                </tr>
                  ))}
                </tbody>
              </table>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default profile;
