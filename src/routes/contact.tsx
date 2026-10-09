import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
        return (
        <>
            <h2>Contact</h2>
            
        </>
        )
}

export default Contact;