import React, { useRef } from 'react';
import "./style.scss";

const index = () => {

    const slideCard = useRef();

    const slide = () => {
        slideCard.current.classList.toggle('swiper');
    };


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-primary" onClick={() => {
                            slide()
                        }}>Evenet</button>
                    </div>
                </div>
                <div ref={slideCard} className="card w-75 mx-auto p-5 m-5 bg-light shadow">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta asperiores explicabo quaerat quasi sint quod? Id eius, quos ipsa quaerat fuga quia, mollitia pariatur deleniti consectetur ducimus impedit natus deserunt, repellat placeat autem.
                </div>
            </div>
        </>
    );
};

export default index;