import product1 from '../image/Rectangle 9.png';
import product2 from '../image/Rectangle 9-1.png';
import product3 from '../image/Edit 2.png';


function Product({bgGG}) {

    const ProductItems = [
        { name: "Metal/Plastic_Card", image: product1, price: 223 },
        { name: "Keychain_Fob", image: product2, price: 123 },
        { name: "Pop Socket", image: product3, price: 400 },
    ]
    const renderProduct = ProductItems.map((product) => {
        return (
            <div key={product.name} className='max-sm:my-7'>
                <section className='flex justify-between items-center text-center '>
                    <div className=''>
                        <div className='coverProductImg'>
                            <img src={product.image} alt={product.name} />
                        </div>
                        <h3 className='font-bold my-4'> {product.name} </h3>
                        <span className='font-medium text-green-500'>Price: ${product.price}</span>

                    </div>
                </section>
            </div>
        )
    })

    return (
        <div key={ProductItems.name}>
            <div className='MainProduct text-center'>
                <h2 className='p-3 my-5 font-bold text-4xl' style={{color:bgGG}}>Product</h2>
                <h3 className='whitespace-break-spaces capitalize mb-9'>W e  Offer  The  following   N F C  devices</h3>
            </div>
            <div className='container mx-auto px-12'>
                <div className='flex justify-around max-sm:block max-sm:p-3 '>
                    {renderProduct}
                </div>

            </div>
        </div>
    )
}



export default Product; 
