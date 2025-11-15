import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { testimonials } from '@/data'

const Clients = () => {
  return (
    <div className="py-13 text-black dark:text-blue-100" id="testimonials">
          <h1 className="heading text-5xl font-bold text-center capitalize mb-2 mx-auto">
            Kind Words from {" "}
            
            <span className="text-purple-400">    Satisfied Clients.</span>
          </h1>
          <div className="flex flex-col items-center mt-10">
            
                <InfiniteMovingCards
                items={testimonials}
                speed='slow'
                direction='right'
            />
            
          </div>
        </div>
  )
}

export default Clients