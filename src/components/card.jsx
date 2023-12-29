import React from 'react';
import './card.css';

const Card = ({ date, title, body, buttonText, button, button2, button3 }) => {
  
  const cardStyles = {
    textAlign: 'left',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    fontSize: '13px',
  };

  const containerStyles = {
    display: 'flex',
    alignItems: 'center',
  };

  const imgStyles = {
    width: '50px', 
    height: '40px',
    borderRadius: '50%',
    marginRight: '15px', 
  };

  const titleStyle = {
    flex: '1', 
  };

  const buttondownload = {
    padding: '15px 60px',
    backgroundColor: 'white',
    color: '#2C3FFF',
    borderRadius: '18px',
    border: '1px solid #2C3FFF',
    cursor: 'pointer',
    margin: '50px 5px 5px', 
  };

  const buttonStyle = {
    padding: '10px 30px',
    backgroundColor: '#03C03C',
    color: 'white',
    borderRadius: '8px',
    border: '1px #03C03C',
    cursor: 'pointer',
    margin: '10px',
  };

  const buttonStyle2 = {
    padding: '7px 40px',
    backgroundColor: '#2549EE',
    color: 'white',
    borderRadius: '8px',
    border: '1px #2549EE',
    cursor: 'pointer',
    margin: '10px',
  };

  const buttonStyle3 = {
    padding: '7px 40px',
    backgroundColor: '#D93EFF',
    color: 'white',
    borderRadius: '8px',
    border: '1px #D93EFF',
    cursor: 'pointer',
    margin: '10px',
  };

  const formattedBody = { __html: body.replace(/\n/g, '<br>') };

  return (
    <div className="card" style={cardStyles}>
      <h4>{date}</h4>
      <div style={containerStyles}>
        {button && <button style={buttonStyle}>{button}</button>}
        {button2 && <button style={buttonStyle2}>{button2}</button>}
        {button3 && <button style={buttonStyle3}>{button3}</button>}
        <img src="/images/image1.jpg" alt="Card" style={imgStyles} />
        <h2 style={titleStyle}>{title}</h2>
      </div>
      <p style={{ color: '#B8B8B8', whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={formattedBody} />
        <button style={buttondownload}>{buttonText}</button>
    </div>
  );
};

export default Card;