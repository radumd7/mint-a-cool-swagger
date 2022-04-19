import { AppProps } from "next/app";
import Web3Provider from "../components/Context/Web3";
import Layout from "../components/UI/Layout";
import '../styles/globals.css';
export default function MyApp({Component, pageProps}: AppProps) {
    return(
        <Web3Provider>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </Web3Provider>
    );
};