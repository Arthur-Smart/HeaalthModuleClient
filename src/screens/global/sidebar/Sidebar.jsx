import React, {useState} from 'react'
import './sidebar.css'
import {Box, Drawer, IconButton, Typography, useTheme} from '@mui/material'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'

function Sidebar() {
    const theme = useTheme();
    //const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const  [selected, setSelected] = useState("Dashboard")
  return (
    <div style={{ display: 'flex', height: '100%', width:'100%' }}>
        <div className='admin-toggle flex flex-col items-center pt-3'>
          <div className='sidebar-width flex items-center justify-between'>
            <p className='text-white text-lg' >ADMIN</p>
            <p className='text-white cursor-pointer'><i className="fa-solid fa-bars"></i></p>
          </div>
          <div className='admin-details mt-2 flex flex-col items-center justify-center'>
               <div className='profile-pic'>
                  <img src={require('../../../assets/profile.png')} alt='Dashboard'/>
               </div>
               <p className='text-2xl text-white font-bold'>James Mwai</p>
               <p className='position-tag'>Managing Director</p> 
          </div>

          {/*Navigatio links*/}
          <div>
           <p className='dashboard-header mt-4 cursor-pointer' ><i class="fa-solid fa-house"></i> Dashboard</p>
            <div className='mt-4'>
                <p className='section-title -ml-2'>Data</p>
                <p className='link-text mb-3 cursor-pointer' ><i class="fa-solid fa-user-group"></i> Organization Team</p>
                <p className='link-text mb-3 cursor-pointer' ><i class="fa-solid fa-layer-group"></i> Patients Data</p>
                <p className='link-text mb-3 cursor-pointer' ><i class="fa-solid fa-clipboard"></i>  Health Records(EHR)</p>
            </div>
            <div className='mt-6'>
                <p className='section-title -ml-2'>Pages</p>
                <p className='link-text mb-3 cursor-pointer' ><i class="fa-solid fa-business-time"></i> Patient Appointments</p>
                <p className='link-text mb-3 cursor-pointer' ><i class="fa-solid fa-globe"></i> Patient portals</p>
                <p className='link-text mb-3 cursor-pointer' ><i class="fa-solid fa-square-pen"></i> Laboratory reports</p>
                <p className='link-text mb-3 cursor-pointer' ><i class="fa-solid fa-receipt"></i> Billing</p>
                <p className='link-text mb-3 cursor-pointer' ><i class="fa-regular fa-calendar-days"></i> Planning and Events</p>
            </div>
            <div className='mt-6'>
                <p className='section-title -ml-2'>Report</p>
                <p className='link-text mb-3 cursor-pointer' ><i class="fa-solid fa-chart-simple"></i> Bar chart</p>
                <p className='link-text mb-3 cursor-pointer' ><i class="fa-solid fa-chart-pie"></i> Pie chart</p>
                <p className='link-text mb-3 cursor-pointer' ><i class="fa-solid fa-chart-line"></i> Line chart</p>
                <p className='link-text mb-3 cursor-pointer' ><i class="fa-solid fa-map"></i> Geography chart</p>
            </div>
          </div>            
        </div>
    </div>
  )
}

export default Sidebar;