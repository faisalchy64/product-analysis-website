import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
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
            <ResponsiveContainer width="95%" height={400}>
                <LineChart width={500} height={400} data={data}>
                    <Line type="monotone" dataKey="Sell"></Line>
                    <CartesianGrid></CartesianGrid>
                    <XAxis dataKey="Month"></XAxis>
                    <YAxis dataKey="Sell"></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </ResponsiveContainer>
            <ResponsiveContainer className="mt-5" width="95%" height={400}>
                <BarChart width={500} height={400} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Investment" fill="#8884d8" />
                    <Bar dataKey="Revenue" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </Container>
    );
}

export default Dashboard;
