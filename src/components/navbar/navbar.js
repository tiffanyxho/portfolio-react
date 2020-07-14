import React from 'react';

const navElements = [
    {
        name: 'Resume',
        url: '',
    },
    {
        name: 'GitHub',
        url: 'github.com/tiffanyxho'
    },
    {
        name: 'LinkedIn',
        url: '',
    },
    {
        name: 'Contact',
        url: '',
    }
];

function Navbar() {
    return (
        <div>
            <ul>
                <li>Resume</li>
                <li>GitHub</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default Navbar;