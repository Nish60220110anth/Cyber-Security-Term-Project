import { StyledButton, StyledTextField } from "@/app/components/Styles";
import { Box, Button, FormControl, FormHelperText, FormLabel, Paper, TextField, Typography } from "@mui/material";
import React from "react";

const SpecificError = () => {

    const [username, setUsername] = React.useState("admin");
    const [password, setPassword] = React.useState("admin");

    const [error, setError] = React.useState(false);
    const [msg, setMsg] = React.useState("");

    const handleInfo = () => {
        fetch(`http://localhost:3000/api/specerror?username=${username}&password=${password}`).then(async res => {
            if (res.ok) {
                setError(false);
                setMsg("Login Successful");
            } else {
                setError(true);
                setMsg("Wrong username/ password");
            }
        }, reason => {
            console.log(reason);
        });
    }

    return (
        <>
            <Box sx={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', height: "100%"
            }}>
                <FormControl>
                    <FormLabel>Username</FormLabel>
                    <StyledTextField id="Username" variant="outlined" label="Username"
                        value={username} onChange={(event) => {
                            setUsername(event.target.value);
                            if (event.target.value === "") {
                                setError(true);
                                setMsg("Username cannot be empty");
                            }
                        }} />
                </FormControl>

                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <StyledTextField id="password" variant="outlined" label="Password"
                        value={password} onChange={(event) => {
                            setPassword(event.target.value);
                            if (event.target.value === "") {
                                setError(true);
                                setMsg("Password cannot be empty");
                            }
                        }} />
                </FormControl>

                <FormHelperText>
                    <Typography variant="h6" color="green">
                        {msg}
                    </Typography>
                </FormHelperText>

                <FormControl>
                    <FormLabel>Submit</FormLabel>
                    <StyledButton variant="contained" color="inherit" onClick={(event) => {
                        handleInfo();
                    }}>Submit</StyledButton>
                </FormControl>

                <Button variant="contained" onClick={(event) => {
                    setUsername("admin");
                    setPassword("admin");
                    setError(false);
                    setMsg("");
                }} color="info" sx={{
                    mt: 2
                }}>Clear </Button>
            </Box>
        </>
    );
}

export default SpecificError;