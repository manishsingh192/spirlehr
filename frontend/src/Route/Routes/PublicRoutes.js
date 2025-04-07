import React from 'react';
import { Form, Route, Routes } from 'react-router-dom';
import PublicLayout from '../../Pages/Public/Layout/PublicLayout';
import Home from '../../Pages/Public/Home';
import About from '../../Pages/Public/About';
import Services from '../../Pages/Public/Services';
import Contact from '../../Pages/Public/Contact';
import Rpo from '../../Pages/Public/Rpo';
import Career from '../../Pages/Public/Career';
import Employer from '../../Pages/Public/Employer';
import Learnmore from '../../Pages/Public/Learnmore';
import Beginhere from '../../Pages/Public/Beginhere';
import Formpage from '../../Pages/Public/Formpage';
import Requirement from '../../Pages/Public/NewPages/Requirement';
import Permanent from '../../Pages/Public/NewPages/Permanent';
import Contract from '../../Pages/Public/NewPages/Contract';
import Payroll from '../../Pages/Public/NewPages/Payroll';
import Training from '../../Pages/Public/NewPages/Training';
import Business from '../../Pages/Public/NewPages/Business';
// import { Business } from '@mui/icons-material';



// import Error from '../../Pages/Error'; // Uncomment if needed

const PublicRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="rpo-ites" element={<Rpo />} />
          <Route path="career" element={<Career />} />
          <Route path="employer" element={<Employer />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/learnmore" element={<Learnmore />} />
          <Route path="/begin" element={<Beginhere />} />
          <Route path="formpage" element={<Formpage />} />
          <Route path="/requirement" element={<Requirement />} />
          <Route path="/permanent" element={<Permanent />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/training" element={<Training />} />
          <Route path="/business" element={<Business />} />

          
        </Route>
        {/* Error Page */}
        {/* <Route path='*' element={<Error />} /> */}
      </Routes>
    );
};

export default PublicRoutes;
