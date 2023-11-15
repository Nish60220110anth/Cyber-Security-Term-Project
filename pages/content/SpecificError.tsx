import { StyledButton, StyledTextField } from "@/app/components/Styles";
import { Box, Button, FormControl, FormHelperText, FormLabel, Paper, TextField, Typography } from "@mui/material";
import React from "react";

const SpecificError = () => {

    const [username, setUsername] = React.useState("admin");
    const [password, setPassword] = React.useState("admin");

    const [usrError, setUsrError] = React.useState(false);
    const [pwdError, setPwdError] = React.useState(false);

    const [usrErrorMsg, setUsrErrorMsg] = React.useState("");
    const [pwdErrorMsg, setPwdErrorMsg] = React.useState("");

    const [isSucess, setIsSucess] = React.useState(false);

    const handleInfo = () => {
        fetch(`http://localhost:3000/api/specerror?username=${username}&password=${password}`).then(async res => {
            if (res.ok) {
                setIsSucess(true);

                setUsrError(false);
                setPwdError(false);

                setUsrErrorMsg("");
                setPwdErrorMsg("");
            } else {
                let result = await res.json();

                if (result.isusr) {
                    setUsrError(true);
                    setUsrErrorMsg(result.message);
                }
                else {
                    setPwdError(true);
                    setPwdErrorMsg(result.message);
                }

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
                                setUsrError(true);
                                setUsrErrorMsg("Username cannot be empty");
                            } else {
                                setUsrError(false);
                                setUsrErrorMsg("");
                            }
                        }} />
                    <FormHelperText>
                        {
                            usrError ? <Typography color="red">{usrErrorMsg}</Typography> :
                                "Enter the username"
                        }

                    </FormHelperText>
                </FormControl>

                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <StyledTextField id="password" variant="outlined" label="Password"
                        value={password} onChange={(event) => {
                            setPassword(event.target.value);
                            if (event.target.value === "") {
                                setPwdError(true);
                                setPwdErrorMsg("Password cannot be empty");
                            } else {
                                setPwdError(false);
                                setPwdErrorMsg("");
                            }
                        }} />
                    <FormHelperText>{
                        pwdError ? <Typography color="red">{pwdErrorMsg}</Typography>
                            : "Enter the password"
                    }</FormHelperText>
                </FormControl>

                {
                    isSucess ? <Typography color="green">Login Sucessful</Typography> : ""
                }

                <FormControl>
                    <FormLabel>Submit</FormLabel>
                    <StyledButton variant="contained" color="inherit" onClick={(event) => {
                        handleInfo();
                    }}>Submit</StyledButton>
                </FormControl>

                <Button variant="contained" onClick={(event) => {
                    setUsername("admin");
                    setPassword("admin");
                    setUsrError(false);
                    setPwdError(false);
                    setUsrErrorMsg("");
                    setPwdErrorMsg("");
                    setIsSucess(false);

                }} color="info" sx={{
                    mt: 2
                }}>Clear </Button>
            </Box>
        </>
    );
}

export default SpecificError;