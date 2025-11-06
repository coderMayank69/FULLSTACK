import './App.css';
import ColorBoxes from './ColorBoxes';
import ColorBoxGrid from './colorBoxGrid'


function App() {
  return (   
      <ColorBoxGrid
      colors={[
    "#e63946", "#f3722c", "#f9844a", "#f9c74f", "#90be6d",
    "#43aa8b", "#577590", "#277da1", "#1b998b", "#2d6a4f",
    "#6a4c93", "#b5179e", "#f94144", "#f8961e", "#ffbf69",
    "#a7c957", "#2ec4b6", "#0077b6", "#03045e", "#ff6b6b"
           ]} 
        />
  );
}

export default App
