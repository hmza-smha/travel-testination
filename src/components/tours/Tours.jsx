
import "./Tours.css"
import Tour from "../tours/tour/Tour.jsx";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";

function Tours(props){
    // console.log(props);
    return (
        <>
        <Header />
        {
            props.tours.map( (tour) => {
                return(
                    <div className="container" key={tour.id}>
                        <Tour tour={tour}/>
                    </div>
                )
            })
        }
        <Footer />
        </>
    )
}

export default Tours;