import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from "@heroicons/react/outline";
const ModalProduct = ({ showModal, updateClick, cancelClick, title, price, description, thumbnail, category, stock }) => {
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={showModal} as={Fragment}>
            <Dialog
                as="div"
                static
                className="fixed z-10 inset-0"
                initialFocus={cancelButtonRef}
                open={open}
                onClose={setOpen}
            >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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
                        <div className="inline-block align-bottom bg-white rounded-lg shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="text-center sm:mt-0 sm:text-left w-full">
                                        <XIcon onClick={cancelClick}
                                            ref={cancelButtonRef} className={'absolute right-4 h-6 w-6 cursor-pointer hover:bg-gray-100 rounded-full '} />
                                        <Dialog.Title as="h3" className="text-lg text-center font-bold text-gray-900">
                                            Detail Product
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <div className={'flex justify-center'}>
                                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className={'rounded-full h-1/3 w-1/3'} />
                                                {/* <img src={thumbnail} className={'rounded-full h-1/3 w-1/3'} /> */}
                                            </div>
                                            <div className={'flex flex-col'}>
                                                <label className={'font-bold text-gray-800 pt-4'}>Name</label>
                                                <h1 className={'py-2 px-2 bg-gray-200 rounded-lg'}>{title}</h1>
                                                <label className={'font-bold text-gray-800 pt-4'}>Price</label>
                                                <h1 className={'py-2 px-2 bg-gray-200 rounded-lg'}>{price}</h1>
                                                <label className={'font-bold text-gray-800 pt-4'}>Description</label>
                                                <h1 className={'py-2 px-2 bg-gray-200 rounded-lg'}>{description}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-800 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={updateClick}
                                >
                                    Update
                                </button><button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={updateClick}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default ModalProduct