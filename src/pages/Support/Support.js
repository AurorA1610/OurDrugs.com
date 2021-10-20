import React from 'react';
import { Accordion, Button, FormControl, InputGroup } from 'react-bootstrap';
import './Support.css';

const Support = () => {
    const handleInput = () => {
        document.getElementById('input-field').value = '';

    }
    return (
        <div className="w-75 mx-auto">
            <div className="p-5 mt-3 help">
                <h1 className="mt-5">How Can We Help You?</h1>
                <InputGroup className="my-3" size="lg">
                    <FormControl
                    id="input-field"
                    placeholder="Ask for help"
                    aria-label="Ask for help"
                    aria-describedby="basic-addon2"
                    />
                    <Button onClick={handleInput} className="border-2 text-dark" variant="outline-secondary" id="button-addon2">
                    Submit
                    </Button>
                </InputGroup>
            </div>
            <h3 className="mt-5 text-success">FAQ</h3>
            <Accordion flush className="w-50 mx-auto text-start">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>I forgot my password, what do I do?</Accordion.Header>
                    <Accordion.Body>
                        If you’ve forgotten your password simply craete a new account with a new email or password. The best option is to sign in using your google account.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Is your site secure?
                    </Accordion.Header>
                    <Accordion.Body>
                        Yes. Your personal details, address and purchase history will be totally secure.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        What if I am after a product that is not listed on the website?
                    </Accordion.Header>
                    <Accordion.Body>
                        If you cannot find what you are looking for online, simply contact your preferred pharmacy with your enquiry.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        How long is a prescription valid for?
                    </Accordion.Header>
                    <Accordion.Body>
                        A prescription is valid for 1 year from the date of prescribing.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        What is a ‘Private’ drug?
                    </Accordion.Header>
                    <Accordion.Body>
                        A private drug is one that is not listed on the PBS.  These drugs do not receive any subsidy from the government.  Some drugs listed on the PBS are below the current threshold (e.g. less than $39.50) and by selecting for them to be dispensed as a private script you can save money, as in most cases we can discount these lines.  By electing to have a drug dispensed as a private drug they then cannot be counted towards your safety net.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>
                        Are generic drugs as safe as brand name drugs?
                    </Accordion.Header>
                    <Accordion.Body>
                        Yes. The FDA must first approve all generic drugs before they are marketed. The FDA requires that generic drugs must be as high in quality, and as strong, pure and stable as brand name drugs. Generic drugs use the same active ingredients as brand name drugs and work the same way. They have the same risks and the same benefits as the brand name drugs.
                    </Accordion.Body>
                </Accordion.Item><Accordion.Item eventKey="6">
                    <Accordion.Header>
                        What is the Placebo Effect?
                    </Accordion.Header>
                    <Accordion.Body>
                        A placebo (or dummy pill) is an inert (inactive) substance, typically a tablet, capsule or other dose form that does not contain an active drug ingredient. For example, placebo pills or liquids may contain starch, sugar, or saline. Physical placebos, or “sham” treatments have also been used, such as inactive acupuncture devices.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Support;