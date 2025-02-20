"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaUserLarge } from "react-icons/fa6";
import Input from './UI/Input';  
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function LoginModal() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Manejamos Formulario
    const onSubmit = async (data) => {
        // Ver la informacion enviada
        console.log(data);

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Login exitoso:', result);
                // Redirigir al usuario,...
            } else {
                console.error('Error al iniciar sesión');
            }
        } catch (error) {
            console.error('Error en la conexión:', error);
        }
    };

    return (
        <div>
            {/* Botón para abrir el modal */}
            <label htmlFor="my_modal_6" className="btn text-white bg-pink-600 hover:bg-pink-700">
                <FaUserLarge />
                Iniciar sesión
            </label>

            {/* Modal */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="modal-box w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                    {/* Botón para cerrar el modal */}
                    <div className="flex justify-end">
                        <label htmlFor="my_modal_6" className="hover:text-red-500"><IoMdCloseCircleOutline size={26} /></label>
                    </div>

                    <h3 className="text-lg font-bold text-center">Iniciar sesión</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="py-4">
                        <Input
                            id="email"
                            label="Correo electrónico"
                            type="email"
                            register={register}
                            required="Este campo es obligatorio"
                            pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i}
                            errorMessage={errors.email && errors.email.message}
                            placeholder={"correo@ejemplo.com"}
                            
                        />
                        <Input
                            id="password"
                            label="Contraseña"
                            type="password"
                            register={register}
                            required="Este campo es obligatorio"
                            minLength={{ value: 6, message: "La contraseña debe tener al menos 6 caracteres" }}
                            errorMessage={errors.password && errors.password.message}
                            placeholder={"•••••••"}
                        />
                        <button
                            type="submit"
                            className="btn w-full bg-pink-600 text-white hover:bg-pink-700"
                        >
                            Iniciar sesión
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
