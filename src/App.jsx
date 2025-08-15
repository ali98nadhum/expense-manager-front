import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import WalletPage from "./pages/WalletPage/WalletPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/wallet" element={ <WalletPage/> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
