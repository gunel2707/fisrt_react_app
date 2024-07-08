import React from 'react'
// 4) UserProfile component-I yaradin ve user object-I {name: “”, surname: “”} yaradin object-I props kimi göndərin,
//  eger user null olarsa ‘Loading...’ mesajini gosterin eks halda user melumatlarini gosterin. 
const UserProfile = (props) => {
  return (
    <div>
      <p>Name:{props.name}</p>
      <p>Surname:{props.surname}</p>
      
    </div>
  )
}

export default UserProfile
