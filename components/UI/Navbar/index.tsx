import { useState } from "react";
import { connectWallet } from "../../../lib/Web3/functions";
import { useWeb3 } from "../../Context/Web3";
import MetamaskError from "./MetamaskError";
import { BsFillMoonFill, BsGithub, BsSunFill } from 'react-icons/bs';
import { useTheme } from "next-themes";
export default function Navbar() {
    const [ loadingUser, setLoadingUser ] = useState(false);
    const { appStatus, account, setAccount } = useWeb3();
    const { theme, setTheme } = useTheme();
    return(
        <div className="w-full h-24 flex items-center justify-between p-4 border-b border-gray-300 dark:border-gray-600">
            <div className="flex items-center text-3xl text-indigo-600 dark:text-indigo-300">
                <a
                    href="https://github.com/radumd7/Web3-Swaggers.git"
                    target="_blank"
                    rel="noreferrer"
                    className="mr-4"
                >
                    <BsGithub/>
                </a>
                {
                    theme === 'light' ? <BsFillMoonFill onClick={() => setTheme('dark')} className="cursor-pointer"/> : <BsSunFill onClick={() => setTheme('light')} className="cursor-pointer"/>
                }
            </div>
            {
                appStatus === "You must install MetaMask" ? <MetamaskError/> : (
                    <div>
                        {
                            account ? (
                                <p className="tracking-wider font-semibold select-none">{'['+account.substring(0, 6)+' ... '+account.substring(38)+']'}</p>
                            ) : (
                                <button
                                    onClick={ async () => {
                                        setLoadingUser(true);
                                        const r = await connectWallet();
                                        if(r){
                                            setAccount(r[0]);
                                        }
                                        setLoadingUser(false);
                                    }}
                                    disabled={loadingUser}
                                >Connect Metamask</button>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
};