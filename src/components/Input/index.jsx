import React from 'react';

const Input = ({ specifics, value, onChange }) => {
    return (
        <div className="input-container">
            {specifics.label && (
                <label htmlFor={specifics.name}>{specifics.label}</label>
            )}
            <input
                type={specifics.type || 'text'}
                id={specifics.name}
                name={specifics.name}
                value={value || ''}
                onChange={onChange}
                placeholder={specifics.placeholder || ''}
                required={specifics.required || false}
                minLength={specifics.minLength}
                min={specifics.min}
                max={specifics.max}
                step={specifics.step}
                pattern={specifics.pattern}
            />
        </div>
    );
};

export default Input;
