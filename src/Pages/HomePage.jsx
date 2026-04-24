import React from 'react'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Semizlik from '../components/Semizlik'
import Products from '../components/Products'
import Sabab from '../components/Sabab'
import Yechim from '../components/Yechim'
import RecipeList from '../components/RecipeList'


function HomePage() {
  return (
    <main>
      <Hero/>
      <Problem/>
       <Sabab/>
      <Semizlik/>
      <Yechim/>
    <Products/>
    <RecipeList/>

   
    </main>
  )
}

export default HomePage
