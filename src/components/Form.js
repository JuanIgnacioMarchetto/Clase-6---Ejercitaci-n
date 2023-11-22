import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        password: '',
        confirmarPassword: ''
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className='general'>
            <div className='container'>
                <div>
                    <form className='grid-container'>
                        <h2>Registro</h2>
                        <label className='grid-item'>
                            Nombre:
                            <input type="text"name="nombre" value={formData.nombre} onChange={handleChange}                            />
                        </label>

                        <label className='grid-item'>
                            Apellido:
                            <input type="text"name="apellido"value={formData.apellido} onChange={handleChange} />
                        </label>

                        <label className='grid-item'>
                            Direccion de Email:
                            <input type="email"name="email"value={formData.email}onChange={handleChange}   
                            />
                        </label>

                        <label className='grid-item'>
                            Teléfono:
                            <input type="text"name="telefono"value={formData.telefono}onChange={handleChange}
                            />
                        </label>

                        <label className='grid-item'>
                            Contraseña:
                            <input type="password" name="password" value={formData.password}
                                onChange={handleChange}
                            />
                        </label>

                        <label className='grid-item'>
                            Confirmar Contraseña:
                            <input type="password" name="confirmarPassword" value={formData.confirmarPassword}onChange={handleChange}
                            />
                        </label>
                        <button type="submit">Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;




