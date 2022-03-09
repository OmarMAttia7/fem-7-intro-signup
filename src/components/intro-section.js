import React from "react";

class IntroSection extends React.Component {

    render() {
        return (
            <div className="text-center py-10 mt-10
            md:flex md:justify-center md:flex-col md:text-left">
                <h1
                    className="text-2xl font-bold mb-5 md:text-4xl lg:text-5xl">
                    Learn to code by watching others
                </h1>

                <p className="md:text-lg">
                    See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
                    but understanding how developers think is invaluable.
                </p>
            </div>
        )
    }
}

export default IntroSection;