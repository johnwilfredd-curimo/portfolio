import { Cta } from './components/Cta'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Process } from './components/Process'
import { Reveal } from './components/Reveal'
import { Services } from './components/Services'
import { Stats } from './components/Stats'
import { Tools } from './components/Tools'
import { Works } from './components/Works'

function App() {
  return (
    <>
      <Nav />
      <div className="mx-auto max-w-6xl overflow-x-clip px-5 sm:px-8">
        <Hero />
        <Reveal>
          <Stats />
        </Reveal>
        <main>
          <Reveal>
            <Works />
          </Reveal>
          <Reveal>
            <Services />
          </Reveal>
          <Reveal>
            <Tools />
          </Reveal>
          <Reveal>
            <Process />
          </Reveal>
          <Reveal>
            <Experience />
          </Reveal>
          <Reveal>
            <Cta />
          </Reveal>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
