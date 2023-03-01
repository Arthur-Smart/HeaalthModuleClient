//import { ColorModeContext, useMode } from './theme';
//import { CssBaseline, ThemeProvider } from '@mui/material';
import './app.css';
import TopBar from './screens/global/topbar/TopBar';
import Home from './screens/home/Home'
import {createBrowserRouter,RouterProvider, Route, Outlet} from 'react-router-dom'
import { ProSidebarProvider } from 'react-pro-sidebar';
import Sidebar from './screens/global/sidebar/Sidebar';
import Team from './screens/team/Team';
import Patients from './screens/patients/Patients';
import Patient from './screens/patient/Patient';
import Appointments from './screens/appointments/Appointments';
import Portal from './screens/portal/Portal';
import LaboratoryReport from './screens/laboratoryreport/LaboratoryReport';
import Billing from './screens/billing/Billing';
import Planning from './screens/planning/Planning';
import BarChart from './screens/barchart/BarChart';
import PieChart from './screens/piechart/PieChart';
import LineChart from './screens/linechart/LineChart';
import PatientPortal from './screens/patientportal/PatientPortal';
import SingleBilling from './screens/singlebilling/SingleBilling';
import Pharmacy from './screens/parmacy/Pharmacy';

function App() {
  //const [theme, colorMode] = useMode()
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/team",
      element:<Team/>
    },
    {
      path:"/patients",
      element:<Patients/>
    },
    {
      path:"/patient/:id",
      element:<Patient/>
    },
    {
      path:"/appointments",
      element:<Appointments/>
    },
    {
      path:"/portal",
      element:<Portal/>
    },
    {
      path:"/portal/:id",
      element:<PatientPortal/>
    },
    {
      path:"/lab",
      element:<LaboratoryReport/>
    },
    {
      path:"/billing",
      element:<Billing/>
    },
    {
      path:"/billing/:id",
      element:<SingleBilling/>
    },
    {
      path:"/planning",
      element:<Planning/>
    },
    {
      path:"/barchart",
      element:<BarChart/>
    },
    {
      path:"/piechart",
      element:<PieChart/>
    },
    {
      path:"/linechart",
      element:<LineChart/>
    },
    {
      path:"/pharmacy",
      element:<Pharmacy/>
    }
  ])
  return (
    <>
            <div className="app">            
              <div className='side-bar'>
                <Sidebar/>
              </div>            
              <main className='content'>
                <TopBar/>
                <RouterProvider router={router}/>
              </main>
            </div>
         </>
  );
}

export default App;
