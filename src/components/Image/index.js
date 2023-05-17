import { forwardRef, useState } from "react"
import images from "~/assets/images"


const Image = forwardRef(({src, alt, fallback = images.noImage, ...props}, ref) => {
    const [_fallback, setFallback] = useState('')
    const handleError = () => {
        setFallback(fallback)
    }
    return <img ref={ref} src={_fallback || src} alt={alt} {...props} onError={handleError}/>
})

export default Image
