import React from 'react';
import './InputComponent.css';


window.addEventListener('focusin', (e) => {
    if (e.target.localName === 'input') {
        e.target.parentElement.style.backgroundColor = '#FFFFFF';
        e.target.parentElement.style.border = '2px solid #8d8d8d';
    }
})

window.addEventListener('focusout', (e) => {
    if (e.target.localName === 'input') {
        e.target.parentElement.style.backgroundColor = '#E2E2E2';
        e.target.parentElement.style.border = 'none';
    }
})

function InputComponent(props) {

    return (
        <div className="container-input px-3 py-2 mt-3">
            <input className="border-0 w-100 h-100" type={props.type} placeholder={props.placeholder} id={props.id} />
        </div>
    );
}

export default InputComponent;