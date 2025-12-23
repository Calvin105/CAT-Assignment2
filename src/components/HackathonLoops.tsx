import LogoLoop from './LogoLoop';
import alibabaHackathon from '../assets/hackathons/Alibaba Hackathon.png';
import cursorAnthropicHackathon from '../assets/hackathons/Cursor Anthropic Hackathon.png';
import devmatchHackathon from '../assets/hackathons/Devmatch.jpg';
import googleAIHackathon from '../assets/hackathons/Google AI Hackathon.png';
import payHackHackathon from '../assets/hackathons/PayHack2025.png';
import vHackHackathon from '../assets/hackathons/VHack.png';

const hackathonLogos = [
  { src: alibabaHackathon, alt: 'Alibaba Hackathon' },
  { src: cursorAnthropicHackathon, alt: 'Cursor x Anthropic Hackathon' },
  { src: devmatchHackathon, alt: 'Devmatch Hackathon' },
  { src: googleAIHackathon, alt: 'Google AI Hackathon' },
  { src: payHackHackathon, alt: 'PayHack 2025' },
  { src: vHackHackathon, alt: 'VHack' },
];

const HackathonLoops = () => {
  return (
    <div className="relative h-40 md:h-48 overflow-hidden">
      <LogoLoop
        logos={hackathonLogos.map((logo) => ({
          node: (
            <div className="h-12 md:h-14 w-32 md:w-40 bg-black p-2 rounded-xl flex items-center justify-center shadow-md">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ),
          title: logo.alt,
        }))}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#EEE3C3"
        ariaLabel="Hackathons we have participated in"
      />
    </div>
  );
};

export default HackathonLoops;