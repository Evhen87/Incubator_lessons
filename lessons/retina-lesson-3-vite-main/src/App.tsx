import './App.css';
import image from './assets/images/image.jpg';



function App() {
    return (
        <div className="App">
            <p>Hello, Retina &#128075;</p>
            {/* <div className={'bg'}></div> */}
            <img src={image} alt="nature"/>
        </div>
    );
}

export default App;


