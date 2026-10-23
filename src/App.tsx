import { ThemeProvider } from './ThemeContext'
import { LanguageProvider } from './LanguageContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Challenge } from './components/Challenge'
import { Solution } from './components/Solution'
import { HowItWorks } from './components/HowItWorks'
import { Features } from './components/Features'
import { Industries } from './components/Industries'
import { AcademicInfo } from './components/AcademicInfo'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-navy-950 dark:text-slate-100 selection:bg-blue-600 selection:text-white font-sans transition-colors duration-300">
          {/* Top Navbar with Theme & Language Switchers */}
          <Navbar />

          {/* Main Introduction Website Sections */}
          <main>
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. About Safety Guarantee Project */}
            <About />

            {/* 3. The Challenge / Our Problem */}
            <Challenge />

            {/* 4. Our Solution */}
            <Solution />

            {/* 5. How It Works (4 Simple Steps) */}
            <HowItWorks />

            {/* 6. Key Features */}
            <Features />

            {/* 7. Target Industries */}
            <Industries />

            {/* 8. College Project Academic Info */}
            <AcademicInfo />

            {/* 9. Contact Us */}
            <Contact />
          </main>

          {/* Clean Corporate Footer */}
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
