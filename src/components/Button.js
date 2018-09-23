import React from "react";


const style = {
  font:{
    color:"white",
    fontSize:"1em"
  },
  small: {
    padding: 10
  },
  large: {
    padding: 20
  },
  success:{
      backgroundColor:"#5bc0de"
  },
  warning:{
      backgroundColor:"#d9534f"
  }
};

const Button = (props) => {
  const newStyle = Object.assign(
    {},
    props.size === "lg" ? style.large : style.small,
    props.type === "success" ? style.success : style.warning,
    style.font
    );
  return(
    <button onClick={props.onClick} style={newStyle}>
      {props.children}
    </button>
  )
}

export default Button;
