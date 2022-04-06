import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard"
import { useRef } from "react";

const ContactList = (props) => {
    console.log(props);
    const inputEI = useRef("");
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };


    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact}
                clickHandler={deleteContactHandler} key={contact.id} />
        );
    });
    const getSearchTerm = () => {
        props.searchKeyword(inputEI.current.value);
    };

    return (
        <div className="main">
            <h2>Contact List
                <Link to="/add">
                    <button className="ui button blue right">Add Contact</button>
                </Link>

            </h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input 
                    ref={inputEI}
                    type="text" placeholder="Search Contacts" className="prompt" value={ props.term} onChange={ getSearchTerm}/>
                    <i className="search icon"></i>
                </div>

            </div>

            <div className="ui celled list">{renderContactList}</div>
        </div>
    );
};

export default ContactList;