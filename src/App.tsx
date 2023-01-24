import { WagmiConfig, createClient, configureChains, chain } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

import { MyPage } from "./MyPage";

const { chains, provider, webSocketProvider } = configureChains(
  [chain.mainnet],
  [publicProvider()]
);

// Set up client
const client = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  provider,
  webSocketProvider
});

function App() {
  return (
    <WagmiConfig client={client}>
      <MyPage />
    </WagmiConfig>
  );
}

export default App;
