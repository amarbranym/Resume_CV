import React from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Formik, Form } from 'formik';
import FormFields from '../Form/FormFields';
import { DocumentData } from "./FileldData"
import Button from '../ui/button/Button';

const initialValues: { [key: string]: string } = {};
DocumentData.forEach((field) => {
    initialValues[field.name] = '';
});

const Document: React.FC = () => {
    const handleSubmit = (values: any) => {
        console.log('Form data:', values);
    };

    return (
        <AccordionDetails>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className="grid gap-4 grid-flow-row-dense grid-cols-12 grid-rows-1   ">
                    {DocumentData.map((field, index) => (
                        <FormFields key={index} {...field} />
                    ))}
                    <div className=' col-span-12 row-span-1 '>
                        <Button type='submit' bg='solid' rounded='md' size='lg'>
                            Save
                        </Button>
                    </div>
                </Form>
            </Formik>
        </AccordionDetails>
    );
};

export default Document;
