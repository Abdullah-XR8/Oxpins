import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />

      <Footer />
    </>
  );
}

export default App;
