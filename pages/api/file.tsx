import { NextApiRequest, NextApiResponse } from "next";
import fs, { realpathSync } from "fs";

export default function File(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "GET": {
            const { filename } = req.query;
            let filepath = "./public";
            filepath = realpathSync(filepath);

            if (filename == undefined) {

                let imageExtensions = [".png", ".jpg", ".jpeg", ".gif", ".svg", ".avif"];

                const files = fs.readdirSync(filepath);
                let filesToSend: string[] = [];

                files.forEach(file => {
                    let extension = file.substring(file.lastIndexOf("."));
                    if (imageExtensions.includes(extension)) {
                        filesToSend.push(file);
                    }
                });

                res.status(200).json(filesToSend);
            } else {
                console.log(filename);
                filepath = filepath + "/" + filename;
                try {
                    const file = fs.readFileSync(filepath);
                    res.status(200).send(file);
                }
                catch (error) {
                    res.status(404).json("File not found");
                }
            }
        }
    }
};
