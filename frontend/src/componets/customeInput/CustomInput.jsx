import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import './customeInput.css';

const CustomInput = ({ label, type='text', placeholder, value, onChange, name, icon,inputGroupClassName,inputClassName,groupClassName}) => {
    console.log(inputClassName,"input Classes")
    return (
        <Form.Group controlId={`formGroup-${name}`} className={`mb-3 ${groupClassName || ""}`}>
            {label && <Form.Label className="input-label">{label}</Form.Label>}
            <InputGroup className={inputGroupClassName}>
                {/* {icon && <InputGroup.Text>{icon}</InputGroup.Text>} this will add the icon on the left of input */}
                <Form.Control
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    name={name}
                    className={inputClassName}
                />
            </InputGroup>
        </Form.Group>
    );
};

export default React.memo(CustomInput);
