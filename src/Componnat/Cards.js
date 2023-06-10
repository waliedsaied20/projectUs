// import { useState } from 'react'
import image01 from '../image/NFC Product Icon 2-1.png'
import image02 from '../image/NFC Product Icon 2.png'
import image03 from '../image/Organization Icon 1.png'


function Cards({bgGG}) {

    const itemProduct = [
        { id: 'pr1',  link:'page1',name: 'Digital Business Cards',image: image01 , describe: 'Platform for creating, editing and sharing digital business cards that are accessible via NFC, QR code, or regularly through email, sms etc.' }
        ,{ id: 'pr2', link:'page2' ,  name: 'NFC Products',image: image02 , describe: 'We offer a wide range of physical NFC products that can be used to instantly display and share your own digital business card quickly and easily' }
        ,{ id: 'pr3',link:'page3' ,  name: 'Organization Management',image: image03 , describe: 'Create and edit uniform business cards for employees of your organization. Can be synced with your business’ active directory for simplicity in on and off boarding' }
    ]

    // const [showProduct, setShowProduct] = useState([]);
    const renderItems = itemProduct.map((itemP) => {
        return (
            <section className='mx-10' key={itemP.id}>
                <div  className=''>
                    <div className='CardProduct capitalize bg-white drop-shadow-2xl mt-3 p-6  rounded-2xl' key={itemP.id}  >
                        <div className='w-60 h-48 m-auto  max-sm:w-40' >
                            <img className='rounded-full mx-auto p-5' style={{width:"70%", backgroundColor: '#FFEBC6'}} src={itemP.image} alt={itemP.name}/>

                        </div>
                        <h2 className='font-bold text-2xl m-3'> {itemP.name} </h2>
                        <p> {itemP.describe} </p>
                        <button className='p-5 m-3 rounded-full font-medium' style={{backgroundColor:bgGG}}>
                            <a href={`#${itemP.link}`}>Show More</a>
                        </button>    
                        
                    </div>
                </div>
            </section>
        )   
    })
    return (
        <div className='' >
            <div className='flex justify-between container mx-auto px-8 text-center  max-sm:block '>

                {renderItems}   
            </div>
        </div>
    )
}


export default Cards;