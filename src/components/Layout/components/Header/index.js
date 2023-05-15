import {  useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faSpinner,
    faUser,
    faGear,
    faCoins,
    faSignOut
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { MessageIcon, UploadIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
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
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    }
];

const USER_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    }
]
function Header() {
    const currentUser = true
    const [searchResult, setSearchResult] = useState(false)

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" className={cx('logo')}/>
                <HeadlessTippy
                    interactive
                    visible={searchResult}
                    render={(attrs) => (
                        <div className={cx('search-result')} 
                                tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Results</h4>
                                <div className={cx('result')}>Youre good</div>
                                <div className={cx('result')}>Have a nice day</div>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem classes={cx('result')} checked/>
                                <AccountItem classes={cx('result')}/>
                                <AccountItem classes={cx('result')}/>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input 
                            placeholder="Search accounts and videos" spellCheck={false} 
                            onClick={() => {setSearchResult(true)}}
                            onBlur={() => {setSearchResult(false)}}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

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

                        </>) :
                        (<>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>)
                    }
                    <Menu items={currentUser ? USER_ITEMS : MENU_ITEMS}>    
                        {currentUser ? 
                        (<img
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
