import React from 'react';

const Welcome = () => {
    return (
        <div className="Welcome">
            <h1>🏙️ Welcome to City Builder 1.0</h1>
            <p>Emulate your own society! In this app, you can populate your digital city with unique citizens and their furry companions.</p>
            <div className="features-box">
                <h3>Current Capabilities:</h3>
                <ul>
                    <li>🚶 Create diverse human avatars (Men, Women, Children).</li>
                    <li>🐾 Add pets to keep your citizens happy.</li>
                    <li>🎂 Track the demographics of your city's aging population.</li>
                </ul>
            </div>
        </div>
    );
}

export default Welcome;