import React from 'react';
import "./style.scss";

const index = ({ user: { avatar,last_name, first_name, id, email, status },  }) => {

    return (
        <>
            <div className="card">
                <img src={avatar} alt="img" className="card-img" />
                <div className="card__body">
                    <h4 className="card__body-title">{first_name} {last_name}</h4>
                    <p className="card__body-text">{email}</p>
                    <button className={`btn w-100 ${status ? "btn-success" : "btn-danger"}`}>{status ? "ONLINE" : "OFFLINE"}</button>
                </div>
            </div>

        </>
    );
};

export default index;