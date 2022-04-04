import { Button, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import useReview from "../../hooks/useReview";
import ReviewCard from "../ReviewCard/ReviewCard";

function Home() {
    const [reviews] = useReview();

    return (
        <Container className="my-5">
            <Row className="gy-4">
                <Col md="6">
                    <h1>MacBook Pro 14-inch</h1>

                    <h6>
                        From $1999or $166.58/mo.per month for 12
                        mo.monthsFootnote*
                    </h6>

                    <ul className="mt-4">
                        <li>
                            New Apple M1 Pro and M1 Max chips deliver incredible
                            performance
                        </li>
                        <li>
                            Up to 17 hours of battery life,footnote¹ thanks to
                            the efficiency of Apple silicon
                        </li>
                        <li>
                            Liquid Retina XDR display features extreme dynamic
                            range and incredible contrast ratio
                        </li>
                        <li>
                            New 1080p FaceTime HD camera, high-fidelity
                            six-speaker sound system, and studio-quality mic
                            array
                        </li>
                        <li>
                            Thunderbolt 4, HDMI, SDXC, and MagSafe 3 for fast
                            and versatile connectivity
                        </li>
                    </ul>

                    <Button size="lg" variant="danger">
                        Live Demo
                    </Button>
                </Col>
                <Col md="6">
                    <img
                        className="img-fluid"
                        src="https://tinyurl.com/2p95nwua"
                        alt=""
                    />
                </Col>
            </Row>

            <h1 className="text-center my-5">
                Customer Reviews({reviews.length})
            </h1>

            <Row className="g-4">
                {reviews.slice(0, 3).map((review) => (
                    <Col key={review.id} lg="4" md="6">
                        <ReviewCard review={review} />
                    </Col>
                ))}
            </Row>
            <div className="text-center my-5">
                <LinkContainer to="reviews">
                    <Button variant="dark" size="lg">
                        See All Reviews
                    </Button>
                </LinkContainer>
            </div>
        </Container>
    );
}

export default Home;
