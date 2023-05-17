import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick=false }) {
    const [history, setHistory] = useState([{data: items}])
    const current = history[history.length-1]
    
    function handleClickItem(item) {
        if (item.children){
            setHistory(prev => [...prev, item.children])
        }
    }

    const renderItems = () => {
        return current.data.map((item, index) => 
        <MenuItem key={index} data={item} 
                            onClick={() => handleClickItem(item)} />);
    };
    return (
        <Tippy
            interactive
            hideOnClick={hideOnClick}
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        { history.length > 1 &&
                        <Header title= {current.title} 
                            onBack={() => {setHistory(prev => prev.slice(0,-1))}}/>}
                        {renderItems()}
                        </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
