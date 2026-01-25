import React from 'react'
import { CustomFilter, Hero, SearchBar, CarCard } from './components'
import { fetchCars } from '@/utility'

const page = async () => {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || allCars

  return (
    <main>
      <Hero/>

      <div className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar/>
          <div className="home__filter-container /">
            <CustomFilter title="fuel"/>
            <CustomFilter title="year"/>
          </div>
        </div>
        
          <section>
          <div className='home__cars-wrapper'>
            {allCars?.map((car) => (
              <CarCard cars={car}/>
            ))}
          </div>
          </section>
      </div>
    </main>
  )
}

export default page
