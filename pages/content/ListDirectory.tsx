import Heading from "@/app/components/Heading";
import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Box, Button, Grid, IconButton, List, ListItemButton, ListItemText, Paper, Stack, TextField, Typography, styled } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import { StyledAccordion, StyledAccordionDetails, StyledAccordionSummary, StyledButton, StyledTextField } from "@/app/components/Styles";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

const ListDirectory = () => {
    let filename: string = "";
    let fileNames: string[] = ["Empty"];

    const [iserror, setIsError] = React.useState(false);
    const [errorMsg, setErrMsg] = React.useState("");
    const [errorTitle, setErrorTitle] = React.useState("Error");

    const fetchFile = () => {
        console.log(filename);
        fetch(`http://localhost:3000/api/file?filename=${filename}`).then(async res => {
            if (res.ok) {
                res.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = filename;
                    a.click();

                    window.URL.revokeObjectURL(url);
                });
            }
            else {
                setIsError(true);
                setErrMsg(await res.json());
                setErrorTitle("Error While Fetching File");
            }
        }, reason => {
            setIsError(true);
            setErrMsg(reason);
            setErrorTitle("Request Rejected");
        });
    }

    if (iserror) {
        filename = "";
    }

    const fetchFileNames = async () => {
        const res = await fetch(`http://localhost:3000/api/file`);
        const data = await res.json();

        fileNames.pop();

        data.forEach((file: string) => {
            fileNames.push(file);
        });
    }

    useEffect(() => {
        fetchFileNames();
    }
        , [filename]);

    return <Box sx={{ display: 'contents', textAlign: 'center', justifyContent: 'center' }}>

        <Stack spacing={2} direction="column"
            sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', width: "100%" }}>
            {Heading("List Directory")}

            <Stack spacing={2} direction="column" sx={{
                display: 'flex', alignItems: 'flex-start', textAlign: 'center', justifyContent: 'center',
            }}>
                <Stack direction="row" spacing={2} width="100%">
                    <Autocomplete
                        disablePortal
                        freeSolo
                        id="combo-box-demo"
                        options={fileNames}
                        sx={{ width: 300 }}
                        onInputChange={(event, value) => {
                            if (value != null)
                                filename = value;
                        }}
                        value={filename}
                        renderInput={(params) => <StyledTextField {...params} label="File" />}
                    />

                    <StyledButton variant="contained" onClick={fetchFile} color="inherit">Fetch File</StyledButton>
                </Stack>

                {
                    iserror ? <Stack direction="column" spacing={2} width="100%"
                        sx={{
                            justifyContent: 'center',
                        }}>
                        <StyledAccordion >
                            < StyledAccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                expandIcon={<ExpandMoreIcon />}
                                sx={{
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                }}
                            >
                                {errorTitle}
                            </StyledAccordionSummary>
                            <StyledAccordionDetails>
                                {errorMsg}
                            </StyledAccordionDetails>
                        </StyledAccordion>

                        <IconButton
                            aria-label="close"
                            color="warning"
                            size="small"
                            onClick={() => {
                                setIsError(false);
                                setErrMsg("");
                                setErrorTitle("");
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    </Stack> : <></>
                }
            </Stack>

            <Paper elevation={3} sx={{ width: "100%", height: "100%", overflow: 'auto', justifyContent: "left" }}>
                <blockquote className="text-left pl-5">
                    <Typography variant="h6" gutterBottom component="div">
                        What is it?
                    </Typography>
                    <Typography variant="body1" gutterBottom component="div">
                        This page allows you to list the files in the public directory. You can then download the files.
                    </Typography>
                    <Typography variant="body1" gutterBottom component="div">
                        You can also use the API to fetch the files.
                    </Typography>
                </blockquote>

                <blockquote className="text-left pl-5">
                    <Typography variant="h6" gutterBottom component="div">
                        How does it work?
                    </Typography>
                    <Typography variant="body1" gutterBottom component="div">
                        The API uses the fs module to read the files in the public directory. It then filters the files to only include images.
                    </Typography>
                    <Typography variant="body1" gutterBottom component="div">
                        The API then returns the list of files.
                    </Typography>
                </blockquote>

                <blockquote className="text-left pl-5">
                    <Typography variant="h6" gutterBottom component="div">
                        How to exploit it to do list directory attack?
                    </Typography>
                    <Typography variant="body1" gutterBottom component="div">
                        You can use the API to list the files in the public directory. We
                        can assume this website doesn't have any preventive measures against
                        directory listing attack. So the input we pass doesn't get validated and
                        send to backend. So we can pass any target file name that we can download
                        using the API.
                    </Typography>
                </blockquote>
            </Paper>

        </Stack>
    </Box>
}

export default ListDirectory;