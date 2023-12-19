import Contact from "./Contact"

const Contacts = ({ contacts }) => {
    if (contacts.length > 0) {
        return (
            <div>
                {contacts.map(contact => <Contact key={contact.name} name={contact.name} number={contact.number} />)}
            </div>
        )
    }
    return (<div><p>No contacts</p></div>)

}

export default Contacts
