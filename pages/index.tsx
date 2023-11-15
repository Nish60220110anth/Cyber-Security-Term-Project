import About from "@/app/components/About";
import { Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <Typography variant="h1" className="text-3xl font-bold text-center">
                Cybersecurity Attack Demonstration
            </Typography>
            <Paper
                elevation={3}
                className="p-4 my-4"
            >
                <Stack direction="column" spacing={2} sx={{
                    width: "100%",
                    alignContent: "center",
                    alignItems: "center",
                }}>
                    <Typography variant="h4" className="text-center">
                        About
                    </Typography>
                    <About />
                </Stack>
            </Paper>
        </main>
    )
}
