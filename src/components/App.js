import React, {useState} from "react";
// import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {

const [ contacts,] = useState([]);

  const addContactHandler = (Contact) => {
    console.log(Contact);
  };
    return (
<div className="ui container">
  <Header />
  <AddContact addContactHandler={addContactHandler}/>
  <ContactList contacts={contacts} />
</div>
  );
}

export default App;

