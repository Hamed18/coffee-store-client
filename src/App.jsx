import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';
import Header from './Components/Header';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees,setCoffees] = useState(loadedCoffees);

  return (
      <div className='m-20'>
          <Header></Header>
          <p className='text-center'>cold coffee: {coffees.length} </p>
          <div className="grid md:grid-cols-2 gap-4">
          {
            coffees.map(coffee => 
            <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}>
            </CoffeeCard>)
          }
          </div>
      </div>
  )
}

export default App
