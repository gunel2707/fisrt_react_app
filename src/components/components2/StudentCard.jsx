import React from "react";

// 2) StudentCard komponenti yaradın. Tələbənin name, age, and grade- ni göstərən sadə tələbə məlumat kartı komponenti yaradın.
//  App component-i 3 dene muxtelif melumatlara malik StudentCard component-ni qebul edir. Datalar props-larla ötürülür.
const StudentCard = (props) => {


  return (
    <>
     <p>Name: {props.name}</p>
     <p>Surname: {props.surname}</p>
     <p>Age: {props.age}</p>
     <p>Grade: {props.grade}</p>
    </>
  );
};

export default StudentCard;
