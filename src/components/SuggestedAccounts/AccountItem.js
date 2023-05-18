import classNames from "classnames/bind"
import styles from './SuggestedAcocunts.module.scss'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "../Popper";
import AccountPreview from "./AccountPreview";
const cx = classNames.bind(styles)

export default function AccountItem() {

    const renderPreview = (props) => {
        return (
        <div className={cx('preview')} tabIndex="-1" {...props}>
            <PopperWrapper>
                <AccountPreview/>
            </PopperWrapper>
        </div>)
    }
    return (
        <div>
            <Tippy
                interactive
                delay={[500,0]}
                render={renderPreview}
                placement="bottom"
                offset={[-20, 0]}
            >
                <div className={cx('wrapper-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://i.pinimg.com/564x/43/cd/7c/43cd7c65d590d2f41c05a23f3dfe82d4.jpg"
                        alt="cngthnh"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>vucongthanh</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Vu Cong Thanh</p>
                    </div>
                </div>
            </Tippy>
        </div>
    )
}
