import React from "react";
// 3) Button component yaradin, hansiki text ve onClick zamani isleyen funksiyani props kimi qebul edir.
// Bu komponenti əsas komponentdə müxtəlif text-ler və onClick funksiyalari ile coxlu istifadə edin.
const Button = (props) => {
  return <button style={{ color: props.color, backgroundColor:props.bg }} onClick={props.propsOnClick} >{props.text}</button>;
};

export default Button;
