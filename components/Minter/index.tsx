import { useState } from "react";
import { mintNft } from "../../lib/Web3/functions";
import { useWeb3 } from "../Context/Web3";

export default function Minter() {
    const { account, minting, setMinting } = useWeb3();
    const [ swagger, setSwagger ] = useState('');
    const [ err, setErr ] = useState< string | null >(null);
    return(
        <form
            onSubmit={async (e) => {
                e.preventDefault();
                if(!account){
                    alert("Connect metamask");
                    return;
                };
                if(swagger !== ''){
                    setErr(null);
                    setMinting(true);
                    await mintNft(account, swagger);
                    setMinting(false);
                    setSwagger('');
                }else{
                    setErr('Please enter a name for your Swagger.');
                }
            }}
            className="max-w-md mx-auto my-10"
        >
            { err && <p className="text-red-500">{err}</p> }
            { minting && <p className="text-indigo-600 dark:text-indigo-300">Minting your nft...</p>}
            <label
                htmlFor="swagger_name"
                className="label-primary"
            >
                {`Enter you swagger's name`}
            </label>
            <input
                id="swagger_name"
                name="swagger_name"
                className="input-primary"
                value={swagger}
                onChange={(e) => setSwagger(e.target.value)}
            />
            <button
                type='submit'
                className="btn-primary"
                disabled={minting}
            >
                {minting ? 'Minting' : 'Mint'}
            </button>
        </form>
    );
};