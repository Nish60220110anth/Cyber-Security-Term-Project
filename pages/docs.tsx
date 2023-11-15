import React from "react";

import Login from "@components/Login";
import Layout from "@/app/components/Layout";

import { NextPageWithLayout } from "./_app";
import { Typography } from "@mui/material";

const Docs: NextPageWithLayout = () => {
    return (
        <div className="docs">
            <Typography
                variant="h2"
                sx={{
                    textAlign: "center",
                    marginBottom: "2rem",
                    color: "rebeccapurple",
                }}
            >
                In Progress
            </Typography>
            <h1>Docs</h1>
            <Login />
        </div>
    );
}

Docs.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
}

export default Docs;