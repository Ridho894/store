import React, { useEffect, useState } from 'react';
import Navbar from '../component/navbar';
import Card from '../component/card';
import Modal from "../component/modal";
import ModalProduct from '../component/ModalProduct';
import axios from 'axios';
import Search from '../component/search';
import Footer from '../component/footer';
import Loading from '../component/loading';

const Home = ({ item }) => {
    const [data, setData] = useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);

    const url = "https://dev-computerhp6hm.microgen.id/api/products/";
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setTimeout(() => {
                    setData(res.data)
                }, 4000);
            }, [setData])
            .catch(err => console.log(err))
    }, [setData])
    console.log(data)
    const { loading, error } = data
    if (loading) {
        return (<Loading />)
    }
    if (error) {
        return (<h1>Error</h1>)
    }
    return (
        <div>
            <Navbar
                onClick={handleShow}
            />
            <Modal
                show={show}
                onclick={handleClose}
            />
            <div className={'text-center bg-gray-700 min-h-screen '}>
                <div>
                    <Search
                    />
                </div>
                <div className={'flex flex-wrap justify-evenly'}>
                    {data.map(value => {
                        return (
                            <div className={'m-2'}>
                                <Card
                                    onClick={(handleOpen)}
                                    picture={value.thumbnail}
                                    title={value.name}
                                    price={value.price}
                                    category={value.category}
                                    description={value.description}
                                    stock={value.stock}
                                />
                            </div>
                        )
                    })}
                </div>
                {<ModalProduct
                    showModal={open}
                    cancelClick={handleCloseModal}
                    description={item}
                />}
            </div>
            <Footer />
        </div>
    )
}

export default Home;