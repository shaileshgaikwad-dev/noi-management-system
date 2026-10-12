import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/public/Home";
import { AdminLogin } from "./features/auth/AdminLogin";
import { Toaster } from "react-hot-toast";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { Agents } from "./pages/admin/Agents/Agents";
import { Dashboard } from "./pages/admin/Dashboard";
import { AddAgent } from "./pages/admin/Agents/AddAgent";
import { EditAgent } from "./pages/admin/Agents/EditAgent";
import { ClientPage } from "./pages/admin/clients/ClientPage";
import { CreateClient } from "./pages/admin/clients/CreateClient";
import { ClientDetails } from "./pages/admin/clients/ClientDetails";
import {IncomeReport} from "./pages/admin/report/IncomeReport";
import { MonthlyIncome } from "./pages/admin/report/MonthlyIncome";
import { AgentIncomeReport } from "./pages/admin/report/AgentIncomeReport";
import { NewEnquiry } from "./pages/admin/Enquiries/NewEnquiry";
import { UpdateEnquiry } from "./pages/admin/Enquiries/UpdateEnquiry";
import { PublicLayout } from "./layouts/PublicLayout";
import { AboutSection } from "./components/home/AboutSection";
import { ServicesSection } from "./components/home/ServicesSection";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { NotFound } from "./components/common/NotFound";
import { ContactNew } from "./components/home/ContactNew";
import { MonthlyIncomeChart } from "./pages/admin/Charts/MonthlyIncomeChart";




function App() {
  return (
    <>
      <Toaster position="top-center" />
      <BrowserRouter>
      <ScrollToTop/>
    
        <Routes>
           <Route element={<PublicLayout />}>
            <Route path="/" element={<Home/>}  />
            <Route path="/about" element={<AboutSection/>} />
            <Route path="/services" element={<ServicesSection/>} />
            <Route path="/contact-new" element={<ContactNew/>} />
          </Route>
          <Route path="/admin/login" element={<AdminLogin />} />
         
          //Protected Route
          <Route path="/admin" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="agents" element={<Agents />} />
            <Route path="agents/add" element={<AddAgent />} />
            <Route path="agents/edit/:id" element={<EditAgent />} />
            <Route path="clients" element={<ClientPage />} />
            <Route path="clients/add-client" element={<CreateClient />} />
            <Route path="clients/:id" element={<ClientDetails />} />
            <Route path="income-report" element={<IncomeReport />}></Route>
            <Route path="income-report/monthly" element={<MonthlyIncome/>}></Route>
            <Route path="income-report/agent" element={<AgentIncomeReport/>}></Route>
            <Route path="enquiries/new-enquiry" element={<NewEnquiry/>}></Route>
            <Route path="enquiries/:id" element={<UpdateEnquiry/>}></Route>
            <Route path="charts" element={<MonthlyIncomeChart/>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
