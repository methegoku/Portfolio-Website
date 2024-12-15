import HeroImg from '../assets/HeroImg.jpg'
import { FaInstagramSquare, FaLinkedin, FaFacebookF } from "react-icons/fa";


export default function Hero(){

    const config = {
        subtitle: 'Nice to Meet You!',
        social: {
            instagram: 'https://www.instagram.com/creatureofcomfort._._/',
            linkedIn: 'https://www.linkedin.com/in/gokul-elumalai-12a203267/',
            facebook: 'https://www.facebook.com/profile.php?id=100026509702364'
        }
    }

    return <section className ="flex flex-col md:flex-row px-6 py-32 bg-primary justify-center">
        
        <div className = "w-1/2 flex flex-col">
            <h1 className=" text-white text-4xl font-hero-font">Vanakkam!! <br/> I am <span className="text-black text-bold">Gokul</span>
                <p className='text-2xl mt-4'>{config.subtitle}</p>
            </h1>

            <div className="flex py-10">
                <a href={config.social.instagram} className='pr-5 hover:text-white'><FaInstagramSquare size={30}/></a>
                <a href={config.social.linkedIn}className='pr-5 hover:text-white'><FaLinkedin size={30}/></a>
                <a href={config.social.facebook} className=' hover:text-white'><FaFacebookF size={30}/></a>

            </div>
        </div>

        


        <img className="md:w-1/3" src = {HeroImg} />
        

    </section>

}