import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles)

export default function MenuItem({title, to, icon, activeIcon}) {
    return (
        <NavLink to={to} className={(nav) => cx('menu-item', {active: nav.isActive})}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    )
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node
}

