import React, { useState } from 'react';
import LinkedList from '../utils/LinkedList';

const Visualizer = () => {
  const [list, setList] = useState(new LinkedList());
  const [value, setValue] = useState('');
  const [elements, setElements] = useState([]);

  const addElement = () => {
    list.append(value);
    setElements(list.toArray());
    setValue('');
  };

  return (
    <div>
      <input 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        placeholder="Enter a value" 
      />
      <button onClick={addElement}>Add</button>

        <br /><br /><br />

      <div className="linked-list d-flex justify-content-center">
        {elements.map((el, index) => (
          <div key={index} className="node">
            <span className='nodeValue'>
                {el}
                {index < elements.length - 1}
            </span>  
            <span className="arrow">→</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Visualizer;