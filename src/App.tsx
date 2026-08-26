import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Profile } from "./components/Profile"
import { Experience } from "./components/Experience"
import { Skills } from "./components/Skills"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header />
      <main>
        <Hero />
        <Profile />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}

export default App
