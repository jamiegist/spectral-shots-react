import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/portfolio')({
  component: Portfolio,
})

function Portfolio() {
    return (
        <>
            <h2>Portfolio</h2>
        </>
    )
}

export default Portfolio;