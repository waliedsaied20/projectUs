import MainIcon from '../image/icon_Footer_Finish.png';
import { ImFacebook, ImWhatsapp, ImTwitter, ImYoutube2, ImTelegram } from 'react-icons/im'

function Footer() {



    return (

        <footer className='h-auto'>

            <div className="flex justify-between bg-gray-300 max-sm:block">

                <div className='ml-4 flex justify-center self-center'>
                    <img src={MainIcon} className='w-full' alt="Icon Main page" />
                </div>
                <div className='text-center w-84 m-auto flex justify-center self-center'>
                    <span className='text-gray-600'>Copy Right © With BARQ_Stystem </span>
                </div>
                <div className='flex justify-around items-center  cursor-pointer'>
                    <i className='m-3 p-2 border rounded-full bg-white text-xl hover:bg-blue-600 hover:text-white'>
                        <a href='#fa'>
                            <ImFacebook />
                        </a>
                    </i>

                    <i className='m-3 p-2 border rounded-full bg-white text-xl hover:bg-green-400 hover:text-white'>
                        <a href='#wha'>
                            <ImWhatsapp />
                        </a>
                    </i>
                    <i className='m-3 p-2 border rounded-full bg-white text-xl hover:bg-blue-400 hover:text-white'>
                        <a href='#ITw'>
                            <ImTwitter />

                        </a>
                    </i>
                    <i className='m-3 p-2 border rounded-full bg-white text-xl hover:bg-red-500 hover:text-white'>
                        <a href='#you'>
                            <ImYoutube2 />

                        </a>
                    </i>
                    <i className='m-3 p-2 border rounded-full bg-white text-xl hover:bg-white hover:text-blue-400'>
                        <a href='#Telg'>
                            <ImTelegram />

                        </a>
                    </i>
                </div>

                <div>
                </div>
            </div>


        </footer>
    )
}

export default Footer;