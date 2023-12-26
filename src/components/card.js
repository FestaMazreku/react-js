import React from 'react';
import './card.css';

const Card = ({ date, title, body, buttonText, button, button2, button3 }) => {
  const cardStyles = {
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    fontSize: '13px',
  };

  const imgStyles = {
    width: '20%',
    height: '20%',
    borderRadius: '50%',
    marginBottom: '15px',
  };

  const buttonStyles = {
    padding: '15px 60px',
    backgroundColor: 'white',
    color: '#0066b2',
    borderRadius: '18px',
    border: '1px solid #0066b2',
    cursor: 'pointer',
    margin: '10px',
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
    backgroundColor: '#1C39BB',
    color: 'white',
    borderRadius: '8px',
    border: '1px #1C39BB',
    cursor: 'pointer',
    margin: '10px',
  };

  const buttonStyle3 = {
    padding: '7px 40px',
    backgroundColor: '#9932CC',
    color: 'white',
    borderRadius: '8px',
    border: '1px #9932CC',
    cursor: 'pointer',
    margin: '10px',
  };

  return (
    <div className="card" style={cardStyles}>
      <h5>{date}</h5>
      <button style={buttonStyle}>{button}</button>
      <button style={buttonStyle2}>{button2}</button>
      <button style={buttonStyle3}>{button3}</button>
      <img src="/images/image1.jpg" alt="Card" style={imgStyles} />
      <h2>{title}</h2>
      <p style={{color: '#B8B8B8'}}>{body}</p>
      <button style={buttonStyles}>{buttonText}</button>
    </div>
  );
};

export default Card;