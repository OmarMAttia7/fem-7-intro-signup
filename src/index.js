import React from "react";
import ReactDOM from "react-dom";
import IntroSection from "./components/intro-section";
import FormSection from "./components/form-section";
import "./index.css";
function App() {
    return <>

        <main className="font-main text-white px-[8vw]">
            <IntroSection />
            <FormSection />
        </main>

        </>
}

document.body.classList.add('bg-mobile')
/*
<footer>
<p class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
    Coded by <a href="#">Your Name Here</a>.
</p>
</footer>
 */
ReactDOM.render(<App />,document.getElementById("root"))