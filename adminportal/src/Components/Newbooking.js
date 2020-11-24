import React, {useEffect} from 'react'
import './Newbooking.css'
import { useForm, useStep } from "react-hooks-helper"
import Name from './Subcomponents/BookingMultiStep/Name'
import Address from './Subcomponents/BookingMultiStep/Address'
import Contact from './Subcomponents/BookingMultiStep/Contact'
import Review from './Subcomponents/BookingMultiStep/Review'
import Submit from './Subcomponents/BookingMultiStep/Submit'
import JobDescription from './Subcomponents/BookingMultiStep/JobDescription'
import useUnsavedChangesWarning from './Subcomponents/useUnsavedChangesWarning'
import Quotation from './Quotation'
import QuoteCreater from './Subcomponents/BookingMultiStep/QuoteCreater'


const defaultData = {
    firstName: "",
    lastName: "",
    nickName: "",
    address: '',
    city: '',
    state: '',
    post_code: '',
    phone: '',
    email: '',
    serviceChoosed: "",
    propertyType: "Studio",
    bedrooms: 0,
    bathrooms: 1,
    totalPrice: 149
}

const steps = [
    { id: 'jobdescription' },
    { id: 'names' },
    { id: 'address' },
    { id: 'contact' },
    { id: 'review' },
    { id: 'submit' },

]

function Newbooking() {
    const [formData, setForm] = useForm(defaultData)
    const { step, navigation } = useStep({
        steps,
        initialStep: 0
    })
    const [Prompt, setDirty, setPristine] = useUnsavedChangesWarning();
    useEffect(() => {
        
    }, [formData])
   
    const props = { formData, setForm, navigation, setDirty, setPristine, Prompt }
    switch (step.id) {
        case "jobdescription":
            return <><JobDescription {...props} /> <QuoteCreater {...props} /></>;
        case "names":
            return (<> <Name {...props} /><QuoteCreater {...props} /></>);
        case "address":
            return <><Address {...props} /> <QuoteCreater {...props} /></>
        case "contact":
            return <><Contact {...props} /> <QuoteCreater {...props} /></>
        case "review":
            return <><Review {...props} /> <QuoteCreater {...props} /></>
        case "submit":
            return <><Submit {...props} /> <QuoteCreater {...props} /></>
    }
    return (
        <div className="newbooking">
            <div className="newbooking__forms">
            </div>

        </div>
    )
}

export default Newbooking
