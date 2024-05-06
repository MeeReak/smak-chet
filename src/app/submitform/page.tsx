"use client"
import SubmitForm, { SubmitFormProps } from '@/components/organisms/submitForm/submitForm'
import React, { useState } from 'react'

interface SubmitFormProp {
  name: string;
  address: string;
  email: string;
  phonenumber: string;
}

const Page = () => {
  const [submitForm, setSubmitForm] = useState<SubmitFormProp>({
    name: "",
    address: "",
    email: "",
    phonenumber: ""   
  })
  
   const handleOnChange = (name:string, address:string, email:string, phonenumber:string) => {
     setSubmitForm((pre) => ({
       ...pre,
       name: name,
       address: address,
       email: email,
       phonenumber: phonenumber,
     }));
     console.log(submitForm);
   };
    return (
      <div className="xl:w-[1024px] w-screen m-auto space-y-5 z-10 mt-[100px] mb-20">
        <SubmitForm onchange={(name, address, email, phonenumber)=>handleOnChange(name, address, email, phonenumber)} />  
      </div>
    );
}

export default Page