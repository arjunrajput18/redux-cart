//Redux
//ref https://www.youtube.com/watch?v=DBIsm8qxAUI
//Basically redux is A container where you can store your whole application data
//Redux is used for state Management
//state container where we hold the state data and we can access this data anywhere in the program.
//It store the entire state of an application in one centralized location.
//it doesn't belong to the component state.
//it is bsically application state.
//eg shopping cart add to cart product so everyWhere it will automatically update with help of store.
//we can use contextApi or MobX instead of redux but they are not that much efficient or popular but redux is efficient.
//Redux Architecture.
//4 main  pillars  1st is view 2nd is Action 3rd is reducer 4th is store. VARS
//view -React Component eg button checkbox etc
//view ke kisi event pe action call hota hai example button click pe event call hota hai aur koi checkbox tick karne pr  event call hota hai
//Action -collect data from component or API
//Reducer-Get Data from Action and send to store , Data ko filter karna.eg new users or update users
//Store - state of complete Application  we can send data to view  , we can use in any component. one application have one store. data always in unidirectional 
//mobile ka data search kiya tho vho reducer may jaaga then store may then view se data milega


//
//props sending
////object ke andhar data always  like data={{name:"Arjun"}}

//destructuring
// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// // { sourceProperty: targetVariable }
// let {width: w, height: h, title} = options;

// // width -> w
// // height -> h
// // title -> title

// alert(title);  // Menu
// alert(w);      // 100
// alert(h);      // 200


//step 1 Redux
//any component come to app goes from HomeContainer

//action btnclick pr redux may store karwa denga
//Addto cart pe click karoge tho action through data jaayega and price may bhi update hoga
//basically data ko send karta hai react ke component se redux ke store ke andhar
//REDUCER :-action se jo data milta hai vho store ke andhar push karta hai.
//store se data dekhta hai
//container

//connect redux with react
//import react-redux,action and component
//data send and data get ke kaam aata hai below methods
//use mapDispatchToProps:--component se data store may bhejne keliye
//use mapStateToProps:--data used kar ne ke liye 

//