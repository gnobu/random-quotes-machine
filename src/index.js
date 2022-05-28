import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root'));

const quotes = {
    0: {
        author: "Ray Kroc",
        quote: "I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy."
    },
    1: {
        author: "Simeon Lindstrom",
        quote: "When we have respect for ourselves and others, we gravitate towards connections that encourage that."
    },
    2: {
        author: "Dalai Lama",
        quote: "Anger is the ultimate destroyer of your own peace of mind."
    },
    3: {
        author: "L. R. Ellert",
        quote: "A man should have the aim and the determination to be honest and upright and sincere in all that he undertakes. If he adds persistency to this he can hardly help being successful."
    },
    4: {
        author: "Wayne Gretzky",
        quote: "Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you don't take the shot. "
    },
    5: {
        author: "Michelle Obama",
        quote: "Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered"
    },
    6: {
        author: "Barbara Okun, Ph.D.",
        quote: "The fact is that grief today is a family matter as much a s it is an individual one"
    },
    7: {
        author: "Ralph Bus",
        quote: "Children really brighten up a household. They never turn the lights off. "
    },
    8: {
        author: "Charles Kettering",
        quote: "No one would have crossed the ocean if he could have gotten off the ship in the storm."
    },
    9: {
        author: "Dr. Seuss",
        quote: "Congratulations! today is your day. You're off to Great Places! You're off and away"
    }
}

root.render(
    <App quotes={quotes} />
);

