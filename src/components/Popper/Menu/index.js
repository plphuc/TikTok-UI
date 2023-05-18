import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import Header from './Header';


const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick=true }) {
    const [history, setHistory] = useState([{data: items}])
    const current = history[history.length-1]
    
    function handleClickItem(item) {
        if (item.children){
            setHistory(prev => [...prev, item.children])
        }
    }

    const renderItems = () => {
        return current.data.map((item, index) => 
        {
            return <MenuItem key={index} data={item} 
                            onClick={() => handleClickItem(item)} />})
    };

    const handleResetMenu = (index) => {
        setHistory(prev => prev.slice(0, index))
    }

    const renderResults = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>

                { history.length > 1 &&

                <Header title= {current.title}
                    onBack={() => handleResetMenu(-1)}/>}
                {<div className={cx('menu-body')}>{renderItems()}</div>}

            </PopperWrapper>
        </div>
    )


    return (
        <Tippy
            interactive
            hideOnClick={hideOnClick}
            delay={[0, 700]}
            placement="bottom-end"
            render={renderResults}
            onHide={() => handleResetMenu(1)}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
}
export default Menu;
