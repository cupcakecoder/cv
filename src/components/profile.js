import './style.css';
import React from 'react';
import { context } from '../text/context';
import { IoLanguage} from "react-icons/io5";
import { HiOutlineCode} from "react-icons/hi";
import ProgressBar from 'react-bootstrap/ProgressBar';

function profile() {
  return (
    <div>
      <div className="content">
        <p dangerouslySetInnerHTML={{ __html: context.profile1}}/>
        <p dangerouslySetInnerHTML={{ __html: context.profile2}}/>
        <p dangerouslySetInnerHTML={{ __html: context.profile3}}/>
      </div>
      <table className="skill-table">
          <tbody>
           <tr>
             <td>
               <table width="100%">
                   <tbody>
                   <tr>
                     <td width="50px"><HiOutlineCode className="skill-icon"/></td>
                     <td className="tech-title-column">TECH STACK</td>
                   </tr>
                   </tbody>
               </table>
             </td>
              <td>
                <table width="100%">
                    <tbody>
                    <tr>
                      <td width="50px"><IoLanguage className="skill-icon"/></td>
                      <td className="tech-title-column">LANGUAGES</td>
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
                      <td className="lang-title">{lang}</td>
                      <td ><ProgressBar striped variant="success" now={60} active ="true"/></td>
                    </tr>
                    </tbody>
                  ))}
              </table>
              </td>
            </tr>
          </tbody>
      </table>
    </div>
  );
}

export default profile;
