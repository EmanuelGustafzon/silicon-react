import { useState } from "react"
import useSendData from "../hooks/useSendData";

type IProffessional = 'Neurology' | 'Ophthalmic Surgery' | 'Pathology' | 'Hospital Medicine';

interface IContact {
    fullname: string;
    email: string;
    proffesional: IProffessional
}

const ContactForm = () => {
    const { error} = useSendData('contact');

    useState<IContact>({
        fullname: '',
        email: '',
        proffesional: 'Neurology'
    });

  return (
    <>
    {error && <p>sorry</p>}
    </>
  )
}

export default ContactForm