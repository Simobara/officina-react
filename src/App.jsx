import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-[#111] text-white">
      <Header />

      <main className="mx-auto max-w-[1400px] px-6">
        <Body />
      </main>

      <Footer />
    </div>
  );
}

export default App;
