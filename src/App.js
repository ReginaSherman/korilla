import React, { useState } from 'react';
import './App.css';
import Receipt from './Receipt'


const initialState = [
  {
    id: 1,
    person: 'Karolin',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: ['Baby Bok Choy', 'Cucumber Kimchi'],
      drink: 'Korchata',
      cost: 22,
    },
    paid: false,
  },
  {
    id: 2,
    person: 'Jerrica',
    order: {
      main: 'Rice Bowl',
      protein: 'Ginger Soy Chix',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
      drink: 'Korchata',
      cost: 19,
    },
    paid: false,
  },
  {
    id: 3,
    person: 'Matt',
    order: {
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: 'none',
      sauce: "K'lla",
      toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20,
    },
    paid: false,
  },
];

function App() {
  const [order, setOrder] = useState(initialState)
  // if (!order.paid)  {
  //   return null
  // }
  return (
    <body>
      <header>
        <h1 className="name">Korilla</h1>
      </header>
      <main className='container'>
        {
          order.map((person) => (
            <Receipt key={ order.id }
            name= { person.person }
            main={ `Main: ${person.order.main}` }
            protein={ `Protein: ${person.order.protein}` }
            rice={ `Rice: ${person.order.rice}` }
            sauce={ `Sauce: ${person.order.sauce}` }
            drink={ `Drink: ${person.order.drink}` }
            cost={ `Cost: ${person.order.cost}` }
            />
        ))
        }
        
      </main>
    </body>
  );
}

export default App;
