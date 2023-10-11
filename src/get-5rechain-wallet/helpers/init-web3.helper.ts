import Web3 from "web3";
import { firechainEVMNet } from "../../helpers/constants.helper";



export function initWeb3(): Web3{
    return new Web3(firechainEVMNet);
}