import React from 'react';
import "../styles/modale.css";

const Modale = (props) => {
    const text = props.propValue;
  
  return (
<div className="modale" style={{ display: "none" }}>
<p>{text}</p>
</div>
 
  );
};

export default Modale;
