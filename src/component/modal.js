import React, { Fragment, useRef, useState } from 'react'
import axios from 'axios'
import { Dialog, Transition } from '@headlessui/react'
import { useHistory } from 'react-router-dom';

export default function Modal({ show, onclick }) {

    const url = "https://dev-computerhp6hm.microgen.id/api/products/";
    const [data, setData] = useState({
        name: '',
        thumbnail: '',
        price: '',
        stock: '',
        description: '',
        storeId: '60e727bd355d4f003518324a'
    })
    const history = useHistory()

    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            name: data.name,
            thumbnail: data.thumbnail,
            price: parseInt(data.price),
            stock: parseInt(data.stock),
            description: data.description,
            storeId: data.storeId
        })
        // history.go()
    }

    function handle(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)

    }

    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null)
    return (
        <Transition.Root show={show} as={Fragment}>
            <Dialog
                as="div"
                static
                className="fixed z-10 inset-0 overflow-y-auto"
                initialFocus={cancelButtonRef}
                open={open}
                onClose={setOpen}
            >
                <form className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" onSubmit={(e) => { submit(e) }}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-left sm:mt-0 sm:text-left w-full">
                                        <Dialog.Title as="h3" className="text-lg text-center leading-6 font-bold text-gray-900">
                                            Add Product
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <div className={'mt-2'}>
                                                <label>Name
                                                    <input className={"bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-white-500"} id="name" type="text" value={data.name} onChange={(e) => handle(e)} placeholder="product name" autoComplete="off" />
                                                </label>
                                            </div>
                                            <div className={'mt-2'}>
                                                <label>Price
                                                    <input className={"bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-white-500"} id="price" type="number" value={data.price} onChange={(e) => handle(e)} placeholder="product price" />
                                                </label>
                                            </div>
                                            <div className={'mt-2'}>
                                                <label>Description
                                                    <textarea className={"bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-white-500 resize-none"} id="description" type="text" value={data.description} onChange={(e) => handle(e)} placeholder="product description"></textarea>
                                                </label>
                                            </div>
                                            <div className={'mt-2'}>
                                                <label>Stock
                                                    <input className={"bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-white-500"} id="stock" type="number" value={data.stock} onChange={(e) => handle(e)} placeholder="product stock" />
                                                </label>
                                            </div>
                                            <div className={'mt-2'}>
                                                <label>Picture
                                                    <input className={"appearance-none border-1 border-gray-200 rounded w-full text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-white-500"} id="picture" type="file" value={data.thumbnail} onChange={(e) => handle(e)} />
                                                </label>
                                            </div>
                                            <div className={'mt-2'}>
                                                <label>Category
                                                    <select className={"bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-white-500"} id="category" type="text" value={data.category} onChange={(e) => handle(e)}>
                                                        <option defaultChecked>select one</option>
                                                        <option>Laptop</option>
                                                        <option>Audio</option>
                                                        <option>halo</option>
                                                    </select>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-6 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="submit"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-800 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 sm:w-auto sm:text-sm ml-0 sm:ml-4"
                                >
                                    Add
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={onclick}
                                    ref={cancelButtonRef}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </form>
            </Dialog>
        </Transition.Root>
    )
}
