import { ApiData } from "./ApiData";
import { CheckHasVotingPower } from "./CheckHasVotingPower";
import { useAccount, useNetwork } from "wagmi";
import { useAccountBalance } from "~~/hooks/scaffold-eth";

export const WalletInfo = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { balance } = useAccountBalance(address);
  const { chain } = useNetwork();
  if (address)
    return (
      <div>
        <div className="card lg:card-side bg-base-300 shadow-xl mb-4">
          <div className="card-body">
            <h2 className="card-title">Account Info</h2>
            <p className="m-0">Your account address is: {address}</p>
            <p className="m-0">Connected to the network {chain?.name}</p>
            <p className="m-0"> Balance: {balance}</p>
          </div>
        </div>
        <ApiData></ApiData>
        <CheckHasVotingPower address={address as `0x${string}`}></CheckHasVotingPower>
      </div>
    );
  if (isConnecting)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  if (isDisconnected)
    return (
      <div>
        <p>Wallet disconnected. Connect wallet to continue</p>
      </div>
    );
  return (
    <div>
      <p>Connect wallet to continue</p>
    </div>
  );
};
