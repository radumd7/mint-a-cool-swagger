import { createContext, useContext, useEffect, useState } from "react";
import { getUser, readContract, verifyAccounts } from "../../../lib/Web3/functions";

const defaultState = {
    account: null,
    setAccount: () => null,
    appStatus: '',
    setAppStatus: () => null,
    minting: false,
    setMinting: () => null,
    swaggers: null,
    setSwaggers: () => null
};

interface State {
    account: string | null
    setAccount: React.Dispatch<React.SetStateAction<string>>
    appStatus: string
    setAppStatus: React.Dispatch<React.SetStateAction<string>>
    minting: boolean
    setMinting: React.Dispatch<React.SetStateAction<boolean>>
    swaggers: null | []
    setSwaggers: React.Dispatch<React.SetStateAction<null | []>>
};

const Web3Context = createContext<State>(defaultState);

export const useWeb3 = () => useContext(Web3Context);

export default function Web3Provider(props: any) {
    const [ account, setAccount ] = useState< string | null >(null);
    const [ appStatus, setAppStatus ] = useState('');
    const [ minting, setMinting ] = useState(false);
    const [ swaggers, setSwaggers ] = useState< null | [] >(null);

    useEffect(() => {
        async function fetchAccounts() {
            const acc = await verifyAccounts()
            if(acc){
                setAccount(acc[0]);
            };
        };
        async function fetchData() {
            const r = await readContract();
            return r;
        };
        if(!(window as any).ethereum){
            setAppStatus('You must install MetaMask');
        };
        if((window as any).ethereum){
            fetchAccounts();
            fetchData().then(r => {
                setSwaggers(r);
            });
        }
    },[])

    const value = { account, setAccount, appStatus, minting, setMinting, swaggers };;
    return <Web3Context.Provider value={value} {...props}/>
};