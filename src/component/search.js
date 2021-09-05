import React from 'react';
import { SearchIcon } from '@heroicons/react/outline'

const Search = ({ onClick }) => {
    return (
        <div className={'p-10 justify-between flex'}>
            <div className={'flex items-center rounded-full shadow-xl md:w-1/2 sm:w-full'}>
                <input class="ml-4 rounded-l-full w-full py-4 px-6 h-12 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />
                <button className={'relative bg-gray-800 text-white rounded-r-full p-3 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center'} onClick={onClick}><SearchIcon /></button>
            </div>
            <div className={'block sm:flex items-center text-white '}>
                <h1>Sort By : </h1>
                <select className={'bg-gray-800 text-center px-2 py-2 ml-2 rounded-lg cursor-pointer'}>
                    <option defaultChecked>name</option>
                    <option>price</option>
                    <option>date</option>
                </select>
            </div>
        </div>
    )
}
export default Search