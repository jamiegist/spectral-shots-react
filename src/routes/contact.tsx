import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'spectralshotsphoto@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-16 text-center space-y-12">
      
      <div className="space-y-4">
        <h2 className="text-2xl font-mono text-white tracking-wider lowercase">contact</h2>
        <p className="text-neutral-400 font-mono text-sm leading-relaxed lowercase">
          for print inquiries, collaborations, or general questions, feel free to reach out to me directly or find me on social media.
        </p>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3">
        <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">direct email</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
          <a 
            href={`mailto:${email}`} 
            className="text-white font-mono hover:underline text-lg"
          >
            {email}
          </a>
          <button
            onClick={handleCopy}
            className="text-xs font-mono bg-neutral-800 hover:bg-neutral-700 text-neutral-300 px-3 py-1.5 rounded-full transition-colors"
          >
            {copied ? 'copied!' : 'copy email'}
          </button>
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <p className="text-xs font-mono text-neutral-500 lowercase tracking-widest">social media</p>
        <div className="flex justify-center space-x-6 text-neutral-400 font-mono text-sm lowercase">
          <a 
            href="https://instagram.com/spectral.shots" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
          >
            instagram
          </a>
          <span className="text-neutral-700">•</span>
          <a 
            href="https://tumblr.com/spectral-shots" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
          >
            tumblr
          </a>
          <span className="text-neutral-700">•</span>
          <a 
            href="https://spectral-shots.framer.art" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
          >
            prints
          </a>
        </div>
      </div>

    </div>
  );
}

export default Contact;