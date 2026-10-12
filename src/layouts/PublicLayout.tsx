import { Outlet } from "react-router-dom";
import { Navbar } from "./publicComponents/Navbar";
import { Footer } from "../components/home/Footer";
import { Chatbot } from "../components/chatbot/Chatbot";
import { ScrollToTop } from "../components/common/ScrollToTop";
import { usePageTitle } from "../hooks/PageTitle/usePageTitle";

export function PublicLayout() {
  usePageTitle();

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
}
