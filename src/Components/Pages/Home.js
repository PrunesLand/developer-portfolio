import React, {useState} from 'react'
import Dropdown from '../Dropdown/Dropdown'
import Hero from '../Hero/Hero'
import Info from '../Info/Info'
import NavbarHero from '../NavbarHero/NavbarHero'
import NavbarFix from '../NavbarFix/NavbaFix'
import SkillSection from '../SkillSection/SkillSection'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Projects from '../Projects/Projects'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    
    console.log(isOpen);
    return (
        <>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <NavbarFix toggle={toggle}/>
        <Hero />
        <NavbarHero />
        <Info /> 
        <SkillSection />
        <Projects />
        <Contact />
        <Footer />
        </>
    )
}

export default Home
