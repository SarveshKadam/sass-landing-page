import React from 'react'
import Navbar from '../Header';
import Footer from '../Footer'

function index(props) {
    const {children} = props;
    return (
        <div className="flex flex-col h-screen justify-between">
            <Navbar />
            {children}
            <footer>
            <Footer />
            </footer>
        </div>
    )
}

export default index
