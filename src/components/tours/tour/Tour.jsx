
import {Link} from 'react-router-dom';


function Tour({tour}) {
    return (
        <>
            <Link to={"/city/"+ tour.id}>
                <h1>{tour.name}</h1>
                <img style={{ width: "300px" }} src={tour.image} alt="" />
                <hr />
            </Link>
        
        </>
    )
}

export default Tour;