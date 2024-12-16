import Button from "./Components/Button/index.jsx";
import HomeBody from "./Components/HomeBody/index.jsx";


function App() {

  return (
    <>
        <div className='h-96'>
            <div className='top-0'>
                <h1 className='text-center bg-cyan-300 mx-72 my-10 py-5 rounded-3xl'>P.A.O Builder</h1>
            </div>
            <div className='my-12 flex justify-center'>
                <Button text='Your Build'/>
                <Button text='Number Converter'/>
            </div>
            <HomeBody/>
        </div>
    </>
  )
}

export default App
