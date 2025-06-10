
import { FaUser, FaPhone } from 'react-icons/fa';
import css from './Contact.module.css';


const Contact = ({ contact, onDelete }) => {
  return (
    <div className={css.contact}>
      <div className={css.info}>
        <p><FaUser style={{ marginRight: '6px' }} /> {contact.name}</p>
        <p><FaPhone style={{ marginRight: '6px' }} /> {contact.number}</p>
      </div>
      <button className={css.deleteButton} onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;
