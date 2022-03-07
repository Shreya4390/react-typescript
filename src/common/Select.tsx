import * as React from 'react';
export interface SelectProps {
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select(props: SelectProps) {
  const { options, onChange } = props;
  return (
    <div className="m-1 p-1">
      <select
        defaultValue={options[0]}
        className="form-select"
        onChange={onChange} 
      >
        {options.map((op, i) => (
          <option key={i} value={op}>
            {op}
          </option>
        ))}
      </select>
    </div>
  );
}



