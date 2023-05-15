import { FC } from 'react';

interface ImageProp {
    w: string,
    h: string,
    alt: string,
    src: string
}

const Image: FC<ImageProp> = ({ w, h, alt, src }) => {


    return (
        <img  
            alt={alt}
            src= {src}
            style ={{
                width: w,
                height: h
            }}
        />
    )
}

export default Image;