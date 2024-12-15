import AboutImg from '../assets/about.jpg'
export default function AboutMe(){


    const config = {
        line1: `Hey Bro!! Hope you are Doin' well `,
        line2: 'This is a small Webpage about Myself..',
        line3: 'I am a guy with expertise in Java programming, Data Structures and Algorithms (DSA), and front-end\n' +
            'development. Proficient in HTML, CSS, JavaScript, and ReactJS, with a keen eye for creating user-friendly and visually\n' +
            'appealing web applications. Passionate about solving complex problems and continuously learning to enhance technical\n' +
            'skills and contribute effectively to innovative projects '
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