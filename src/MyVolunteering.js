import React from 'react';
import VolunteeringCard from './components/volunteeringCard';
import { volunteeringData } from './data';


function MyVolunteering() {
  return (
    <section className='flex flex-wrap items-center justify-center gap-16 pl-20 pr-20 mx-32 my-24' id='projects'>
      {volunteeringData.map((card, index) => (
        <VolunteeringCard 
          key={index}
          imgSrc={card.imgSrc}
          altText={card.altText}
          hoverText={card.hoverText}
          description={card.description}
        />
      ))}
    </section>
  );
}

export default MyVolunteering;
