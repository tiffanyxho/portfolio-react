import React from 'react';

function Base()
{
    return (
        <div>
            
                TEST BODY HTML OF BASE.HTML
            {/* // <!-- Load React. -->
            // <!-- Note: when deploying, replace "development.js" with "production.min.js". --> */}
            <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
            <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

            {/* // <!-- Load our React component. --> */}
            <script src="like_button.js"></script>
        </div>
    );
}

export default Base;