import logo from './logo.svg';
import './App.css';
import qrcodeimage from "./qrcodeimage.png"

function App() {
  return (
    <div className="maindiv">
      <div className='container'>
         <div className="insidediv">
          
            <img src={qrcodeimage}/>
            <div className="textdiv">
          <h3><b>Improve your front-end skills by building projects</b></h3>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
         </div>
          
         </div>
         
      </div>
    </div>
  );
}

export default App;
