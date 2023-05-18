import { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";

import useDebounce from "~/hooks/useDebounce";
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss'
import { SearchIcon } from "~/components/Icons";
import * as searchServices from "~/services/searchService";
const cx = classNames.bind(styles)

export default function Search() {
    const [searchResult, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const inputRef = useRef()
    const debounced = useDebounce(searchValue, 500)
    
    function handleClear() {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }
    
    function handleClickOutside() {
        setShowResult(false)
    }

    function handleChange(e) {
        const searchValue = e.target.value
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
    }
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([])
            return
        }
        // https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`
        
        const fetchApi = async () => {
            setLoading(true)
            const result =  await searchServices.search(debounced)
            setSearchResult(result)
            setLoading(false)
        }
        fetchApi()
    }, [debounced]);

    return (
        // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context. 
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} 
                            tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                                <div className={cx('wrapper-search-result')}>
                                    <h4 className={cx('search-title')}>Results</h4>
                                    <div className={cx('result')}>Love you</div>
                                    <div className={cx('result')}>Have a nice day</div>
        
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    {searchResult.map((result) => {
                                        return <AccountItem key={result.id} classes={cx('result')} result={result}/>})}
                                </div>
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={() => {handleClickOutside()}}
            >
                <div className={cx('search')}>
                    <input 
                        ref={inputRef}
                        placeholder="Search accounts and videos" spellCheck={false} value={searchValue} 
                        onInput={handleChange}
                        onFocus={() => {setShowResult(true)}}
                    />
                    {
                    !loading && searchValue && <button className={cx('clear')} onClick={() => handleClear()}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    }
        
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
        
                    <button className={cx('search-btn')} onMouseDown={handleSubmit}>
                        <SearchIcon/>
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    )
}
