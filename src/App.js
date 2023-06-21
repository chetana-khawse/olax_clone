import Header from "./components/Header";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

import Three from "./components/Three";
import End from "./components/End";
import Map1 from "./components/Map1";


function App() {
  return (
    <div style={{backgroundColor:"white",padding:"10px 490px 0px 490px",minWidth:"576px",boxShadow:"10px grey"}}>
      <Header/>
      <Home/>
      <Map1/>
      <Three/>
        <End/>
        </div>
  );
}

export default App;
