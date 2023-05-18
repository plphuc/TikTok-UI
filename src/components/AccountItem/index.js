import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Image';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function AccountItem({classes, result}) {

    return (
        <Link to="/@{result.nickname}" className={cx('wrapper', {[classes]: classes})}>
            <Image
                className={cx('avatar')}
                src={result.avatar}
                alt="Avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{result.full_name}</span>
                    {result.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{result.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes  = {
    result: PropTypes.object.isRequired
}
export default AccountItem;
