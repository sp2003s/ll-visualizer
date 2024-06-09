import './App.css';
import Header from "./MyComponents/Header";
import Footer from './MyComponents/Footer';
import Visualizer from './MyComponents/Visualizer';

function App() {
  return (

    <div className="app-container">
      <Header title="Singly Linked List Visualizer"/>  
      <div className="content">
        <hr />
        <br/><br/><br/>
        <Visualizer/>
      </div>
      <Footer/>

      <br />
    </div>

  );
}

export default App;
