function Tours(props){
    console.log(props);
    return (
        <>
        {
            props.tours.map( tour => {
                return(
                    <div>
                        <h1>{tour.name}</h1>
                        <img src={tour.image} alt="" />
                        <hr />
                    </div>
                )
            })
        }
        
        </>
    )
}

export default Tours;