import ResumeImg from '../assets/resume.png'
export default function Resume(){

    const config = {
        link: 'https://drive.google.com/file/d/14QzTibfVaN_st6vSSxHVEaS1ugNbBwlV/view?usp=drive_link'
    }

    return <section id = "resume" className='flex flex-col md:flex-row bg-secondary px-5 justify-center'>
    
    <div className=' flex justify-center md:justify-end items-center mt-20 mb-20 md:w-1/2'>
        <img className='w-[250px]' src ={ResumeImg}/>
    </div>

    <div className='md:w-1/2 flex justify-center mb-10 '>
        <div className='text-white flex flex-col justify-center'>
            <h1 className='text-5xl  border-b-4 border-[#fca7ff] mb-5 w-[180px] font-bold'>Resume</h1>
            <p className='pb-5'>You can View and Download my Resume <a className='btn' href = {config.link}>View</a> </p>
            
        </div>
        

    </div>


    </section>
}