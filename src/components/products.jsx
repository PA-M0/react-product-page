import {Link, useParams} from 'react-router-dom';
import React from 'react';
import '../sampleData/sampleData'
import Products from '../sampleData/sampleData';
import {Change_product_pic} from './change_product_pic';
import CounterBox from './counter';
import Add_to_cart from "./add_to_cart";
import Modal from "./add_to_cart";


const Product = () => {
    //Get the url of the current page to determine what product information to display
    const { id } = useParams();
    const productURL = `/products/${id}`;
    //Extracting the product id from the url
    const index = productURL.slice(10);


    // Import all image files from the 'images' folder
    const imageContext = require.context('../sampleData/img', false, /\.(png|jpg|jpeg|gif|svg|webp)$/);
    // Get an array of image file paths
    const imagePaths = imageContext.keys().map(imageContext);
    let imgURL = undefined
    //Find the url of the desired photo from within the presentation of all photo urls
    imagePaths.forEach(item =>{
        imgURL = Products[index].imgUrl.slice(4)
        if(imgURL === item)
            imgURL = item
        }
    )


    //get information product of my data
    const name = Products[index].title
    const desc = Products[index].description
    const category = Products[index].category
    const brand = Products[index].brand
    const price = Products[index].price
    imgURL = imagePaths[index]
    const inStock = Products[index].inStock

    Change_product_pic()

    return(



        <section className=" bg-slate-800 m-auto mt-8 w-[80%] h-[39rem] rounded-lg py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4 mt-1">
                        <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            <img src={imgURL} id="image_preview" className="w-full h-full rounded object-cover"
                                   alt="Product Image"/>
                                <div className="flex flex-row mt-4">
                                    <img id="image_preview_1"  className="morePic w-full h-full rounded-lg object-cover mx-2 cursor-pointer"
                                          src={imgURL}   alt=""/>
                                    <img id="image_preview_2" className="morePic w-full h-full rounded-lg object-cover mx-2 cursor-pointer"
                                             src={imgURL} alt=""/>
                                    <img id="image_preview_3" className="morePic w-full h-full rounded-lg object-cover mx-2 cursor-pointer"
                                                 src={imgURL} alt=""/>
                                    <img id="image_preview_4" className="morePic w-full h-full rounded-lg object-cover mx-2 cursor-pointer"
                                                     src={imgURL} alt=""/>
                                </div>
                        </div>

                    </div>
                    <div className="md:flex-1 px-4 mt-[8rem] md:mt-1 mx-3 px-5 py-5 rounded bg-slate-50">
                        <Link to={`/products/$id`}>
                            <h2 className=" text-2xl position-inline font-bold mb-2 ">{name}</h2>
                        </Link>


                            <div className="mr-4 mb-4">
                                <span className="font-bold text-gray-700">Price: </span>
                                <span className="text-gray-600">{price} $</span>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-gray-700">Availability: </span>
                                <span className="text-gray-600">{inStock}</span>
                            </div>

                        <div className="mb-4">
                            <span className="font-bold text-gray-700">Select Color:</span>
                            <div className="flex items-center justify-center mt-2">
                                <button className="w-6 h-6 rounded-full bg-gray-800 mr-2"></button>
                                <button className="w-6 h-6 rounded-full bg-red-500 mr-2"></button>
                                <button className="w-6 h-6 rounded-full bg-blue-500 mr-2"></button>
                                <button className="w-6 h-6 rounded-full bg-yellow-500 mr-2"></button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700">Category: </span>
                            <span className="text-gray-600">{category}</span>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700">Brand: </span>
                            <span className="text-gray-600">{brand}</span>
                        </div>
                        <div>
                            <span className="font-bold text-gray-700">Product Description:</span>
                            <p className="text-gray-600 text-sm mt-2">{desc}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch ">
                        <div className="custom-number-input mb-2 w-32 mx-auto">
                            <div>
                                <CounterBox />
                            </div>

                        </div>
                     <div>

                     </div>
                        <div className="mb-2 ">
                            {/*//ADD TO CART BUTTON*/}
                            <Modal/>
                        </div>
                        <div className="mb-2">
                            <button
                                className="sm:w-full bg-slate-300 py-2  rounded-lg w-full block mx-auto font-bold hover:bg-slate-400 active:bg-slate-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">


                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>


    )
}
export default Product;

// <div>
//     <h1>Product List</h1>
//     {products.map((product) => (
//         <div key={product.id}>
//             <Link to={`/products/${product.id}`}>
//                 <h2>{product.name}</h2>
//             </Link>
//             <p>{product.description}</p>
//             <p>${product.price}</p>
//         </div>
//     ))}
// </div>




