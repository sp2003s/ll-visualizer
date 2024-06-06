import './App.css';
import Header from "./MyComponents/Header";
import Footer from './MyComponents/Footer';
import Visualizer from './MyComponents/Visualizer';

function App() {
  return (

    <>
      <Header title="Linked List Visualizer"/>  

      <br/><br/><br/><br/>

      <Visualizer/>  

      <br/><br/><br/><br/>
    
      <Footer/>
    </>


  );
}

export default App;
