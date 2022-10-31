import React, {useState, useMemo, useCallback, useContext} from 'react'
import Image from 'next/image'
import Style from '../styles/account.module.css'
import {useDropzone} from 'react-dropzone'
import images from '../img'
import Form from '../AccountPage/Form/Form'

const account = () => {
    const [fileUrl, setfileUrl] = useState(null)
  return (
    <div classNAme={Style.account}>
        <div className={Style.account_info}>
            <h1>Profile settings.</h1>
            <p> You can set preferred display name, creat your profile URL and set other personal settings.</p>
        </div>
        <div className={Style.account_box}>
            <div className={Style.account_box_img}>
                <input />
                <Image 
                src={images.user1} 
                alt="account upload"
                width ={150}
                height ={150}
                className ={Style.account_box_img_img}/>
                <p className={Style.account_box_img_para}>Change Image</p>
            </div>
            <div className={Style.account_box_form}>
                <Form />
            </div>
        </div>
    </div>
  )
}

export default account