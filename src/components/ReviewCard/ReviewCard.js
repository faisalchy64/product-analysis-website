import { Card } from "react-bootstrap";

function ReviewCard({ review }) {
    const { name, reviews, rating } = review;
    return (
        <Card className="shadow-lg h-100">
            <Card.Body>
                <Card.Title className="text-danger">{name}</Card.Title>
                <Card.Text>{reviews.slice(0, 200)}...</Card.Text>
                <Card.Footer>Rating: {rating}</Card.Footer>
            </Card.Body>
        </Card>
    );
}

export default ReviewCard;
