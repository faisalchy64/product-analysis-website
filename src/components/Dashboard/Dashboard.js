import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <Container className="my-5">
            <ResponsiveContainer width="95%">
                <Row className="g-4">
                    <Col lg="6">
                        <LineChart width={400} height={400} data={data}>
                            <Line type="monotone" dataKey="Sell"></Line>
                            <CartesianGrid></CartesianGrid>
                            <XAxis dataKey="Month"></XAxis>
                            <YAxis dataKey="Sell"></YAxis>
                            <Tooltip></Tooltip>
                        </LineChart>
                    </Col>
                    <Col lg="6">
                        <BarChart width={400} height={400} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="Month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Investment" fill="#8884d8" />
                            <Bar dataKey="Revenue" fill="#82ca9d" />
                        </BarChart>
                    </Col>
                </Row>
            </ResponsiveContainer>
        </Container>
    );
}

export default Dashboard;
