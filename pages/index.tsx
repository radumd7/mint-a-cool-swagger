import React from "react";
import { useWeb3 } from "../components/Context/Web3";
import Minter from "../components/Minter";
import Card from "../components/UI/Card";

export default function HomePage() {
    const { swaggers } = useWeb3();
    return(
        <div className="container mx-auto p-4">
            <h1 className="text-4xl xl:text-8xl font-extrabold tracking-wider text-indigo-600 dark:text-indigo-300 text-center my-10">SWAGGERS</h1>
            {swaggers && <h2 className="text-2xl xl:text-4xl text-center">Total Swaggers minted: {swaggers.length}</h2> }
            <p className="text-center my-10">These swaggers are hosted on the Ethereum blockchain. You can mint one if you pay the <strong className="text-indigo-600 dark:text-indigo-300">fake</strong> gas fees.</p>
            <Minter/>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {
                    swaggers?.map((swagger, i) => (
                        <React.Fragment key={i}>
                            <Card swagger={swagger}/>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    );
};