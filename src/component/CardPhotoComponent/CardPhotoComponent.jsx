import React from 'react';
import './CardPhotoComponent.css';
import photo from '../../assets/img/patrick.jpg';

function CardPhotoComponent(props) {
    return (
        <form action="">
            <div className="d-flex w-100">
                <div className="card-photo p-2 me-2 ms-2">
                    <input type="radio" name="vote" value="1" />
                    <img src={photo} alt="" />
                    <p className="text-center mt-3 mb-3">{props.name}</p>
                </div>
                <div className="card-photo p-2 me-2 ms-2">
                    <input type="radio" name="vote" value="2" />
                    <img src={photo} alt="" />
                    <p className="text-center mt-3 mb-3">{props.name}</p>
                </div>
            </div>
        </form>
    )
}

export default CardPhotoComponent;