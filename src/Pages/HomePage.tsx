import { useState, useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import Contact from "../model/Contact";

import ContactList from "../components/ContactList";
import NewContact from "../components/NewContact";
import DialogBox from "../components/DialogBox";
import { BsPlusCircleFill } from "react-icons/bs";

const HomePage: React.FC = (props) => {
  let [open, setOpen] = useState(false);
  const getContactList = useAppSelector((state) => state.contact.contactList);

  const [searchTerm, setSearchTerm] = useState("");
  const [contactListData, setContactListData] = useState<Contact[]>();

  useEffect(() => {
    setContactListData(getContactList);
    const filteredData = getContactList.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setContactListData(filteredData);
  }, [getContactList, searchTerm]);
  const DialogHandle = () => {
    setOpen((current) => !current);
  };
  return (
    <div className="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gray-800 ">
      <div className="flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-25">
      <button className="flex items-center justify-center w-8 h-8 ml-6 mr-auto overflow-hidden rounded-full cursor-pointer">
         <a href="https://github.com/RaselJam" target="_blank" rel="noreferrer"> <img
            src="https://avatars.githubusercontent.com/u/73784313?s=400&u=053e3e3f4ea4f8900e9c9ba57c3f279ae095a2a6&v=4"
            alt=""
          ></img></a>
        </button>
        <a href="https://www.saal-digital.es/" target="_blank" rel="noreferrer">
          <img src ="https://i.pinimg.com/280x280_RS/92/5f/a0/925fa0f5ed17086d847cc833ca82a562.jpg" alt="saal Logo" className="w-11 h-11  hover:shadow   " />
        </a>
        <input
          className="flex items-center h-10 px-4 ml-10 text-sm w-1/3  bg-gray-200 rounded-full focus:outline-none focus:ring"
          type="search"
          placeholder="Search contact …"
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
        <button
          type="submit"
          className="flex items-center text-green-600 p-2 rounded text-sm w-auto hover:text-green-200"
          onClick={DialogHandle}
        >
          <BsPlusCircleFill />
          <span>&nbsp;Add</span>
        </button>
        
      </div>
      <ContactList contacts={contactListData} />
      {open && (
        <DialogBox open={open} OnDialogHandle={DialogHandle}>
          <NewContact id={""} />
        </DialogBox>
      )}
    </div>
  );
};

export default HomePage;
