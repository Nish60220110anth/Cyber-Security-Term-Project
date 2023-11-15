import { StyledButton, StyledTextField } from "@/app/components/Styles";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import docco from 'react-syntax-highlighter/dist/cjs/styles/hljs/docco';

SyntaxHighlighter.registerLanguage('javascript', js);


const XSS = () => {
    const link = "http://localhost:3000/api/someerror<script>";
    const router = useRouter();

    const [linkValue, setLinkValue] = React.useState('');

    const stealcookiecontent = `function getAllCookies() {
        var cookies = {};
        var cookieString = document.cookie;
    
        if (cookieString === "") {
            return cookies;
        }
    
        var cookieArray = cookieString.split(';');
    
        for (var i = 0; i < cookieArray.length; i++) {
            var cookie = cookieArray[i].trim();
            var delimiterIndex = cookie.indexOf('=');
    
            var cookieName = cookie.substring(0, delimiterIndex);
            var cookieValue = cookie.substring(delimiterIndex + 1);
    
            cookies[cookieName] = decodeURIComponent(cookieValue);
        }
    
        return cookies;
    }
    
    var allCookies = getAllCookies();
    console.log(allCookies);`;

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(stealcookiecontent);
        }
        catch (err) {
            console.error('Failed to copy: ', err);
        }
    }


    return (
        <Box sx={{
            alignContent: "center", justifyContent: "center"
        }}>
            <Stack spacing={2} direction="column" sx={{
                alignContent: "center", justifyContent: "center"
            }}>
                <Typography variant="h4" component="h1" sx={{
                    textAlign: "center"
                }}>
                    Error XSS
                </Typography>
                <Stack spacing={2} direction="row" sx={{
                    alignContent: "center", justifyContent: "center"
                }}>
                    <Stack spacing={2} direction={"column"}>
                        <StyledTextField
                            label="Link"
                            variant="outlined"
                            size="small"
                            fullWidth
                            value={linkValue}
                            onChange={(event) => {
                                setLinkValue(event.target.value);
                            }}
                            InputProps={{
                                readOnly: false,
                                startAdornment: <>
                                    <Typography variant="body1" component="h1" gutterBottom sx={{
                                        color: 'white',
                                        padding: '0.5rem',
                                        marginRight: '0.5rem',
                                        marginTop: '0.5rem',
                                    }}>
                                        {link}
                                    </Typography>
                                </>,
                                endAdornment: <>
                                    <Typography variant="body1" component="h1" gutterBottom sx={{
                                        color: 'white',
                                        padding: '0.5rem',
                                        marginLeft: '0.5rem',
                                        marginTop: '0.5rem',
                                    }}>
                                        &lt;&#47;script&gt;
                                    </Typography>
                                </>,
                            }}
                            placeholder="Enter link"
                        />
                        <StyledButton
                            variant="contained"
                            // size="medium"
                            onClick={() => {
                                router.push(`${link}${linkValue}</script>`);
                            }}
                        >
                            Perform Attack
                        </StyledButton>
                    </Stack>
                </Stack>
            </Stack>

            <Paper
                sx={{
                    width: '100%',
                    height: '100%',
                    marginTop: '2rem',
                    padding: '1rem',
                    backgroundColor: '#1F2937',
                    color: 'white',
                }}
            >
                <Typography
                    variant="h5"
                    component="h1"
                    gutterBottom
                    sx={{
                        color: 'white',
                        padding: '0.5rem',
                        marginLeft: '0.5rem',
                        marginTop: '0.5rem',
                    }}
                >
                    The link we have written is how the link should look like after the attack.
                </Typography>
                <Typography
                    variant="body1"
                    component="h1"
                    gutterBottom
                    sx={{
                        color: 'white',
                        padding: '0.5rem',
                        marginLeft: '0.5rem',
                        marginTop: '0.5rem',
                    }}
                >
                    {link}{linkValue}&lt;&#47;script&gt;
                </Typography>
                <Typography
                    variant="body1"
                    component="h1"
                    gutterBottom
                    sx={{
                        color: 'white',
                        padding: '0.5rem',
                        marginLeft: '0.5rem',
                        marginTop: '0.5rem',
                    }}
                >
                    We can exploit this attack, when the error page shown doesn't sanitize the input.
                </Typography>
                <Typography
                    variant="body1"
                    component="h1"
                    gutterBottom
                    sx={{
                        color: 'white',
                        padding: '0.5rem',
                        marginLeft: '0.5rem',
                        marginTop: '0.5rem',
                    }}
                >
                    Here, the js code we added to attack will be sent to the backend. As this url is
                    not in backend, it will add this link to the error page and send back to the user.
                    The user will then execute the js code.
                </Typography>
            </Paper>

            <Paper
                sx={{
                    width: '100%',
                    height: '100%',
                    marginTop: '2rem',
                    padding: '1rem',
                    backgroundColor: '#1E293B',
                    color: 'white',
                    borderRadius: '0.5rem',
                }}
            >
                <Typography>
                    Steal Cookie javascript code
                </Typography>
                <Stack
                    direction={"column"}
                    spacing={2}
                    sx={{
                        alignContent: "center",
                        justifyContent: "center"
                    }}
                >
                    <SyntaxHighlighter language="javascript" style={docco}>
                        {`${stealcookiecontent}`}
                    </SyntaxHighlighter>
                    <StyledButton
                        onClick={(event) => {
                            copyToClipboard();
                        }}
                    >
                        Copy
                    </StyledButton>
                </Stack>
            </Paper>
        </Box>

    );
}

export default XSS;