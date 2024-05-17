import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemSuffix,
} from "@material-tailwind/react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { IoIosMenu, IoIosSearch } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsHandbag } from "react-icons/bs";

const NavbarComp = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const navigate = useNavigate();

  const toggleSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <div className="flex flex-row justify-between items-center px-5 py-3 border-b-2 border-black-500">
      <div>
        <IoIosMenu
          className="h-7 w-7 cursor-pointer hover:bg-gray-200 rounded-lg"
          onClick={openDrawer}
        />
        <Drawer open={open} onClose={closeDrawer}>
          <div className="mb-2 flex items-center justify-between p-4">
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <List>
            <ListItem onClick={() => navigate("/")}>Home</ListItem>
            <ListItem onClick={() => navigate("/all-products")}>
              Towels
              <ListItemSuffix>
                <MdOutlineKeyboardArrowRight />
              </ListItemSuffix>
            </ListItem>
            <ListItem onClick={() => navigate("/all-products")}>
              Shop By Material
              <ListItemSuffix>
                <MdOutlineKeyboardArrowRight />
              </ListItemSuffix>
            </ListItem>
            <ListItem onClick={() => navigate("/all-products")}>Thirsty Towel</ListItem>
            <ListItem onClick={() => navigate("/all-products")}>Combo</ListItem>
            <ListItem>Gifting</ListItem>
            <ListItem onClick={() => navigate("/all-products")}>Summer Store</ListItem>
            <ListItem>Blogs</ListItem>
            <ListItem onClick={() => navigate("/doc")}>Doctor's Consultation</ListItem>
          </List>
        </Drawer>
      </div>

      <div className="ml-20">
        <img onClick={() => navigate("/")} className="h-7 w-7 cursor-pointer" src={Logo} alt="logo" />
      </div>
      <div className="flex justify-around items-center gap-4">
        {openSearch ? (
          <input
            type="text"
            placeholder="Search here..."
            onBlur={toggleSearch}
            autoFocus
            className="px-2 py-1 outline-none"
          />
        ) : (
          <IoIosSearch
            className="h-7 w-5 cursor-pointer"
            onClick={toggleSearch}
          />
        )}

        <BsHandbag onClick={() => navigate("/cart")} className="h-7 w-5 cursor-pointer" />

        <RiAccountCircleLine className="h-7 w-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default NavbarComp;
