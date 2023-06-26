// import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

import Three from "./components/Three";
import End from "./components/End";
import Map1 from "./components/Map1";
import './index.css';
// import Map1 from "./components/Map1";
// import View from "./components/View";


function App() {
  return (
    <>
      <div style={{backgroundColor:"white",padding:"10px 490px 0px 490px",minWidth:"576px",boxShadow:"10px grey"}}> 
      {/* <Header/> */}
     {/* <View/>  */}
      <Map1/> 
      <Three/>
        <End/></div>
        </>
  );
}

export default App;
