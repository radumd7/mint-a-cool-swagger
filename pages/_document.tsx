import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return(
        <Html lang="en">
            <Head></Head>
            <body className="bg-white text-gray-900 dark:bg-neutral-900 dark:text-gray-300">
                <Main/>
                <NextScript/>
            </body>
        </Html>
    );
};