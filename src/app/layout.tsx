import "./globals.css";
import classes from "./layout.module.css";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Separator from "@/components/Separator";

export const metadata: Metadata = {
    icons: {
        icon: "/images/icons/watermelon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={classes.body}>
                <Header />
                <Separator />
                <div className={classes.content}>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
