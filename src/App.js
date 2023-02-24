import { useState, createContext } from "react";
import Home from "./pages/Home";

export const WalletModal = createContext();

function App() {
  const [showConnectWallet, setShowConnectWallet] = useState(false);

  return (
    <WalletModal.Provider value={{ showConnectWallet, setShowConnectWallet }}>
      <Home />
    </WalletModal.Provider>
  );
}

export default App;
