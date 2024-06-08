import React, { useState } from 'react';
import LinkedList from '../utils/LinkedList'; // Ensure the path is correct

const Visualizer = () => {
  const [list, setList] = useState(new LinkedList());
  const [value, setValue] = useState('');
  const [elements, setElements] = useState([]);

  const addElement = () => {
    if (value.trim() === '') {
      return;
    }

    list.append(value);
    setElements(list.toArray());
    setValue('');
  };

  const insertAtHead = () => {
    if (value.trim() === '') {
      return;
    }

    list.insertAtHead(value);
    setElements(list.toArray());
    setValue('');
  };

  const modifyValue = (index) => {
    const newValue = prompt('Enter new value:', elements[index]);
    if (newValue && newValue.trim() !== '') {
      list.update(index, newValue);
      setElements(list.toArray());
    }
  };

  const deleteNode = (index) => {
    list.delete(index);
    setElements(list.toArray());
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
      /> <br /><br />
      <button onClick={addElement} className='addButton'>Insert At Tail</button>
      <button onClick={insertAtHead} className='insertHeadButton'>Insert At Head</button>
      
      <br /><br /><br /><br /><br />

      <div className="linked-list d-flex justify-content-center align-items-center">
        <div className="staticHead">Head</div>
        <span className="arrow">→</span>
        
        {elements.map((el, index) => (
          <React.Fragment key={index}>
            <div className="node">
              <span className='nodeValue'>
                <b className='valueText'>{el}</b>
                <br />
                <button 
                  className='modifyValue' 
                  onClick={() => modifyValue(index)}
                  title="Modify Value"
                >&#9998;</button>
                <button 
                  className='deleteNode' 
                  onClick={() => deleteNode(index)}
                  title="Delete Node"
                >&#128465;</button>
              </span>  
              {index < elements.length - 1 && <span className="arrow">→</span>}
            </div>
          </React.Fragment>
        ))}
        
        {elements.length > 0 && <span className="arrow">→</span>} 
        <div className="nullNode">NULL</div>
      </div>
    </div>
  );
}

export default Visualizer;
