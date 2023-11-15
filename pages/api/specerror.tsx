import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    switch (req.method) {
        case "GET": {
            const { username, password } = req.query;
            if (username === "admin" && password === "admin") {
                res.status(200).json({ message: "Login successful", isusr: false });
            } else if (username === "admin" && password !== "admin") {
                res.status(401).json({ message: "Incorrect password", isusr: false });
            } else {
                res.status(404).json({ message: "User not found", isusr: true });
            }
        }
    }

    res.status(405).json({ message: "Method not allowed" });
}