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
        <div className="">
            <div className="flex justify-center items-center">
                <h2 className="text-2xl font-bold">Our Service</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {data?.map(card => <Card key={data.id} data={card}></Card>)}
            </div>
        </div>
    );
};
export default Service;