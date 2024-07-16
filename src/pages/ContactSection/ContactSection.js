import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

const Section = styled.section`
  padding: 4em 0;
  background-color: black;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 1em;
  color: #D3E97A;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 600px;
  margin-bottom: 2em;
  color: #D3E97A;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5em;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75em;
  margin-bottom: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75em;
  margin-bottom: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #D3E97A;
  color: black;
  padding: 0.75em 1.5em;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: white;
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  color: white;
`;

const InfoText = styled.p`
  margin: 0.5em 0;
`;

const InfoLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ContactSection = () => {
  return (
    <Element name="contact" className="element">
      <Section id="contact">
        <SectionTitle>Contact Me</SectionTitle>
        <ContactContainer>
          <ContactForm action="https://formspree.io/f/xdknkyne" method="POST">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" required />

            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required />

            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows="5" required></Textarea>

            <Button type="submit">Send Message</Button>
          </ContactForm>
          <ContactInfo>
            <InfoText>
              Email: <InfoLink href="mailto:youremail@example.com">nhluleloharmony81@gmail.com</InfoLink>
            </InfoText>
            <InfoText>
              Phone: <InfoLink href="tel:+27684406242">+27 684 4062 42</InfoLink>
            </InfoText>
          </ContactInfo>
        </ContactContainer>
      </Section>
    </Element>
  );
};

export default ContactSection;
