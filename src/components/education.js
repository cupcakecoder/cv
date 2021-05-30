import './style.css';
import React from 'react';
import { context } from '../text/context';
import { GoPrimitiveDot} from "react-icons/go";
import { IoLocationSharp} from "react-icons/io5";

function education() {
  return (
    <div className="content center-content-div">
      <table className = "work-exp-table">
        <tbody>
          {context.school.map((school,index)=>(
            <tr className="work-row" key={index}>
              <td className="work-date-col">{school.to}</td>
              <td height="100vh">
                <table className="work-dot-col">
                  <tbody>
                    <tr><td className="work-dot"> <GoPrimitiveDot/></td></tr>
                    <tr><td><div className="vertical-line"/></td></tr>
                  </tbody>
                </table>
              </td>
              <td className="work-deets-col">
                <table>
                  <tbody>
                    <tr><td className="work-title">{school.title}</td></tr>
                    {school.grade.length>1 && <tr><td className="work-subtitle"> : {school.grade}</td></tr>}
                    <tr><td className="work-company">{school.school}</td></tr>
                    <tr><td className="work-subtitle"><IoLocationSharp/>  {school.location}</td></tr>
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
          <tr className="work-row"><td className="work-date-col">{context.school[context.school.length-1].from}</td>
          <td>
            <table className="work-dot-col">
              <tbody>
                <tr><td className="work-dot"> <GoPrimitiveDot/></td></tr>
              </tbody>
            </table>
          </td><td></td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default education;
