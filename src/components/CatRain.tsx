import { useEffect, useState } from 'react';
import logo from '../assets/Meowieeee logo transparent bg.png';

const CatRain = () => {
    const [cats, setCats] = useState<Array<{ id: number; left: number; delay: number; size: number }>>([]);

    useEffect(() => {
        const catCount = 50;
        const newCats = Array.from({ length: catCount }).map((_, i) => ({
            id: i,
            left: Math.random() * 100, // Random horizontal position %
            delay: Math.random() * 2, // Random delay
            size: 30 + Math.random() * 50 // Random size 30-80px
        }));
        setCats(newCats);
    }, []);

    // Cats falling animation logic relies on the @keyframes fall in global CSS
    // or we can use inline styles for the animation if we prefer.
    // We'll use inline styles for the randomized animation properties.

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            {cats.map((cat) => (
                <div
                    key={cat.id}
                    className="absolute top-[-100px]"
                    style={{
                        left: `${cat.left}%`,
                        width: `${cat.size}px`,
                        animation: `fall ${3 + Math.random()}s linear forwards`,
                        animationDelay: `${cat.delay}s`,
                    }}
                >
                    <img
                        src={logo}
                        alt="Falling Cat"
                        className="w-full h-auto drop-shadow-lg"
                    />
                </div>
            ))}
        </div>
    );
};

export default CatRain;
