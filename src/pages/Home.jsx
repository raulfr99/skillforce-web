import Hero from '../components/Hero.jsx'
import Platforms from '../components/Platforms.jsx'
import Services from '../components/Services.jsx'
import Suite from '../components/Suite.jsx'
import About from '../components/About.jsx'
import Clients from '../components/Clients.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <Platforms />
      <Services />
      <Suite />
      <About />
      <Clients />
    </main>
  )
}
