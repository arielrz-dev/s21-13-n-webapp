import { platform } from 'process';
import React from 'react';

const Input = ({ id, label, type, register, required, pattern, minLength, errorMessage, placeholder }) => {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                id={id}
                type={type}
                {...register(id, { required, pattern, minLength })}
                className="input input-bordered w-full"
                placeholder={placeholder}
            />
            {errorMessage && <span className="text-red-500 text-sm">{errorMessage}</span>}
        </div>
    );
};

export default Input;
