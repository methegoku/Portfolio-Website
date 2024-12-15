import AboutImg from '../assets/about.jpg'
export default function AboutMe(){


    const config = {
        line1: 'Hello Idhu dhaa enna paththi pru chinna portfolio website. I created this beautiful website using ReactJs and Tailwind CSS. Looks pretty huh!!',
        line2: 'I am proficient in skills like Frontend, Backenf and so on',
        line3: 'Also I am good in Backend like MySQL, MongoDB and implemented them with other languages, which leveraged me in becoming full stack developer'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5 justify-center' id ="about">
    
    <div className=' flex justify-center items-center mt-20 mb-20 md:w-1/2'>
        <img className='w-[400px]' src ={AboutImg}/>
    </div>

    <div className='md:w-1/2 flex justify-center mb-10 '>
        <div className='text-white flex flex-col justify-center'>
            <h1 className='text-5xl  border-b-4 border-[#fca7ff] mb-5 w-[230px] font-bold'>About Me</h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2} </p>
            <p className='pb-5'>{config.line3}</p>
        </div>
        

    </div>


    </section>
}