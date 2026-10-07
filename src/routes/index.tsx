import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
        return (
            <>
                <h2>Spectral Shots</h2>
            </>
        )
}

export default Home;