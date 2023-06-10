import woman from '../image/-min1.jpg'

function Contact() {
    return (
        <div>
            <div className="Contact mt-24 max-sm:p-5">
                <div className="flex justify-between max-sm:block">
                    <div className='w-1/2 max-sm:w-full'>
                        <img src={woman} className='w-100 rounded-xl' alt='Woman Contact' />
                    </div>
                    <div className='flex flex-col justify-start items-start m-auto max-sm:items-center'>
                        <h2 className='text-3xl font-bold my-5'>Contact Us </h2>
                        <lable className="my-5 text-2xl max-sm:text-xl">
                            <span className='text-orange-400 font-bold'> Phone : </span>
                            012312312832
                        </lable>
                        <lable className="my-5 text-2xl max-sm:text-xl">
                            <span className='text-orange-400 font-bold'>Email :</span>
                            walied.saied12@samples.com
                        </lable>
                        <lable className="my-5 text-2xl max-sm:text-xl">
                            <span className='text-orange-400 font-bold'>Open Hours :</span>
                            Sunday--Thursday 10:00 - 23:00
                        </lable>

                        <button className='my-5 bg-orange-400 text-white p-4 font-bold rounded text-xlj hover:bg-green-500 transition-all ease-in-out duration-300'> 
                         <a href='https://goo.gl/maps/VSLdWjofgR9vXSgS7' target='_blank' rel="noreferrer">

                            Find Us
                         </a>
                         </button>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffa500" fill-opacity="1" d="M0,64L30,64C60,64,120,64,180,96C240,128,300,192,360,229.3C420,267,480,277,540,277.3C600,277,660,267,720,266.7C780,267,840,277,900,250.7C960,224,1020,160,1080,160C1140,160,1200,224,1260,208C1320,192,1380,96,1410,48L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>


        </div>
    ) 
}


export default Contact;