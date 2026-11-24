import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/site/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Solutions from "./pages/Solutions";
import SolutionDetail from "./pages/SolutionDetail";
import Industries from "./pages/Industries";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import EngineeringApproach from "./pages/EngineeringApproach";
import EngagementModels from "./pages/EngagementModels";
import Insights from "./pages/Insights";
import InsightArticle from "./pages/InsightArticle";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/** Router-agnostic page tree, shared by the browser app and the prerenderer. */
export const AppRoutes = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/solutions/:slug" element={<SolutionDetail />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
      <Route path="/engineering-approach" element={<EngineeringApproach />} />
      <Route path="/engagement-models" element={<EngagementModels />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/insights/:slug" element={<InsightArticle />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Layout>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
