import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';

function App() {
  const coffees = useLoaderData();

  return (
      <div className='m-20'>
          <p className='text-center'>cold coffee: {coffees.length} </p>
          <div className="grid md:grid-cols-2 gap-4">
          {
            coffees.map(coffee => 
            <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
          }
          </div>
      </div>
  )
}

export default App
