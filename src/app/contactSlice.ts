import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import Contact from "../model/Contact";
import { v4 as uuidv4 } from "uuid";

type initialStateType = {
  contactList: Contact[];
};

const contactList: Contact[] = [
  {
    id: uuidv4(),
    name: "Raúl Jam",
    email: "rasel.jam.h@gmail.com",
    telephone: "2507288414914",
    type: "employee",
    company : "N/A"
  },
  {
    id: uuidv4(),
    name: "Stacy",
    email: "rasel2.jam.h@gmail.com",
    telephone: "288414911494",
    type: "employee",
    company : "N/A"
  },
  {
    id: uuidv4(),
    name: "Adolfo",
    email: "testing@gmail.com",
    telephone: "28841491841491",
    type: "employee",
    company : "N/A"
  },
  {
    id: uuidv4(),
    name: "frank",
    email: "rul@gmail.com",
    telephone: "25028841491491",
    type: "employee",
    company : "N/A"
  },
  {
    id: uuidv4(),
    name: "Roger",
    email: "Doge@gmail.com",
    telephone: "25078828841491",
    type: "employee",
    company : "N/A"
  },
  {
    id: uuidv4(),
    name: "Stacy ",
    email: "John-Doe@gmail.com",
    telephone: "288414911494",
    type: "employee",
    company : "N/A"
  },
  {
    id: uuidv4(),
    name: "Joe Tribiani",
    email: "Foo@gmail.com",
    telephone: "2528841491491",
    type: "employee",
    company : "N/A"
  },
  {
    id: uuidv4(),
    name: "Hommer",
    email: "Boo@gmail.com",
    telephone: "28841491",
    type: "employee",
    company : "N/A"
  },
  {
    id: uuidv4(),
    name: "David",
    email: "Bar@gmail.com",
    telephone: "28841491",
    type: "employee",
    company : "N/A"
  },
  {
    id: uuidv4(),
    name: "Elon",
    email: "Elon@gmail.com",
    telephone: "28841491",
    type: "employee",
    company : "N/A"
  },
  {
    id: uuidv4(),
    name: "Bil Gates",
    email: "info@gmail.com",
    telephone: "2528841491491",
    type: "employee",
    company : "Microsoft"
  },
  {
    id: uuidv4(),
    name: "Microsoft",
    email: "info@hotmail.com",
    telephone: "2528841491491",
    type: "company",
    company : "N/A"
  },
  {
    id: uuidv4(),
    name: "Yahoo",
    email: "info@yahoo.com",
    telephone: "2528841491491",
    type: "company",
    company : "N/A"
  },
];

const initialState: initialStateType = {
  contactList,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contactList.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const {
        payload: { id, name, email, telephone, type, company  },
      } = action;

      state.contactList = state.contactList.map((contact) =>
        contact.id === id ? { ...contact, name, email, telephone, type, company } : contact
      );
    },
    removeContact: (state, action: PayloadAction<{ id: string }>) => {
      state.contactList = state.contactList.filter(
        (contact) => contact.id !== action.payload.id
      );
    },
  },
});

export const { addContact, updateContact, removeContact } =
  contactSlice.actions;
export const getContactList = (state: RootState) => state.contact.contactList;

export default contactSlice.reducer;
