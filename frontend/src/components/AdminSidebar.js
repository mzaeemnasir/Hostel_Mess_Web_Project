import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/dashbord",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Todays's Report",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },

  {
    title: "Complaints",
    path: "/showcomplaints",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
];
