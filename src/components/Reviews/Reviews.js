import { Col, Container, Row } from "react-bootstrap";
import useReview from "../../hooks/useReview";
import ReviewCard from "../ReviewCard/ReviewCard";

function Reviews() {
    const [reviews] = useReview();
    return (
        <Container className="my-5">
            <h1 className="text-center my-5">Our Customer Reviews</h1>
            <Row className="g-4">
                {reviews.map((review) => (
                    <Col key={review.id} lg="4" md="6">
                        <ReviewCard review={review}></ReviewCard>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Reviews;
