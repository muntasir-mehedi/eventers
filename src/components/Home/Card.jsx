import { Link } from "react-router-dom";


const Card = ({data}) =>{
    const {id, cover_img, title, short_description, price} = data;
    return (
        <div className="my-2">
        <div className="card card-compact w-80 md:w-96 h-96 bg-base-100 shadow-xl">
            <figure><img src={cover_img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{short_description}</p>
                <p>Price: {price} $</p>
                <div className="card-actions justify-end">
                    <Link to={`/showdetails/${id}`}><button className="btn btn-primary">Service details</button></Link>
                </div>
            </div>
        </div>

    </div>
    );
};
export default Card;
