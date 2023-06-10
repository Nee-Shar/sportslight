import Home from './Home';
import logo from '../assets/logo.png';

function App() {

  return <div>
    <div className='site-name' style={{textAlign: 'center', marginTop: '2%'}}>
      <img src={logo}/>
    </div>
    <Home/>
  </div>
    
}

export default App
