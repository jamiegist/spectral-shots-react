import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function ShopButton() {
  return (
    <a 
      href="https://spectral-shots.framer.art" 
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 bg-white text-black font-medium rounded-full shadow-lg hover:bg-neutral-200 transition-colors"
    >
      shop prints
    </a>
  );
}

function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col items-center">
      
      <div className="max-w-2xl text-center mb-8">
        <p className="text-neutral-400 font-mono text-sm leading-relaxed">
          spectral shots specializes in moody, monochrome photography. from architecture to landscapes, the goal is to capture the sense of feeling within the frame.
        </p>
      </div>

      <div className="w-full max-w-4xl relative overflow-hidden rounded-xl">
        <img 
          src="/photos/hero.jpg" 
          alt="Spectral Shots Hero" 
          className="w-full h-[450px] md:h-[600px] object-cover"
        />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="absolute inset-x-0 bottom-8 flex justify-center z-10">
          <ShopButton />
        </div>
      </div>

    </div>
  );
}

export default Home;