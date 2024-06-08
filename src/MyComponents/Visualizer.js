import React, { useState } from 'react';
import LinkedList from '../utils/LinkedList';

const Visualizer = () => {
  const [list, setList] = useState(new LinkedList());
  const [value, setValue] = useState('');
  const [elements, setElements] = useState([]);

  const addElement = () => {
    if (value.trim() === '') { // Check for empty or whitespace value
      return;
    }

    list.append(value);
    setElements(list.toArray());
    setValue('');
  };

  return (
    <div className='visualizer-container'>
      <input 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        placeholder="Enter a value" 
        className='valueInput'
        required
      />
      <button onClick={addElement} className='addButton'>Add</button>
      
      <br /><br /><br /><br /><br />

      <div className="linked-list d-flex justify-content-center">
        {elements.map((el, index) => (
          <div key={index} className="node">
            <span className='nodeValue'>
              <b>{el}</b>
              <br />
              <button>Modify</button>
              <button>Delete</button>
            </span>  
            {index < elements.length - 1 && <span className="arrow">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Visualizer;
