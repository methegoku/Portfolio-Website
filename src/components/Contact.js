
export default function Contact(){

    const config = {
     email: 'gokulelumalai46@gmail.com ',
     phone: '+91 91507 21145'   
    }


    return <section id = "contact" className='flex flex-col bg-primary px-5 py-32'>
    


    <div className='flex flex-col text-white items-center'>
        <h1 className='text-5xl  border-b-4 border-[#2f1a30] mb-5 w-[280px] font-bold'>Contact Me!</h1>
        <p className='pb-5'>If you wan to diccuss more about anything, just feel free to Contact me!</p>      

        <p className='py-2'><span className='font-bold '>Email: </span>{config.email}</p>
        <p className='py-2'><span className='font-bold '>Phone: </span>{config.phone}</p>


    </div>
        
    </section>
}