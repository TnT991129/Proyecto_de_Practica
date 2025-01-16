import { Hero } from './components/Hero'
import { Comp, OurMision, OurTeam } from './components/Body'
import { CTASection } from './components/Body'
import { LogoClouds } from './components/Body'
import { Foot } from './components/Footer'

function App() {
  return (
    <>
      <Hero/>
      <Comp/>
      <LogoClouds/>
      <OurMision/>      
      <OurTeam/>
      <CTASection/>
      <Foot/>       
    </>
  )
}

export default App