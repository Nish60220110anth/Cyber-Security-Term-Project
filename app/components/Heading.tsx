import { Box, Typography } from "@mui/material";
import React from "react";

const Heading = (text: string) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
            <Typography variant="h3" component="h2" textAlign={"center"}>
                {text}
            </Typography>
        </Box>
    )
};

export default Heading;