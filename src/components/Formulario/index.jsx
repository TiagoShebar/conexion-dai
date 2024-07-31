"use client";
import React, { useState } from 'react';
import Input from '../Input';
import axios from 'axios';

const Formulario = ({ fields, url }) => {
    const [formState, setFormState] = useState(() => {
        const initialState = {};
        for (const key in fields) {
            if (fields.hasOwnProperty(key)) {
                initialState[key] = '';
            }
        }
        return initialState;
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        /*
        axios.post(url, formState)
        .then((response) => {
            console.log(response);
            if (onResponse) {
                onResponse(response.data); // Llama al callback con la data de la respuesta
            }
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
        */

        console.log('Datos del formulario:', formState);
    };

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(fields).map(key => (
                <Input
                    key={key}
                    specifics={fields[key]}
                    value={formState[key]}
                    onChange={handleChange}
                />
            ))}
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;
