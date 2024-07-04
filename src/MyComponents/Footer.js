import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid footer'>

        <div className='row d-flex justify-content-around'> 
            <div className='col-md-6'> <a href='https://www.linkedin.com/in/shaurya-pratap-singh-/' target="blank" rel="noopener noreferrer">  <img src='/images/linkedIN512.png'/> </a> </div>
            <div className='col-md-6'> <a href='https://github.com/sp2003s' target="blank" rel="noopener noreferrer"> <img src='/images/github512.png'/> </a> </div>
        </div>

        <div className='row d-flex justify-content-around'> 
            <div className = 'col-md-12'>Made With <b style={{color: 'red', fontSize: '1.6em'}}>&hearts;</b> By Shaurya Pratap Singh</div>
        </div>

    </div>
  )
}

export default Footer