import { useLoaderData, useParams } from "react-router-dom";


const Showdetails = () => {

    const datas = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const data = datas.find(data => data.id === idInt)

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={data.cover_img} className="w-72 md:w-96 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{data.title}</h1>
                    <p className="py-6">{data.long_description}</p>
                    <p className="font-semibold ml-4">Price: {data.price} $</p>
                    <button className="btn btn-primary mt-3 ml-4">Book Now</button>
                </div>
            </div>
        </div>
    );
};
export default Showdetails;