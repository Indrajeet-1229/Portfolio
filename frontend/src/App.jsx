
import './App.css'
import Portfolio from './Portfolio'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  

  return (
    <>
       <ToastContainer  autoClose={1000}/>
      <Portfolio/>
    </>
  )
}

export default App
