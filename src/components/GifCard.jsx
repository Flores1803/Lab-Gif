const GifCard = ({ title, url }) => {
    return (
        <div className="card">
            <img height={"300px"} 
            width={"300px"}
            src={url} 
            alt={title} 
            style={{objectFit: "cover"}}
            />
        <p>{title}</p>
        </div>
    )
}

export default GifCard
