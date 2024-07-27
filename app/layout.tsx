import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs";
import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css';
import React from "react";
import {Toaster} from "@/components/ui/toaster"


const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "MeetingApp",
    description: "Video calling app",
    icons: {
        icon: '/icons/meeting-app-logo.svg'
    }
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <ClerkProvider
            appearance={{
                layout: {
                    logoImageUrl: '/icons/meetingapp-logo-signin.svg',
                    socialButtonsVariant: 'iconButton',
                    // logoSize: {
                    //     width: '400px',
                    //     height: 'auto'
                    // }
                },
                variables: {
                    colorText: '#fff',
                    colorPrimary: '#b332f3',
                    colorBackground: '#1c1f2e',
                    colorInputBackground: '#252a41',
                    colorInputText: '#fff'
                }
            }}
        >
            <body className={`${inter.className} bg-dark-2`}>
            {children}
            <Toaster/>
            </body>
        </ClerkProvider>
        </html>
    );
}
