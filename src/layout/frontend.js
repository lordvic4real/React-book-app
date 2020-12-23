import React from 'react'
import Header from "../component/header";
import Footer from "../component/footer";


export default function Frontend(props) {
    return (
        <>
             <Header />
           {props.children}
            <Footer />
        </>
    )
}
