import React, { useState, useRef } from 'react';
import "./style.scss";

const index = () => {

    const [number, setNum] = useState(0)

    const [show, setShow] = useState(false);

    const menu = useRef();

    const toggleMenu = () => {
        menu.current.classList.toggle('d-none')
    }

    // let number = 0;

    // const INCREMENT = () => {
    //     number += 1;
    //     console.log(number);
    // }

    // const DICREMENT = () => {
    //     number -= 1;
    //     console.log(number);
    // }

    return (
        <>
            <section id='intro'>
                <div className="container">

                    <div className="row my-5 p-5 shadow bg-light">
                        <button className={`btn w-25 mx-5 ${show ? "btn-warning" : "btn-primary"}`} onClick={() => {
                            toggleMenu()
                            setShow((e) => !e)
                            }} > 
                            {show ? "hide" : "Show"}
                            </button>
                        <button className="btn btn-secondary w-25 mx-5" onClick={() => setShow(false)} >hide</button>
                        <button className="btn btn-primary w-25 mx-5" onClick={() => setShow(true)} >show</button>
                    </div>

                    <div ref={menu} className={`row shadow-lg p-3 ${show ? "d-block" : "d-none"}`}>
                        <div className="col-md-12 p-5 bg-light shadow-lg">
                            <h1 className="text-center">{number}</h1>
                        </div>
                        <div className="col-md-6 p-4 bg-light mt-4">
                            <button className="btn btn-danger w-25 mx-2" onClick={() => setNum(number - 1)}>-</button>
                            <button className="btn btn-success w-25 mx-2" onClick={() => setNum(number + 1)}>+</button>
                        </div>
                        <div className="col-md-6 p-4 bg-lightg mt-4">

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};


export default index;