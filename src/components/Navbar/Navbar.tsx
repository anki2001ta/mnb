import { Button, Input, Drawer } from "antd";
import "./Navbar.scss";
import Mobsidebar from "../Mobsidebar/mobileside"
import { SearchOutlined, BellOutlined, BarsOutlined } from "@ant-design/icons";
import { BsChatLeftText } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import logo from "../../assets/mobile_logo.svg";
import { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState(false);
  const [showside,setShowside]=useState(false)

   const handleClick=()=>{
    setShowside(true)
   }


  const showDrawer = () => {
    setOpen(true);
  };
  const showDrawermsg = () => {
    setMsg(true);
  };
  const onClosemsg = () => {
    setMsg(false);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onSearch = (value: string) => console.log(value);
  const CustomLogo = () => {
    return <img src={logo} alt="Logo" className="mobile_logo" />;
  };
  return (
    <div className="nav">
      <Input
        className="search"
        placeholder="Search"
        suffix={<SearchOutlined />}
      />
      <Button className="menu_button" onClick={handleClick}>
        {showside && <Mobsidebar/>}
        <BarsOutlined className="menu_button" />
      </Button>
      <div>
        <CustomLogo />
      </div>
      <div className="nav_noti">
        <div className="help_icon">
          <TfiHeadphoneAlt style={{ fontSize: "30px", color: "#ffff" }} />
        </div>
        <Button onClick={showDrawermsg} className="nav_icons">
          <BsChatLeftText className="chat_icon" />
        </Button>
        <Drawer
          title="My Message"
          placement="right"
          onClose={onClosemsg}
          open={msg}
        >
          <div>
            <div className="noti_msg">
              <img
                src={
                  "https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                }
              />
              <div>
                <p>Olimtoy</p>
                <p>Hey! Do you wanna see new robtics?</p>
              </div>
            </div>
          </div>
        </Drawer>

        <Button onClick={showDrawer} className="bell_icons">
          <BellOutlined className="chat_icon" />
        </Button>
        <Drawer
          title="My Notification"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <div>
            <div className="noti_noti">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZNG2V1kv_IH_8aTfCrLyEYKVDuCeuKoHaQ&usqp=CAU"
                }
              />
              <div>
                <p>Olimtoy</p>
                <p>time</p>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
