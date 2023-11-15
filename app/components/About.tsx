import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem } from "@mui/material";
import React from "react";
import { StyledAccordion, StyledAccordionDetails, StyledAccordionSummary } from "./Styles";

const About = () => {
    return (
        <List>
            <ListItem>
                <StyledAccordion
                    defaultExpanded={false}
                    sx={{
                        width: "100%",
                    }}
                >
                    <StyledAccordionSummary
                        expandIcon={<ExpandMore sx={{
                            fontSize: "2rem",
                        }} />}
                    >
                        Default User Accounts
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                        Default User Accounts is a vulnerability that allows an attacker to gain access to the system by exploiting the default user accounts that are present in the system.
                        For example, while purchasing a new router, the default username and password are admin and admin respectively. If the user does not change the default username and password, then an attacker can easily gain access to the system.
                    </StyledAccordionDetails>
                </StyledAccordion>
            </ListItem>
            <ListItem>
                <StyledAccordion
                    defaultExpanded={false}
                    sx={{
                        width: "100%",
                    }}
                >
                    <StyledAccordionSummary
                        expandIcon={<ExpandMore sx={{
                            fontSize: "2rem",
                        }} />}
                    >
                        Specific Error Message
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                        Specific Error Message is a vulnerability that allows an attacker to gain information about the system by exploiting the error message that is returned by the system. This information can be used to gain access to the system.
                    </StyledAccordionDetails>
                </StyledAccordion>
            </ListItem>
            <ListItem>
                <StyledAccordion
                    defaultExpanded={false}
                    sx={{
                        width: "100%",
                    }}
                >
                    <StyledAccordionSummary
                        expandIcon={<ExpandMore sx={{
                            fontSize: "2rem",
                        }} />}
                    >
                        Unpublished URLS
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                        Unpublished URLS is a vulnerability that allows an attacker to gain information about the system by exploiting the unpublished URLs that are present in the system.
                        For example, let's take an webpage that allows both users and admin to log in to server. Now, the internal server
                        that is used only by the admin must be unpublished. If the attacker is able to find the unpublished URL, then he can gain access to the system.
                        He can get to know about the unpublished URL by using the "View Source" option in the browser.
                    </StyledAccordionDetails>
                </StyledAccordion>
            </ListItem>
            <ListItem>
                <StyledAccordion
                    defaultExpanded={false}
                    sx={{
                        width: "100%",
                    }}
                >
                    <StyledAccordionSummary
                        expandIcon={<ExpandMore sx={{
                            fontSize: "2rem",
                        }} />}
                    >
                        List Directory
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                        List Directory is a vulnerability that allows an attacker to gain information about the system by exploiting the directory listing that is present in the system.
                        For example, let's take a web server that has a directory listing. If we didn't validate the input, then the attacker can gain access to the resources in the
                        system by manipulating the file path.
                    </StyledAccordionDetails>
                </StyledAccordion>
            </ListItem>
            <ListItem>
                <StyledAccordion
                    defaultExpanded={false}
                    sx={{
                        width: "100%",
                    }}
                >
                    <StyledAccordionSummary
                        expandIcon={<ExpandMore sx={{
                            fontSize: "2rem",
                        }} />}
                    >
                        Error XSS
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                        Error XSS is a vulnerability that allows an attacker to exploit the invalidation of the wrong url.
                        For example, let's take a web server that only supports some few URLS. On URL's that doesn't exist 
                        in the server, the server returns an error message. If we didn't validate the input, then the attacker can
                        add his own script to the URL and gain access to resources.
                    </StyledAccordionDetails>
                </StyledAccordion>
            </ListItem>
        </List>
    );
}

export default About;