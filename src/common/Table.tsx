/* eslint-disable array-callback-return */
import * as React from 'react';
import '../App.css';
import userDetails from '../types/types';

export interface TProps {
  headers: string[];
  data: userDetails[]
}

export default function Table(props: TProps) {
  const { headers, data } = props;

  return (
    <div className="MyTable">
      <table>
        <tbody>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
          {data && data && data.length > 0 && data.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.dateOfBirth}</td>
                <td>{item.levelOfEducation}</td>
                <td>{item.gender}</td>
                <td>{item.profile}</td>
                <td>{item.password}</td>
                <button type="button">Update</button>
                <button type="button">Delete</button>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
