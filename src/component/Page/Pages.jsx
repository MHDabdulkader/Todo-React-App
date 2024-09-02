function Pages(props){

    let imageUrl = props.imageUrl;
    let locationName =  props.locationName;
    let describtion = props.describtion;
    let durationDate = props.durationDate;
    console.log(props);
    return(
        <div className="font-mono">
        <img className="w-80 h-80 rounded-lg " src={imageUrl} alt="" />
        <h1 className="font-semibold">{locationName}</h1>
        <h2 className="text-gray-500">{describtion}</h2>
        <h3 className="text-gray-500">{durationDate}</h3>
        </div>
    )
}

export default Pages;