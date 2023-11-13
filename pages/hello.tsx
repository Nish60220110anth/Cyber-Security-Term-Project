import React from "react";

import { NextPageWithLayout } from "./_app";

const Hello: NextPageWithLayout = () => {
    return (
        <div className="hello">
            <h1>Hello World!</h1>
        </div>
    );
}

Hello.getLayout = function getLayout(page: React.ReactElement) {
    return <div className="hello-layout">{page}</div>;
}

export default Hello;