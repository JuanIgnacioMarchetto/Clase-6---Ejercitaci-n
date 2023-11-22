import React from 'react';
import './Form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            email: '',
            telefono: '',
            password: '',
            confirmarPassword: ''
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='container'>
                
                <div>

                    <form className='grid-container'>
                        <h2>Registro</h2>
                        <label className='grid-item'>
                            Nombre:
                            <input
                                type="text"
                                name="nombre"
                                value={this.state.nombre}
                                onChange={this.handleChange}
                            />
                        </label>

                        <label className='grid-item'>
                            Apellido:
                            <input
                                type="text"
                                name="apellido"
                                value={this.state.apellido}
                                onChange={this.handleChange}
                            />
                        </label>

                        <label className='grid-item'>
                            Direccion de Email:
                            <input
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </label>

                        <label className='grid-item'>
                            Teléfono:
                            <input
                                type="text"
                                name="telefono"
                                value={this.state.telefono}
                                onChange={this.handleChange}
                            />
                        </label>

                        <label className='grid-item'>
                            Contraseña:
                            <input
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </label>

                        <label className='grid-item'>
                            Confirmar Contraseña:
                            <input
                                type="password"
                                name="confirmarPassword"
                                value={this.state.confirmarPassword}
                                onChange={this.handleChange}
                            />
                        </label>

                        <button type="submit">Registrar</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;



