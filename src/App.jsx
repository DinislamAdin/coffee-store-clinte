import React, { useState } from 'react'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees) 

  return (
    <div className='m-20'>
      <h1 className="text-3xl font-bold text-purple-500 text-center mb-16">
       hot hot and cold cold coffee: {coffees.length}
      </h1>
     <div className='grid md:grid-cols-2 gap-8 '>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees= {coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
     </div>
    </div>
  )
}

export default App
