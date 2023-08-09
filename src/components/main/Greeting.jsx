import React from 'react';
import { IconChefHat } from '@tabler/icons-react';
import { IconConfetti } from '@tabler/icons-react';

const Greeting = (props) => {
  return (
    <div>
      <main>
        <div>
        
          <h1> {props.titulo1} <IconConfetti  color="black" size={60} /> </h1>
          <h2>{props.titulo2} <IconChefHat  color="black" size={60} /></h2>
         
        </div>
      </main>
    </div>
  );
};
export default Greeting;
