import React from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Formik, Form } from 'formik';
import FormFields from '../Form/FormFields';
import { personalData } from "./FileldData"
import Button from '../ui/button/Button';

const initialValues: { [key: string]: string } = {};
personalData.forEach((field) => {
    initialValues[field.name] = '';
});

const Personal: React.FC = () => {
    const handleSubmit = (values: any) => {
        console.log('Form data:', values);
    };

    return (
        <AccordionDetails>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className="grid gap-4 grid-flow-row-dense grid-cols-12 grid-rows-2 ">
                    {personalData.map((field, index) => (
                        <FormFields key={index} {...field} />
                    ))}
                    <div className='col-span-12'>
                        <Button type='submit' bg='solid' rounded='md' size='lg'>
                            Save
                        </Button>
                    </div>
                </Form>
            </Formik>
        </AccordionDetails>
    );
};

export default Personal;
