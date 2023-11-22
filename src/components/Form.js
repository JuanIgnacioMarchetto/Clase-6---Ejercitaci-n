import React from 'react';
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
                <h2>Registro</h2>
                <form>
                    <label className='grid-container'>
                        Nombre:
                        <input className='grid-item' className='grid-item'
                            type="text"
                            name="nombre"
                            value={this.state.nombre}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />

                    <label className='grid-container'>
                    Apellido:
                    <input className='grid-item'
                        type="text"
                        name="apellido"
                        value={this.state.apellido}
                        onChange={this.handleChange}
                    />
                </label>
                <br />

                <label className='grid-container'>
                    Email:
                    <input className='grid-item'
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </label>
                <br />

                <label  className='grid-container'>
                    Teléfono:
                    <input className='grid-item'
                        type="text"
                        name="telefono"
                        value={this.state.telefono}
                        onChange={this.handleChange}
                    />
                </label>
                <br />

                <label>
                    Password:
                    <input className='grid-item'
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </label>
                <br />

                <label className='grid-container'>
                    Confirmar Password:
                    <input className='grid-item'
                        type="password"
                        name="confirmarPassword"
                        value={this.state.confirmarPassword}
                        onChange={this.handleChange}
                    />
                </label>
                <br />

                <button type="submit">Registrar</button>
            </form>
            </div >
        );
    }
}


export default Form;





