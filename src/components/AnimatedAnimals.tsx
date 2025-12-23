import { Fish } from 'lucide-react';

export const SwimmingFish = () => {
    return (
        <>
            {/* First Fish - Wavy path across the top third */}
            <div className="fixed top-1/4 left-0 w-full pointer-events-none z-0 overflow-hidden">
                <div className="animate-swim inline-block">
                    <Fish className="text-[#73A6A2] w-12 h-12 opacity-30" />
                </div>
            </div>

            {/* Second Fish - Wavy reverse path across the bottom third */}
            <div className="fixed top-2/3 left-0 w-full pointer-events-none z-0 overflow-hidden">
                <div className="animate-swim-reverse inline-block">
                    <Fish className="text-[#865832] w-10 h-10 opacity-20" />
                </div>
            </div>
        </>
    );
};
