import React from "react";
const User = (props) => {
//  console.log(props.data.name)

const {data:d}=props
 return (<>
    <div>
    {/* <h1>hii</h1> */}
    <h2>{d.name}</h2>
    <h3>{d.age}</h3>
        <h1>User Component</h1>
    </div>
  </>);
};

export default User;


//components folder :-components banege usemay header ,footer,navbar ,search,users etc 
//containers folder :- component and redux(service folder) mapping karega
//service   action    reducers    constants:-action se data reducers may jayega konsa datakonse function may jaayega yeah constants batega
