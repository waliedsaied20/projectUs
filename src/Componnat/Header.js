import cardimge from '../image/Rectangle_1.png'
import waves from '../image/wave.svg'

function Header({ bgGG }) {
    // const bgMain = '#FFA500'

    const styleBg = { backgroundImage: `url(${waves})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }
    return (
        <div>
            <section className=' relative'  style={styleBg}>

                {/* <div className='cover2 w-1/3 absolute -z-50 top-0 left-0  max-sm:block max-sm:mt-44' style={{backgroundColor: bgGG, height:'500px'}}> </div> */}
                {/* <div className="cover w-1/2 absolute max-md:hidden rotate-[110deg] max-sm:hidden max-sm:rotate-[20deg] max-md:rotate[20deg] md:rotate-[25deg] -translate-y-44 translate-x-16 top-0 left-0 -z-10" style={{backgroundColor:bgGG  ,height :'600px'}}> */}
                {/* <div className='cover01 bg-cover bg-no-repeat bg-center ' style={{ backgroundImage: styleBg }}>
                </div> */}
                <div className='container mx-auto px-12  '>
                    <div className=" flex justify-around items-center z-4  max-sm:flex-col" >



                        <div className=" max-sm:order-2 w-2/3 flex flex-col items-start justify-end max-sm:w-full !max-sm:h-72" style={{ height: '500px' }}  >
                            <h2 className='font-bold text-6xl mt-5 text-white max-sm:text-2xl'>Digital Business</h2>
                            <p className='text-white w-1/2 mt-8 font-normal max-sm:w-full'>
                                Register Now and Share Your Business card and content information
                                with the tap of Phone
                            </p>

                            <div className='max-sm:flex'>
                                <button className='m-5 py-2 px-4 text-white rounded-full font-bold max-sm:font-normal max-sm:p-4 bg-orange-200 hover:text-orange-400 hover:bg-white'>Show More </button>
                                <button className="m-5 py-2 px-8 text-white rounded-full font-bold max-sm:font-normal max-sm:p-4 bg-orange-200 hover:text-orange-400 hover:bg-white"> Login  </button>
                            </div>
                        </div>
                        <div className="image max-sm:w-full  max-sm:order-1">
                            <div className='w-full m-auto '>
                                <img className='w-full' src={cardimge} alt="Your Card" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

// background-color: rgb(255, 165, 0);
// height: 600px;
// transform: rotate(110deg) translateX(-201px);

export default Header; 