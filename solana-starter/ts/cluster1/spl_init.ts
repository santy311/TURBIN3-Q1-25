import { Keypair, Connection, Commitment, PublicKey } from "@solana/web3.js";
import { createMint } from '@solana/spl-token';
import wallet from "../wba-wallet.json"

// Import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

(async () => {
    try {
        const mintAuthority = new PublicKey("7joo4aCH8EFqvZMfNJ74WinRghGSF1wWTCp6hts2xrjq");
        const freezeAuthority = mintAuthority;

        const mint = await createMint(connection, keypair, keypair.publicKey, null, 6);
        console.log(`Mint Address: ${mint.toBase58()}`)
    } catch(error) {
        console.log(`Oops, something went wrong: ${error}`)
    }
})()
