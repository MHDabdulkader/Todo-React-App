function generateRandomID(min=1, max=1000){
    return Math.floor(Math.random() * (max-min+1)+max);
}

export default generateRandomID;