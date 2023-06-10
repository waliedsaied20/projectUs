import Reacharg from "../image/Rectangle 8.png";

function Why({bgGG}) {

    const contentWhy = [
        { id: '001', title: 'Part 1', content: 'Digitization of business cards allows for easy updates to your contact information and card layout' },
        { id: '002', title: 'Part 2', content: 'Standardized format and regulation of business cards within one organization' },
        { id: '003', title: 'Part 3', content: 'Quick and seamless sharing of your contact information without having to hold onto a physical business card' },
        { id: '004', title: 'Part 4', content: 'Displaying specific profile versions depending on what information you’re comfortable sharing with the given person' },
    ]

    const content0 = contentWhy.map((cont) => {
        return (
            <div key={cont.id}>
                <div className="mt-5">

                    <span className=" bg-yellow-400 p-1 rounded-full">{cont.id}</span>
                    <label className=" text-orange-500 font-bold ml-2" > {cont.title}</label>
                    <p className="w-80 mt-3 leading-7"> {cont.content}</p>
                </div>
            </div>
        )
    })

    return (
        <section>

            <div className="bg-yellow-100" key={content0.id}>

                <div className="flex justify-around items-center max-sm:flex-col">
                    <div className="part_1 order-2 md:order-1">
                        <div className="Imaging w-full">
                            <img className="w-full" src={Reacharg} alt={Reacharg} />
                        </div>
                    </div>
                    <div className="part_2 order-1 md:order-2 ">
                        <h2 className="capitalize text-center block font-bold text-4xl m-5 text-orange-500">Why use Digital cards ?  </h2>
                            <div className="flex flex-wrap justify-around mt-5 flex-row">

                            {content0}
                        </div>

                        <div className="flex justify-center my-4 mt-4">
                            <button className="py-2 mr-5  px-3 font-medium text-white rounded-2xl " style={{backgroundColor:bgGG}}>Help Me </button>
                            <button className="py-2  px-3 font-medium text-white rounded-2xl bg-yellow-600 capitalize">more information</button>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}


export default Why;