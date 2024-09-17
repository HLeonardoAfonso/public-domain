import Image from "next/image";
import Link from "next/link";

const ListingCard = ({ data }) => {
    return (
        <div className='flex flex-wrap gap-5'>
            <div>
            {/* embla carousel
            {listing.image}x 3? */}
            </div>
            <div>
                <div>
                    <h1>{listing.price}</h1>
                    <h2>{listing.eurosqrm}</h2>
                    bookmark icon
                </div>
                <p>{listing.title}</p>
                <p>{listing.location}</p>
                <h2>{listing.sqrm}</h2>
                <div>
                    {agente.icon}
                    <div>
                        <p>{agente.name}</p>
                        <p>{agente.type}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingCard