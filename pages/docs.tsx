import React from "react";

import Login from "@components/Login";
import Layout from "@/app/components/Layout";

import { NextPageWithLayout } from "./_app";

const Docs: NextPageWithLayout = () => {
    return (
        <div className="docs">
            <h1>Docs</h1>
            <Login />
        </div>
    );
}

Docs.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
}

export default Docs;