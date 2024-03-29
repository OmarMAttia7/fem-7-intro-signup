import React from "react";
import ReactDOM from "react-dom";
import IntroSection from "./components/intro-section";
import FormSection from "./components/form-section";
import "./index.css";
function App() {
    return <>

        <main className="text-white py-10 px-[8vw] lg:px-[10vw]
        md:grid md:grid-cols-2 md:min-h-screen md:gap-5">
            <IntroSection />
            <FormSection />
        </main>

        <footer>
            <p class="text-white text-center font-medium">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-darkblue underline">Frontend Mentor</a>.
                Coded by <a href="https://www.frontendmentor.io/profile/hazel79" className="text-darkblue underline">Omar M.</a>.
            </p>
        </footer>

        </>
}

document.body.classList.add('font-main', 'bg-mobile', 'md:bg-desktop')

ReactDOM.render(<App />,document.getElementById("root"))