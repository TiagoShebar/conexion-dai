"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Formulario from '../../components/Formulario';

const Register = () => {
    const [data, setData] = useState(null);

    const fields = {
        email: {
            name: 'email',
            type: 'email',
            label: 'Correo electrónico',
            placeholder: 'Introduce tu correo electrónico',
            required: true,
            pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
        },
        firstName: {
            name: 'firstName',
            type: 'text',
            label: 'Nombre',
            placeholder: 'Introduce tu nombre',
            required: true
        },
        lastName: {
            name: 'lastName',
            type: 'text',
            label: 'Apellido',
            placeholder: 'Introduce tu apellido',
            required: true
        },
        password: {
            name: 'password',
            type: 'password',
            label: 'Contraseña',
            placeholder: 'Introduce tu contraseña',
            required: true,
            minLength: 6
        }
    };

    const handleResponse = (responseData) => {
        setData(responseData);
        console.log('Data recibida en la página:', responseData);
    };

    return (
        <>
        <div>
            <Formulario fields={fields} url={""} onResponse={handleResponse}/>
            {data && <div>Datos recibidos: {JSON.stringify(data)}</div>}
            <p>
                ¿Ya tienes una cuenta?{' '}
                <Link href="/log-in" style={{color: "blue"}}>
                    Inicia sesión
                </Link>
            </p>
        </div>
            
        </>
    );
};

export default Register;
