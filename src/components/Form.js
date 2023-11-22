import React from 'react';

class RegistroPagina extends React.Component {
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
            <div>
                <h2>Registro</h2>
                <form>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            name="nombre"
                            value={this.state.nombre}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />

                    <label>
                        Apellido:
                        <input
                            type="text"
                            name="apellido"
                            value={this.state.apellido}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />

                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />

                    <label>
                        Teléfono:
                        <input
                            type="text"
                            name="telefono"
                            value={this.state.telefono}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />

                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />

                    <label>
                        Confirmar Password:
                        <input
                            type="password"
                            name="confirmarPassword"
                            value={this.state.confirmarPassword}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />

                    <button type="submit">Registrar</button>
                </form>
            </div>
        );
    }
}

export default RegistroPagina;
