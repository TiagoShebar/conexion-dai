"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import emailjs from 'emailjs-com';
import Formulario from '../../components/Formulario';

const ForgotPassword = () => {
    const [data, setData] = useState(null);

    const fields = {
        email: {
            name: 'email',
            type: 'email',
            label: 'Correo electrónico',
            placeholder: 'Introduce tu correo electrónico',
            required: true,
            pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
        }
    };

    const handleResponse = (responseData) => {
        setData(responseData);
        console.log('Data recibida en la página:', responseData);
    };

    const [code, setCode] = useState(null);

    useEffect(() => {
        if (data === true) {
            const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
            setCode(verificationCode);
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', { email, code: verificationCode }, 'YOUR_USER_ID')
            .then(response => {
                setMessage('Código de verificación enviado. Por favor revisa tu bandeja de entrada.');
            })
            .catch(error => {
                setMessage('Error al enviar el código de verificación.');
            });
            //redirigir para ingresar el codigo
        }
        else{
            
        }
    }, [data]); // Dependencia: 'data'

    return (
        <>
            <Formulario fields={fields} url={""} onResponse={handleResponse}/>
            {data && <div>Datos recibidos: {JSON.stringify(data)}</div>}
            <p>
                ¿No tienes una cuenta?{' '}
                <Link href="/" style={{color: "blue"}}>
                    Registrate
                </Link>
            </p>
        </>
    );
};

export default ForgotPassword;
