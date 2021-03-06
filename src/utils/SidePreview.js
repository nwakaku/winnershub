import React, { useEffect, useRef, useState } from 'react';
import e from '../images/a5.jpg';

const SidePreview = ({formProps}) => {
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
                    <img src = {preview ? preview : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI23zyMl1RBcpLtnhaIA1ZnNNamQzSiDWRaGq1somRdZPcp418XzsA4Et1hkyzgE-hBUU&usqp=CAU'} alt = "shoe image"
                        onClick={(e) => {
                        e.preventDefault();
                        fileInputRef.current.click();
                    }}/>
                        <input
                            type='file'
                            ref={fileInputRef}
                            name='photo3'
                            style={{display:"none"}}
                            accept='image/*'
                            onChange={(e) => {
                        const file = e.target.files[0];
                        formProps.setFieldValue('photo3', file)
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

export default SidePreview

