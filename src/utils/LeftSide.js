import React, { useEffect, useRef, useState } from 'react';
import e from '../images/a5.jpg';

const LeftSide = () => {
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();
    const fileInputRef = useRef();

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(image)
        } else {
            setPreview(null);
        }
        
    }, [image]);



    return (
        <div>
            <form>
                <a href = "#" data-id = "1">
                    <img src = {preview ? preview : 'https://yi-files.s3.amazonaws.com/products/9000/9133/9139-cover.jpg'} alt = "shoe image"
                        onClick={(e) => {
                        e.preventDefault();
                        fileInputRef.current.click();
                        console.log(image)
                    }}/>
                        <input
                            type='file'
                            ref={fileInputRef}
                            style={{display:"none"}}
                            accept='image/*'
                            onChange={(e) => {
                        const file = e.target.files[0];
                    if (file && file.type.substr(0, 5) === 'image'){
                        setImage(file);
                        } else {
                            setImage(null);
                                }
                                }}
                        />
                </a>
            </form>
                
        </div>
    )
}

export default LeftSide

