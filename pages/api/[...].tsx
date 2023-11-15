import { NextApiRequest, NextApiResponse } from "next";
import ejs from "ejs";

export default function UnknownLink(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "GET": {
            const { search } = req.query;
            let link = req.url;
            if(link != undefined) {
                link = decodeURIComponent(link);
            }
            const data = {
                search: search,
                link: link
            };
            // console.log(link);
            ejs.renderFile("./static/error.ejs", data, (err, str) => {
                if (err) {
                    console.log(err);
                    res.status(500).send("Internal Server Error");
                } else {
                    res.status(200).send(str);
                }
            });
            break;
        }
        default: {
            res.status(405).send("Method Not Allowed");
            break;
        }
    }
}