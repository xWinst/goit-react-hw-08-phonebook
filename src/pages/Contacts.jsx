import { ContactForm, ContactList, Filter } from 'components';

const Contacts = () => {
    return (
        <div className="container">
            <h1 className="title">Phonebook</h1>
            <div className="phonebook">
                <ContactForm />
                <div className="contacts">
                    <Filter />
                    <h2>Contacts:</h2>
                    <ContactList />
                </div>
            </div>
        </div>
    );
};

export default Contacts;
