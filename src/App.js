import './App.css';
import Header from "./MyComponents/Header";
import Footer from './MyComponents/Footer';
import Visualizer from './MyComponents/Visualizer';

function App() {
  return (

    <>
      <Header title="Linked List Visualizer"/>  

      <hr />
      <br/><br/><br/>

      <Visualizer/>  

      <br/><br/><br/><br/>

      <hr />
    
      <Footer/>
    </>


  );
}

export default App;
