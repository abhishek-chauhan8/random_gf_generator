import './App.css';
import Random from './Components/Random';
import RandomBySearch from './Components/RandomBySearch';


function App() {
  return (
    <div className=" bg-[#000814] w-screen h-screen flex flex-col items-center ">
      <h1 className='bg-white w-11/12 text-4xl font-black  rounded-lg mt-[40px] px-10 py-2 text-gray-800 text-center'>
        RANDOM GIFS
      </h1>  
      <div className='flex w-11/12  h-[75%]  py-3  gap-16  mt-16  '>
        <Random/>

        <RandomBySearch/>
      </div>


    </div>
  );
}

export default App;
