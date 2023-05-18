// import {  useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { CoinIcon, FeedbackIcon, InboxIcon, KeyboardIcon, LanguageIcon, LogoutIcon, MessageIcon, PersonIcon, SettingIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon/>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English'
                },{
                    code: 'en',
                    title: 'English'
                },{
                    code: 'en',
                    title: 'English'
                },{
                    code: 'en',
                    title: 'English'
                },{
                    code: 'en',
                    title: 'English'
                },{
                    code: 'en',
                    title: 'English'
                },{
                    code: 'en',
                    title: 'English'
                },{
                    code: 'en',
                    title: 'English'
                },{
                    code: 'en',
                    title: 'English'
                },{
                    code: 'en',
                    title: 'English'
                },{
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                    children: {
                        title: 'Tieng Viet',
                        data: [
                            {
                                title:'hihi'
                            },
                            {
                                title: 'heehe'
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        icon: <FeedbackIcon/>,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon/>,
        title: 'Keyboard shortcuts',
    }
];

const USER_ITEMS = [
    {
        icon: <PersonIcon />,
        title: 'View profile',
    },
    {
        icon: <CoinIcon/>,
        title: 'Get coins',
    },
    {
        icon: <SettingIcon/>,
        title: 'Settings',
    },
    ...MENU_ITEMS,
    {
        icon: <LogoutIcon/>,
        title: 'Log out',
        to: '/logout',
        separate: true,
    }
]
function Header() {
    const currentUser = false


    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}><img src={images.logo} alt="Tiktok" className={cx('logo')}/></Link>

                <Search/>

                <div className={cx('actions')}>
                    {
                        currentUser ? 
                        (<>
                            <Tippy delay={[0, 50]} content="Upload" placement='bottom' >
                                <button className={cx('header-btn', 'header-user')}>
                                    <UploadIcon/>
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 50]} content="Message" placement='bottom' >
                                <button className={cx('header-btn', 'header-user')}>
                                    <MessageIcon/>
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 50]} content="Inbox" placement='bottom' >
                                <button className={cx('header-btn', 'header-user')}>
                                    <InboxIcon/>
                                </button>
                            </Tippy>

                        </>) :
                        (<>
                            <Button text>Upload</Button>
                            <Button primary to='/'>Log in</Button>
                        </>)
                    }
                    <Menu items={currentUser ? USER_ITEMS : MENU_ITEMS}>    
                        {currentUser ? 
                        (<Image
                            className={cx('avatar')}
                            src="https://i.pinimg.com/564x/43/cd/7c/43cd7c65d590d2f41c05a23f3dfe82d4.jpg"
                            alt="Hoaa"
                        />) :
                        (<button className={cx('header-btn', 'more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>)}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
