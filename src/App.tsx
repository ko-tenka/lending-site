import './App.css'
import Loyaut from './components/Loyaut/Loyaut'
import Content from './components/Content/Content'
import From from './components/Form/Form'
import Vector2 from '../public/Vector2.png'
function App() {


  return (
    <div className="App">
      <div className="App_conteiner1">
        <Loyaut />
        <Content />
      </div>
      <div className="App_vector_wrapper">
        <img className="App_vector" src={Vector2} alt="" />
      </div>
      <div className='App_form'>
        <From />
      </div>
 
    </div>


  )
}

export default App
