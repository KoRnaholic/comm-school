import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Input } from "./components/input/input";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className=" flex-grow items-center justify-center">
        <Input />
      </main>
      <Footer />
    </div>
  );
}

export default App;
