import React from 'react'
import './NavBar.css'
import { FaSearch } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaFlag } from "react-icons/fa";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdTextsms } from "react-icons/md";



export default function NavBar() {
  return (
    <div className="navBar">

        <div className="navLeft">
            <div className="logoFacebok">
                <img src="./Images/logoFacebook.png" alt="" srcset=""  className='facebookLogo'/>
            </div>
            <div className="searchBar">
                <div className="logoSearch">
                    <FaSearch />
                </div>
                <div className="search">
                    <input type="text" name="" id="" placeholder='Search Facebook' className='inputName'/>
                </div>
            </div>
        </div>

        <div className="navMiddle">
            <a href="" selected className='home'><IoMdHome className='logos'/></a>
            <FaFlag className='logos'/>
            <MdOutlineVideoLibrary className='logos'/>
            <IoMdNotifications className='logos'/>
            <SiHomeassistantcommunitystore className='logos'/>
        </div>

        <div className="navRight">
            <img src="./Images/profile.jpeg" alt="" srcset="" className='profile' />
            <label htmlFor="">Kamal</label>
            <MdTextsms className='logos'/>
        </div>
    </div>
  )
}
