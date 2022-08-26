import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { FaUser, FaKey } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { register } from 'redux/authOperations';
import s from './Form.module.css';

const RegisterForm = () => {
    const [user, setUser] = useState({ name: '', email: '', password: '' });
    const dispatch = useDispatch();

    const saveData = event => {
        const { name, value } = event.target;
        setUser(state => ({ ...state, [name]: value }));
    };
    const submitData = event => {
        event.preventDefault();
        dispatch(register(user));
    };

    return (
        <form className={s.form} onSubmit={submitData}>
            <p className={s.title}>Create a new accaunt</p>
            <label className={s.label}>
                <span className={s.label__text}>Name</span>
                <input
                    className={s.input}
                    type="text"
                    value={user.name}
                    onChange={saveData}
                    name="name"
                    required
                />
                <FaUser className={s.icon} size="15" />
            </label>
            <label className={s.label}>
                <span className={s.label__text}>Email</span>
                <input
                    className={s.input}
                    type="text"
                    value={user.email}
                    onChange={saveData}
                    name="email"
                    required
                />
                <MdEmail className={s.icon} size="15" />
            </label>
            <label className={s.label}>
                <span className={s.label__text}>Password</span>
                <input
                    className={s.input}
                    type="password"
                    value={user.password}
                    onChange={saveData}
                    name="password"
                    required
                />
                <FaKey className={s.icon} size="15" />
            </label>
            <button className={s.button} type="submit">
                Registration
            </button>
        </form>
    );
};

export default RegisterForm;
