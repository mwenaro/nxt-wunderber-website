"use client"

import { images } from '../assets/images'
import {Carousel, PageWrapper} from '../components/modules'

export default function Home() {

    return (
      <PageWrapper>
      <div className='p-2'>
        <Carousel images ={images.sort(()=>Math.random() - 0.5).slice(0,9) }/>
      </div>
      </PageWrapper>
    )
  }
