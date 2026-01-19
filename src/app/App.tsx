import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/app/components/Navbar';
import { Home } from '@/app/components/Home';
import { Gallery } from '@/app/components/Gallery';
import { Contact } from '@/app/components/Contact';
import { Chatbot } from "@/app/components/Chatbot";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Chatbot />
      </div>
    </BrowserRouter>
  );
}
