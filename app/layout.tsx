import './globals.css';
import '../public/hack/hack.css';

import React from 'react';

import { NavBar } from '../components/NavBar/NavBar';

export const metadata = {
    title: 'V3X Company',
    description: 'We do what we must because we can.',
};
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="w-full min-h-screen">
                <NavBar />

                {children}
            </body>
        </html>
    );
}
