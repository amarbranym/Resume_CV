"use client"
import React, { useState } from 'react'
import Personal from './Personal'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Education from './Education';
import Skill from './Skill';
import Hobbie from './Hobbie';
import Document from './Document';
import Experience from './Experience';


const Content = () => {
    const [expanded, setExpanded] = useState<string | false>('panel6');
    
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };
    return (
        <div className='flex flex-col gap-4'>
            <div>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ boxShadow: "none", paddingY: "10px" }}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <h4 className='text-xl font-bold'>Personal Details</h4>
                    </AccordionSummary>
                    <Personal />
                </Accordion>
            </div>
            <div>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ boxShadow: "none", paddingY: "10px" }}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <h4 className='text-xl font-bold'>Education Details</h4>
                    </AccordionSummary>
                    <Education />
                </Accordion>
            </div>
            <div>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ boxShadow: "none", paddingY: "10px" }}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <h4 className='text-xl font-bold'>Skill</h4>
                    </AccordionSummary>
                    <Skill />
                </Accordion>
            </div>
            <div>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ boxShadow: "none", paddingY: "10px" }}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <h4 className='text-xl font-bold'>Hobbies</h4>
                    </AccordionSummary>
                    <Hobbie />
                </Accordion>
            </div>
            <div>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{ boxShadow: "none", paddingY: "10px" }}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <h4 className='text-xl font-bold'>Document</h4>
                    </AccordionSummary>
                    <Document />
                </Accordion>
            </div>
            <div>
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} sx={{ boxShadow: "none", paddingY: "10px" }}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <h4 className='text-xl font-bold'>Professional Experience</h4>
                    </AccordionSummary>
                    <Experience />
                </Accordion>
            </div>
        </div>
    )
}

export default Content
