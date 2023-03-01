import React from 'react'
import {Box, IconButton, useTheme} from '@mui/material'
import { useContext } from 'react'
import InputBase from '@mui/material/InputBase'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search'
import './topbar.css'


function TopBar() {
  return (
    <div className='topbar flex items-center justify-center'>
      <div className='container flex  items-center w-full '>
          <div className='mt-3 ml-7 flex items-center'>
              <input className='search-input py-2 px-3 rounded-full outline-0' type='text' placeholder='Search...'/>
              <div className='search-btn-container ml-2 flex items-center justify-center cursor-pointer'>
                  <p className='text-lg'><i class="fa-solid fa-magnifying-glass"></i></p>
              </div>
          </div>       
      </div>
        
    </div>
  )
}

export default TopBar