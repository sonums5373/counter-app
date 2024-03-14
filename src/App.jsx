import './App.css'
import Counter from './components/Counter'

function App() {

  return (
    <>
      <h1 className='text-center mt-5'>Counter App</h1>
      <div style={{ height: 'vh' }} className='d-flex justify-content-center align-items-center w-100'>
        <Counter />
      </div>
    </>
  )
}

export default App
