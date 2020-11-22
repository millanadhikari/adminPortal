import React from 'react'
import './QuoteCreater.css'

import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import WcIcon from '@material-ui/icons/Wc';


function QuoteCreater({ formData, setForm, navigation }) {
    const { serviceChoosed, propertyType, bedrooms, bathrooms, totalPrice } = formData;

    const priceList = {
        studio: 149,
        oneBed: 270,
        twoBed: 350,
        threeBed: 450,
        fourBed: 550,
        fiveBed: 700,
    }

    const priceCalculator = () => {

        switch (propertyType) {
            case 'Unit':
                return (priceList.oneBed);
            case 'Studio':
                return (priceList.studio);
            case 'House':
                return (priceList.threeBed);
        }
    }

    const bedroomCount = () => {

        switch (propertyType) {
            case 'Unit':
                return ('1');
            case 'Studio':
                return ('0');
            case 'House':
                return (priceList.threeBed);
        }
    }


    const price = () => {

        if (bathrooms === 1 || bedrooms === 0) {
            return (
                totalPrice
            )
        }
        else if (bathrooms === 1 || bedrooms === 1) {
            return (
                totalPrice + 121
            )
        }
        else if (bathrooms === 1 || bedrooms === 2) {
            return (
                totalPrice + 50 + 50
            )
        }
        else if (bathrooms === 2 || bedrooms === 2)  {
            return (
                totalPrice + 50 + 50
            )
        }

        else if (bathrooms === 2 || bedrooms === 0)  {
            return (
                totalPrice + 50
            )
        }
        else if (bathrooms === 3) {
            return (
                totalPrice + 100
            )
        }
    }

    const GST = () => {
        return (
            totalPrice * 0.1
        )
    }

    return (
        <div className="quotecreater">
            <h3>{serviceChoosed}</h3>
            <p>Property Type:{propertyType}</p>
            <span className="divide"><div className="sub_divide"><p>Bedrooms</p><p><LocalHotelIcon/>{bedroomCount()}</p></div>
            <div className="sub_divide"><p>Bathrooms</p><p><WcIcon/>{bathrooms}</p></div></span>
            <span className="divide2"><div className="sub_divide2"><p>Price:${price()}</p></div>
            <div className="sub_divide2"><p>GST:${GST()}</p></div>
            <div className="sub_divide3"><p>Total Price:${price() + GST() } (10%GST)</p></div></span>
        </div>
    )
}

export default QuoteCreater
