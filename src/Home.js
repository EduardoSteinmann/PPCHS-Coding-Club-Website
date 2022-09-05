import { Link } from "react-router-dom";
//import skillissue from './SkillIssue.gif';
export function Home   () {
    return (
        <>
            <main>
                <p> PPCHS Coding Club website home </p>
            </main>
            <nav>
                <Link to="/PicturePage">Page with a svg picture</Link>
            </nav>
        </>
    );
}

export default Home;