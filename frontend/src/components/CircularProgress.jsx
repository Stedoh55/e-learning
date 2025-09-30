import { useState, useEffect } from "react";

function CircularProgress({percentage, showBlink=true, symbol=''}) {
    const [visible, setVisible] = useState(true);
    const [displayValue, setDisplayValue] = useState(0);

    const size = 160
    const radius = 60
    const strokeWidth = 10
    const duration = 1500

    const circumference = 2 * Math.PI * radius
    const center = size / 2

    // Blinking Effect
    useEffect(() => {
        if (!showBlink) return;
        const interval = setInterval(() => {
            setVisible((prev) => !prev);
        }, 300);
        return () => clearInterval(interval);
    }, [showBlink]);

    // Count-Up Animation
    useEffect(() => {
        let start = 0;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = percentage / steps;

        const counter = setInterval(() => {
            start += increment;
            if (start >= percentage) {
                start = percentage;
                clearInterval(counter)
            }
            setDisplayValue(Math.floor(start));
        }, stepTime);
        return () => clearInterval(counter);
    }, [percentage, duration])

    // Changing Text Color with the percentage scores
    function getColor(percentage) {
        if (percentage < 50) return "red";
        if (percentage < 80) return "yellow";
        return "#1cdf1c";
    }

    const textColor = getColor(displayValue);
    const progress = (displayValue / 100) * circumference
    const offset = circumference - progress

    return (
        <div className="CircularProgress">
            <svg viewBox="0 0 160 160" width={size} height={size}>
                <circle r={radius} cx={center} cy={center} fill="transparent" strokeWidth={strokeWidth} stroke="#e0e0e0"></circle>
                <circle r={radius} cx={center} cy={center} fill="transparent" strokeWidth={strokeWidth} stroke={textColor} transform="rotate(-90 80 80)" strokeDasharray={circumference} strokeDashoffset={offset} ></circle>
                {(!showBlink || visible) && (
                    <text x={center} y={center} fill={textColor} fontSize={radius * 0.7} textAnchor="middle" dominantBaseline="middle" fontWeight="bold">{displayValue}{symbol}</text>
                )}
            </svg>
        </div>
    )
};

export default CircularProgress;
