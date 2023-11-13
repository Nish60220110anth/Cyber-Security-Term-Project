import type { ReactElement, ReactNode } from 'react'
import type { Metadata, NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

import "@styles/globals.css";
import Layout from '@/app/components/Layout';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Security Misconfiguration',
    description: 'Cyber security Term Project',
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

    return getLayout(<Component {...pageProps} />);
}