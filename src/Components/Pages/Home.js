import React, {useState} from 'react'
import Burger from '../Burger/Burger'
import Dropdown from '../Dropdown/Dropdown'
import Hero from '../Hero/Hero'
import Info from '../Info/Info'
import Navbar from '../Navbar/Navbar'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    
    console.log(isOpen);
    return (
        <>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Burger  toggle={toggle}/>
        <Hero />
        <Navbar />
        <Info />    
        </>
    )
}

export default Home
