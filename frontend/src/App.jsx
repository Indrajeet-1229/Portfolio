
import './App.css'
import Portfolio from './portfolio'
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
