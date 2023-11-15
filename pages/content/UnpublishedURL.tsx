import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const UnpublishedURL = () => {
    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', height: "100%"
        }}>
            <Typography variant="h4">This page is to demonstarte unpublished URL</Typography>
            <Typography variant="h6">This page may look normal to you </Typography>

            <Typography variant="h6">But it contains hidden links that are not published</Typography>
            <Typography variant="h6">So, we can retrive the html file and analyze using some scripts
                which can help us to find unpublished url's</Typography>
            
            <Link href="/api/unpublished"></Link>
            <Link href="/api/secret"></Link>
        </Box>
    );
}

export default UnpublishedURL;