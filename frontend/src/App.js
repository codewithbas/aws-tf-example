import logo from './logo.svg';
import './App.css';



function App() {
  const onSubmit = () => {
    console.log(process.env.REACT_APP_API_ENDPOINT)
    const url = process.env.REACT_APP_API_ENDPOINT + "/?name=API"
    fetch(url).then(response => (response.text()).then(data => { alert(data) }));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p><label for="name"><input type="text" id="name" /></label></p>
        <p><label for="submit"><button id="submit" onClick={onSubmit}>OK</button></label></p>

      </header>
    </div>
  );
}

export default App;
