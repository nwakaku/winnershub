import React, { useEffect, useRef, useState } from 'react';
import e from '../images/a5.jpg';

const PreviewImage = ({image, setImage, preview, setPreview, formProps}) => {

    const fileInputRef = useRef();

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(image);
            formProps.setFieldValue('img', preview);
        } else {
            setPreview(null);
        }
        
    }, [image]);



    return (
        <div>
            <form>
                <a href = "#" data-id = "1">
                    <img src = {preview ? preview : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOD37jxEIBC3mI_uUG88C55f6MF_m8CyPAxKKA3j8zo2IXf4oqK0X5wLgpxqgXTcydtlc&usqp=CAU'} alt = "shoe image"
                        onClick={(e) => {
                        e.preventDefault();
                        fileInputRef.current.click();
                    }}/>
                        <input
                            type='file'
                            ref={fileInputRef}
                            name='img'
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

export default PreviewImage
