import classNames from "classnames/bind"
import styles from './AccountPreview.module.scss'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Button from "~/components/Button";


const cx = classNames.bind(styles)

export default function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img className={cx('avatar')} src="https://i.pinimg.com/564x/43/cd/7c/43cd7c65d590d2f41c05a23f3dfe82d4.jpg" alt=""/>
                <Button primary small className={cx('follow-btn')}>Follow</Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>vucongthanh</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Vu Cong Thanh</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}>Followers</span>

                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    )
}

AccountPreview.propTypes = {
}