import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { 
    Container, 
    Paper, 
    Typography, 
    TextField, 
    Button 
} from "@mui/material";
import { signup } from "../store/actions/authActions";

const SignUp = () => {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        const signupData = {
            firstName,
            lastName,
            address,
            email,
            phone,
            password
        };

        dispatch(signup(signupData));
    };

    return (
        <Container maxWidth="xs" component="main">
            <Paper elevation={3} >
                <Typography> Registrarse </Typography>
                <form onSubmit={handleSignUp}>
                    <TextField 
                     variant="outlined"
                     margin="normal"
                     required
                     fullWidth
                     id="firstName"
                     label="Nombre"
                     name="firstName"
                     value={firstName}
                     onChange={(e) => setFirstName(e.target.value)}
                    />
                    <TextField 
                     variant="outlined"
                     margin="normal"
                     required
                     fullWidth
                     id="lastName"
                     label="Apellido"
                     name="lastName"
                     value={lastName}
                     onChange={(e) => setLastName(e.target.value)}
                    />
                    <TextField 
                     variant="outlined"
                     margin="normal"
                     required
                     fullWidth
                     id="address"
                     label="Dirección"
                     name="address"
                     value={address}
                     onChange={(e) => setAddress(e.target.value)}
                    />
                    <TextField 
                     variant="outlined"
                     margin="normal"
                     required
                     fullWidth
                     id="firstName"
                     label="nombre"
                     name="firstName"
                     value={firstName}
                     onChange={(e) => setFirstName(e.target.value)}
                    />
                    <TextField 
                     variant="outlined"
                     margin="normal"
                     required
                     fullWidth
                     id="email"
                     label="Correo Electronico"
                     name="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField 
                     variant="outlined"
                     margin="normal"
                     required
                     fullWidth
                     id="phone"
                     label="Telefono"
                     name="phone"
                     value={phone}
                     onChange={(e) => setPhone(e.target.value)}
                    />
                    <TextField 
                     variant="outlined"
                     margin="normal"
                     required
                     fullWidth
                     type="password"
                     id="password"
                     label="Contraseña"
                     name="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     color="primary"
                    >
                        Registrarse
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default SignUp;
