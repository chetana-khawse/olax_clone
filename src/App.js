import Header from "./components/Header";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from "./components/Map";
import Three from "./components/Three";


function App() {
  return (
    <div style={{backgroundColor:"black",padding:"10px 50px 0px 50px"}}>
      <Header/>
      <Home/>
      <Map/>
      <Three/>
    </div>
  );
}

export default App;
