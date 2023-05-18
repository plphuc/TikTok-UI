import { forwardRef, useState } from "react"
import images from "~/assets/images"
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Image = forwardRef(({src, alt, className, fallback = images.noImage, ...props}, ref) => {
    const [_fallback, setFallback] = useState('')
    const handleError = () => {
        setFallback(fallback)
    }
    return (
    <img 
        className={classNames(className)}
        ref={ref} 
        src={_fallback || src} 
        alt={alt} {...props} 
        onError={handleError}
    />)
})

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string
}
export default Image
