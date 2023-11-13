import Heading from "@/app/components/Heading";
import { Autocomplete, Box, Grid, List, ListItemButton, ListItemText, Stack, TextField } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";

const ListDirectory = () => {
    let filename = "test.png";

    const fetchFile = async () => {
        const res = await fetch(`http://localhost:3000/api/file/${filename}`);
        const data = await res.json();
        console.log(data);
    }


    let fileNames: string[] = ["Empty"];

    const fetchFileNames = async () => {
        const res = await fetch(`http://localhost:3000/api/file`);
        const data = await res.json();

        fileNames.pop();

        data.forEach((file: string) => {
            fileNames.push(file);
        });

        console.log("Called");
    }

    useEffect(() => {
        fetchFileNames();
    }
        , []);

    return <Box sx={{ display: 'contents', textAlign: 'center', justifyContent: 'center' }}>

        <Stack spacing={2} direction="column"
            sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', width: "100%" }}>
            {Heading("List Directory")}
            <Box sx={{ position: "static", alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
                <Image src="/india.avif" alt="Picture of the author" width={250} height={250} />
            </Box>

            <Stack spacing={2} direction="row" sx={{
                display: 'flex', alignItems: 'flex-start', textAlign: 'center', justifyContent: 'center',
                bgcolor: "white", borderRadius: 1, boxShadow: 1, pt: 1, pr: 0.5, pl: 0.5, pb: 0.5, m: 1
            }}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={fileNames}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                />
            </Stack>
        </Stack>
    </Box>
}

export default ListDirectory;