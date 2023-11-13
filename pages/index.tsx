import About from "@/app/components/About";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <h1>
                Home
            </h1>

            <About />

            <Link href="/docs">
                Docs
            </Link>
        </main>
    )
}
