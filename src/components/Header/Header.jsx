import { Navigation } from '../../components';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <Navigation />
            </div>
        </header>
    );
};

export default Header;
