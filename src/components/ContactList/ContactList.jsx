import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { getContacts, deleteContact } from 'redux/operations';
import s from './ContactList.module.css';

const ContactList = () => {
    const contacts = useSelector(state => state.items);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    const onDelete = id => {
        dispatch(deleteContact(id));
    };

    const visibleList = contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter)
    );

    return visibleList.length > 0 ? (
        <ul className={s.list}>
            {visibleList.map(({ name, phone, id }) => (
                <li className={s.item} key={id}>
                    <p>
                        {name} : {phone}
                    </p>
                    <button
                        className={s.button}
                        type="button"
                        title="delete contact"
                        onClick={() => onDelete(id)}
                    >
                        <RiDeleteBin5Line size="25" />
                    </button>
                </li>
            ))}
        </ul>
    ) : (
        <div className={s.list}>You haven't contacts yet</div>
    );
};

export default ContactList;
