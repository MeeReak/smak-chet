"use client"
import { MultiChoiceQuestion, WritingQuestion, YesNoQuestion } from '@/components';
import { Checkbox } from '@/components/molechules/SubmitForm/Checkbox';
import Question from '@/components/molechules/SubmitForm/Question';
import { YesNo } from '@/components/molechules/SubmitForm/YesNo';
import SubmitForm, { SubmitFormProps } from '@/components/organisms/submitForm/submitForm'
import { MyContext } from '@/contexts/CardContext';
import React, { useContext, useState } from 'react'

interface SubmitFormProp {
  name: string;
  address: string;
  email: string;
  phonenumber: string;
}

const Page = () => {

  const { CardInfo } = useContext(MyContext);

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
        <SubmitForm
          onchange={(name, address, email, phonenumber) =>
            handleOnChange(name, address, email, phonenumber)
          }
        />
      </div>
    );
}

export default Page