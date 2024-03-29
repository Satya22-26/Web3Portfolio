import './Wallet.css';
import ABI from './ABI.json';
import Web3 from "web3";
import { useState } from 'react';
const Wallet =({saveState})=>{
 
      const val=0x38B7FDE567348C9fffa8e672FDCeC0A26356D5c4;
      const [connected,setConnected]=useState(true);
      const isAndroid = /android/i.test(navigator.userAgent);
      const init =async()=>{
            try{
              const web3 = new Web3(window.ethereum);
              await window.ethereum.request({method:'eth_requestAccounts'});
              const contract = new web3.eth.Contract(
                  ABI,
                  "0x38B7FDE567348C9fffa8e672FDCeC0A26356D5c4"
              );
               setConnected(false);
               saveState({web3:web3,contract:contract});
            }catch(error){
              alert("Please Install Metamask");
            }
              
      }

      return<>
      <div className="header">
      {isAndroid  && <button className="connectBTN">
         <a href="https://metamask.app.link/dapp/web3portfoliosatya.netlify.app">Click For Mobile</a>
        </button>  } 
       <button className="connectBTN" onClick={init} disabled={!connected}> {connected? "Connect Metamask":"Connected"}</button>
      </div>
      </>
}
export default Wallet;