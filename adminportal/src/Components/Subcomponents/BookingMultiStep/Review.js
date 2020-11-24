import React from 'react'
import Container from '@material-ui/core/Container'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetail from '@material-ui/core/AccordionDetails'
import Button from '@material-ui/core/Button'

import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import ExpandmoreIcon from '@material-ui/icons/ExpandMore'
import db from '../../../firebase'



 const Review = ({formData, setForm, navigation, setPristine}) => {
    const {go} = navigation;
    console.log(formData)
    const {
        firstName,
        lastName,
        nickName,
        address,
        city,
        state,
        post_code,
        phone,
        email,
        serviceChoosed,
        bedrooms,
        bathrooms,
    } = formData;

    const addorEdit = obj => {
        db.child("bookings").push(
          formData)
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id)
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
    })}

    return (
        <Container maxWidth="sm">
            <h3>Review</h3>
            <RenderAccordion summary="JobDescription" go={ go } details={[
                {'Service Choosed' : serviceChoosed},
                {'Bedrooms' : bedrooms},
                {'Bathrooms' : bathrooms}
                         ]} />
            <RenderAccordion summary="Names" go={ go } details={[
                {'First Name' : firstName},
                {'Last Name' : lastName},
                {'Nick Name' : nickName}
                         ]} />
            <RenderAccordion summary="Address" go={ go }  details={[
                {'address' : address},
                {'city' : city},
                {'state' : state},
                {'post_code' : post_code},
                            ]} />
            <RenderAccordion summary="Contact" go={ go }  details={[
                {'phone' : phone},
                {'email' : email},
             ]} />
             <Button
                color="primary"
                variant="contained"
                style={{marginTop:"1rem"}}
                onClick={() => {go('submit');
                                setPristine()
                                addorEdit(formData)}}>
                    Submit
             </Button>
               
        </Container>
    )
}
export default Review;

export const RenderAccordion = ({summary, details, go}) => (
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandmoreIcon/>}>
            {summary}</AccordionSummary>
        <AccordionDetail>
            <div>
                {details.map((data, index) => {
                    const objKey = Object.keys(data)[0];
                    const objValue = data[Object.keys(data)[0]]

                    return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
                })}
                <IconButton
                    color="primary"
                    component="span"
                    onClick={() => go(`${summary.toLowerCase()}`)}><EditIcon/></IconButton>
            </div>
        </AccordionDetail>
    </Accordion>
)
