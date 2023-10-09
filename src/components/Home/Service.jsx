import { useEffect, useState } from "react";
import Card from "./Card";

const Service = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div className="my-6">
            <div className="flex justify-center items-center">
                <h2 className="text-3xl font-bold mb-4">Our Service</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3">
                {data?.map(card => <Card key={data.id} data={card}></Card>)}
            </div>
        </div>
    );
};
export default Service;