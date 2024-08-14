import React from 'react'

const Box = (props) => {
  let result;
  if(
    props.title==="Computer" &&
    props.result!=="tie" &&
    props.result!==""
  ){
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }

  return (
    <div className={`box ${result} box-mobile-ver`}>
      <div className=''>
        <h1>{props.title}</h1>      
        <h2>{props.item && props.item.name}</h2>
      </div>
      <div className='vertical-align'>
      <img
        className='item-img img-size'
        src={props.item && props.item.img ? props.item.img : "https://raw.githubusercontent.com/escookie/rock/main/img/rsp.png"}
        alt={props.item ? props.item.name : "No image available"}
        />
      </div>
      <div><h2>{result}</h2></div>
    </div>
  );
};

export default Box;
