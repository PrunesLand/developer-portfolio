import React, {useState} from 'react'
import Dropdown from '../Dropdown/Dropdown'
import Hero from '../Hero/Hero'
import Info from '../Info/Info'
import NavbarHero from '../NavbarHero/NavbarHero'
import NavbarFix from '../NavbarFix/NavbaFix'

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
        <Hero toggle={toggle}/>
        <NavbarHero />
        <Info />    
        </>
    )
}

export default Home
