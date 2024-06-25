import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Mission from "./Pages/Footer/Mission.jsx";
import ContactUs from "./Pages/Footer/ContactUs.jsx";
// import RequestAFeature from "./Pages/Footer/RequestAFeature.jsx";
import FAQ from "./Pages/Footer/FAQ.jsx";
import Startup from "./Pages/Footer/Startup.jsx";
import ItServices from "./Pages/Footer/ItServices.jsx";
import ItStaffing from "./Pages/Footer/ItStaffing.jsx";
import Campuses from "./Pages/Footer/Campuses.jsx";
import InterviewService from "./Pages/Footer/InterviewService.jsx";
import Features from "./Pages/Footer/Features.jsx";
import Profile_Page from "./Pages/Footer/Profile_Page.jsx";
import Pricing from "./Pages/Footer/Pricing.jsx";
import Testimonials from "./Pages/Footer/Testimonials.jsx";
import Integration from "./Pages/Footer/Integration.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Footer  */}

        <Route path="/company/mission" element={<Mission />} />
        <Route path="/company/contactus" element={<ContactUs />} />
        {/* <Route
          path="/company/requestafeature"
          element={<RequestAFeature />}
        /> not styled good  */}
        <Route path="/company/faq" element={<FAQ />} />
        <Route path="/solutions/startup" element={<Startup />} />
        <Route path="/solutions/it-services" element={<ItServices />} />
        <Route path="/solutions/it-staffing" element={<ItStaffing />} />
        <Route path="/solutions/campuses" element={<Campuses />} />
        <Route
          path="/product/interviewservice"
          element={<InterviewService />}
        />
        <Route path="/product/features" element={<Features />} />
        <Route path="/product/profile" element={<Profile_Page />} />
        <Route path="/product/pricing" element={<Pricing />} />
        <Route path="/product/testimonials" element={<Testimonials />} />
        <Route path="/product/integration" element={<Integration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
