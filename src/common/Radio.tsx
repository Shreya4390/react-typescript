import * as React from 'react';
import '../App.css'
export interface RadioProps {
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}

export default function Radio(props: RadioProps) {
  const { onChange, id } = props;
  return (
    <div className="p-1 m-1">
      <div id={id} onChange={onChange}>
        <span className="radio-container">Gender</span> <span className="radio-container">
          <input className="radio-text" type="radio" value="male" name="radio" defaultChecked /> Male
          <input className="radio-text" type="radio" value="female" name="radio" /> Female
        </span>
      </div>
    </div>
  );
}
