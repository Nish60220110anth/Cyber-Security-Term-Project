import { NextApiRequest, NextApiResponse } from "next";
import fs, { realpathSync } from "fs";

export default function File(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "GET": {
            let filepath = "./public";
            let imageExtensions = [".png", ".jpg", ".jpeg", ".gif", ".svg", ".avif"];
            filepath = realpathSync(filepath);

            const files = fs.readdirSync(filepath);
            let filesToSend: string[] = [];

            files.forEach(file => {
                let extension = file.substring(file.lastIndexOf("."));
                if (imageExtensions.includes(extension)) {
                    filesToSend.push(file);
                }
            });

            res.status(200).json(filesToSend);
        }
    };

}