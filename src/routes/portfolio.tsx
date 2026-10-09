import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/portfolio')({
  component: Portfolio,
})

interface Photo {
  src: string;
  alt: string;
}

function Portfolio() {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

    const photos: Photo[] = [
        { src: '/photos/manhattan_bridge.jpg', alt: 'Manhattan Bridge' },
        { src: '/photos/sutro_baths.jpg', alt: 'Sutro Baths' },
        { src: '/photos/fishing.jpg', alt: 'fishing by the ocean' },
        { src: '/photos/mountain.jpg', alt: 'Mountain' },
        { src: '/photos/bird_mountain.jpg', alt: 'Bird and Mountain' },
        { src: '/photos/space_needle.jpg', alt: 'Space Needle' },
        { src: '/photos/alki_pier.jpg', alt: 'Alki Beach Pier' },
        { src: '/photos/boats_passing.jpg', alt: 'Boats Passing' },
        { src: '/photos/fruit_stand.jpg', alt: 'Fruit Stand' },
        { src: '/photos/flower.jpg', alt: 'Flower' },
        { src: '/photos/clothes.jpg', alt: 'Clothes Hanging to Dry' },
        { src: '/photos/tube_station.jpg', alt: 'London Tube Station' },
        { src: '/photos/pike_place_market.jpg', alt: 'Pike Place Market' },
        { src: '/photos/ferry_seats.jpg', alt: 'Seats on a Ferry' },
        { src: '/photos/ferry_door.jpg', alt: 'Ferry Door' },
        { src: '/photos/windows.jpg', alt: 'Windows' },
        { src: '/photos/boston_chinatown.jpg', alt: 'Boston Chinatown Gate' },
        { src: '/photos/train_tracks.jpg', alt: 'Train Tracks Overgrown' },

    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
            <h2 className="text-2xl font-mono text-white tracking-wider lowercase">Portfolio</h2>
            
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {photos.map((photo, index) => (
                    <div 
                        key={index} 
                        onClick={() => setSelectedPhoto(photo)}
                        className="break-inside-avoid overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 group relative cursor-pointer"
                    >
                        <img 
                            src={photo.src} 
                            alt={photo.alt} 
                            className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>

            {selectedPhoto && (
                <div 
                    onClick={() => setSelectedPhoto(null)}
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                >
                    <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-lg">
                        <button 
                            onClick={() => setSelectedPhoto(null)}
                            className="absolute top-4 right-4 text-white bg-black/60 hover:bg-black p-2 rounded-full font-mono text-sm transition-colors z-10"
                        >
                            ✕
                        </button>
                        <img 
                            src={selectedPhoto.src} 
                            alt={selectedPhoto.alt} 
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Portfolio;