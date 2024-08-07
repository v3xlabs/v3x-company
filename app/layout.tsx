import './globals.css';
import '../public/hack/hack.css';

import React from 'react';

import { Footer } from '../components/Footer/Footer';
import { NavBar } from '../components/NavBar/NavBar';

export const metadata = {
    title: 'V3X Company',
    description:
        'a community of open-source developers driven to make a difference.',
};
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="icon" href="/favicon.png" />
                <link rel="apple-touch-icon" href="/favicon.png" />
                <meta property="og:title" content={metadata.title} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://v3x.company" />
                <meta
                    property="og:image"
                    content="/v3x-company-opengraph.png"
                />
                <meta
                    property="og:description"
                    content={metadata.description}
                />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://v3x.company" />
                <meta property="twitter:title" content={metadata.title} />
                <meta
                    property="twitter:description"
                    content={metadata.description}
                />
                <meta
                    property="twitter:image"
                    content="/v3x-company-opengraph.png"
                />
                <meta name="theme-color" content="#ffffff" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </head>
            <body className="w-full min-h-screen">
                <NavBar />

                {children}

                <Footer />

                <script src="https://v3x.report/please.js"></script>
                <script
                    defer
                    data-domain="v3x.company"
                    src="https://plausible.io/js/script.js"
                ></script>
                <script
                    defer
                    data-domain="v3x.company"
                    src="https://internal.v3x.report/js/script.js"
                ></script>
            </body>
        </html>
    );
}
