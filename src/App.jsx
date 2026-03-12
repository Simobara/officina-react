import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Privacy from "./components/Pages/Privacy";
import Terms from "./components/Pages/Terms";

import ScrollToHash from "./components/ScrollToHash/ScrollToHash";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const [lang, setLang] = useState("en");

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />

      <Header lang={lang} setLang={setLang} />

      <div className="pt-[130px]">
        <Routes>
          <Route path="/" element={<Body lang={lang} />} />
          <Route path="/terms" element={<Terms lang={lang} />} />
          <Route path="/privacy" element={<Privacy lang={lang} />} />
        </Routes>

        <Footer lang={lang} />
      </div>
    </BrowserRouter>
  );
}

export default App;
