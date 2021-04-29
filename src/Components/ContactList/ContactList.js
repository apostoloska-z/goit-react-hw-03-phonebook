import PropTypes from 'prop-types';
import ContactItem from "../ContactItem"
import "./ContactList.scss"

const ContactList = ({ contacts, deleteHandler }) => (
    <ul className="contact-list">
        {contacts.map((contact) => (
            
            <li className="contact-list__item" key={contact.id}>
                <ContactItem
                    name={contact.name}
                    number={contact.number}
                    id={contact.id}
                    deleteHandler={deleteHandler}
                />
            </li>
        ))}
    </ul>
)


ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteHandler: PropTypes.func.isRequired,
}

export default ContactList;