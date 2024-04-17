import React, { useEffect, useState } from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import { AiFillEye, AiOutlinePlus } from "react-icons/ai";
import { Formik, Form } from 'formik';
import FormFields from '../Form/FormFields';
import { skillData } from "./FileldData";
import Button from '../ui/button/Button';
import { v4 as uuidv4 } from 'uuid';

const initialValues: { [key: string]: string } = {};
skillData.forEach((field) => {
    initialValues[field.name] = '';
});


const Skill: React.FC = () => {
    const [skill, setSkill] = useState<any>([]);
    const [expanded, setExpanded] = useState<string | false>();
    console.log("education", skill)

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };
    const addEducation = () => {
        const uniqueId = uuidv4();
        setSkill([...skill, { id: uniqueId, values: { ...initialValues } }]);
        setExpanded(uniqueId)
    };

    const handleFormSubmit = (values: any, id: string) => {

        setSkill(skill.map((edu: any) => {
            if (edu.id === id) {
                return { ...edu, values };
            }
            return edu;
        }));
        setExpanded(false)
    };

    const removeEducation = (id: string) => {
        setSkill(skill.filter((edu: any) => edu.id !== id));
    };

    useEffect(() => {
        const id = uuidv4()
        setSkill([...skill, { id: id, values: { ...initialValues } }]);
        setExpanded(id)
    }, [])

    return (
        <AccordionDetails>
            <div className='flex flex-col gap-2  '>

                {skill.map((edu: any) => (
                    <div key={edu.id}>
                        <Accordion expanded={expanded === edu.id} onChange={handleChange(edu.id)} sx={{ boxShadow: "none", paddingY: "0px", border: "1px solid black" }}>
                            <AccordionSummary sx={{ borderRadius: "10px", display: expanded === edu.id ? "none" : "flex", justifyContent: "space-between", alignItems: "center" }} >

                                <h4 className=' w-full text-lg  block '>
                                    {edu?.values.skill}
                                </h4>
                                <AiFillEye className='h-8 w-6 ' />

                            </AccordionSummary>
                            <AccordionDetails>
                                <Formik
                                    initialValues={edu.values}
                                    onSubmit={(values) => handleFormSubmit(values, edu.id)}
                                >
                                    <Form className="grid gap-4 grid-flow-row-dense grid-cols-12 grid-rows-2">
                                        {skillData.map((field, index) => (
                                            <FormFields key={index} {...field} />
                                        ))}
                                        <div className=' col-span-12  flex justify-between items-center'>
                                            <div>

                                                <Button type='submit' bg='solid' rounded='sm' size='md'>
                                                    Save
                                                </Button>
                                            </div><div>

                                                <Button type='button' bg='solid' rounded='sm' size='md' onClick={() => removeEducation(edu.id)}>
                                                    Remove
                                                </Button>
                                            </div>
                                        </div>
                                    </Form>
                                </Formik>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                ))}
            </div>
            <div className='mt-4 text-center'>
                <Button type='button' bg='white' rounded='full' size='lg' onClick={addEducation}>
                    <AiOutlinePlus className='h-6 w-6' /> Skill
                </Button>
            </div>
        </AccordionDetails>
    );
};

export default Skill;
