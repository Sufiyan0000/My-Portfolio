import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid className='max-w-4xl mx-auto md:auto-rows-[20rem] '>
            {
                gridItems.map((item) => (
                    <BentoGridItem 
                    id = {item.id}
                    key = {item.id}
                    title = {item.title}
                    description = {item.description}
                    className={item.className}
                    img={item.img}
                    spareImg={item.spareImg}
                    imgClassName={item.imgClassName}
                    titleClassName={item.titleClassName}
                    />
                ))
            }
        </BentoGrid>
    </section>
  )
}

export default Grid