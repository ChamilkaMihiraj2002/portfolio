// src/components/Contact.tsx
import { Container, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4 fw-bold">Contact Me</h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your message" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Send
            </Button>
          </Form>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
