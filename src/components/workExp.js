import './style.css';
import React from 'react';
import { context } from '../text/context';
import { GoPrimitiveDot} from "react-icons/go";
import { IoLocationSharp} from "react-icons/io5";

function workExp() {
  return (
    <div className="content">
      <table className = "work-exp-table">
        <tbody>
          {context.work.map((job,index)=>(
            <tr className="work-row" key={index}>
              {job.to.length>1 && <td className="work-date-col">{job.from} - {job.to} </td>}
              {job.to.length<1 && <td className="work-date-col">{job.from}</td> }
              <td>
                <table height="100vh"className="work-dot-col">
                  <tbody>
                    <tr><td className="work-dot"> <GoPrimitiveDot/></td></tr>
                    <tr> <div className="vertical-line"/> </tr>
                  </tbody>
                </table>
              </td>
              <td className="work-deets-col">
                <table>
                  <tbody>
                    <tr><td className="work-title">{job.title}</td></tr>
                    {job.subtitle.length>1 && <tr><td className="work-subtitle"> : {job.subtitle}</td></tr>}
                    <tr><td className="work-company">{job.company}</td></tr>
                    <tr><td className="work-subtitle"><IoLocationSharp/>  {job.location}</td></tr>
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
          <tr className="work-row"><td className="work-dot-col"></td>
          <td>
            <table className="work-dot-col">
              <tbody>
                <tr><td className="work-dot"> <GoPrimitiveDot/></td></tr>
              </tbody>
            </table>
          </td> <td></td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default workExp;
