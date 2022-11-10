import React from "react";
import "../../styles/Card.css"



const Card = (props) => {
    console.log(props.data.id)
    return (
        <div className="card me-3 mt-3 anchoFijo p-0" >
            <img src="https://via.placeholder.com/250" className="d-inline-flex" alt="fake" />
                <div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    <p className="card-text">{props.data.desc}</p>
                    <a href="#" className="btn btn-primary">Go to {props.data.id}</a>
                </div>
        </div>
    );
};

export default Card;