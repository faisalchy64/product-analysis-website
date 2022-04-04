import { Container } from "react-bootstrap";

function Blogs() {
    return (
        <Container className="my-5">
            <h1>What is Context API?</h1>
            <p>
                In React App data is passed parent component to child component
                via props. But with a multilevel parent-child component, the
                process of passing data becomes difficult. React gives us a
                special way to avoid this problem which is called Context API.
                With Context API we can share values between components without
                having to explicitly pass a prop through every level. First we
                need to create a context in a parent component, than we can use
                this context where we want to use.
            </p>

            <h1>What is Semantic Tag?</h1>
            <p>
                Semantic means which is relating to meaning in language or
                logic. Semantic simply put means a logic that has an actual
                meaning hence comes the name: Semantic HTML, an HTML which is a
                logic and also has a meaning. In HTML there is some semantic
                tags. This practice is good for Search Engine Optimization
                (SEO). It is also good for accessibility, especially for
                visually impaired people who rely on browser speech, screen
                readers to interpret page content clearly. To write semantic
                HTML, avoid using div tags everywhere, instead use elements like
                header, nav, section, article, aside, footer.
            </p>
        </Container>
    );
}

export default Blogs;
