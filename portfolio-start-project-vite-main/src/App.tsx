import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Mail} from "./layout/sections/mail/Mail.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Projects />
            <Mail />
            <Footer />
        </div>
    )
}

export default App
