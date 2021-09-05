import React from 'react'

const Card = ({ title, price, onClick, picture, description, category, stock }) => {
    return (
        <div className={"justify-center cursor-pointer mb-6"} onClick={onClick}>
            <div className={"container flex"}>
                <div className={"max-w-sm"}>
                    <div className={"bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg w-64"}>
                        <img className={"bg-contain bg-center rounded-t-lg w-full h-44 min-h-full"} src={picture} alt=".jpg" />
                        <div className={"py-6 px-8 rounded-lg bg-white h-52 min-h-full"}>
                            <div className={'flex flex-row justify-center'}>
                                <h1 className={"text-gray-700 font-bold text-1xl mb-3 hover:text-gray-900 hover:cursor-pointer"}>{title.length > 12 ? title.replace(title.substr(12, title.length), '...') : title}</h1>
                                <h1>({stock})</h1>
                            </div>
                            <p className={"text-gray-400 tracking-wide"}>{description.length > 20 ? description.replace(description.substr(20, description.length), '...') : description}</p>
                            <p className={"text-gray-700 tracking-wide"}>Rp{price}</p>
                            <button className={"absolute left-1/3 bottom-5 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"}>Buy Now</button>
                        </div>
                        <div className={"absolute top-2 right-2 py-2 px-4 bg-gray-500 rounded-lg text-white"}>
                            <span className={"text-md"}>{category}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card;