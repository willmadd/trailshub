export default (seconds) =>{
    console.log(seconds)
    return new Date(seconds * 1000).toISOString().substr(11, 8).split(":").map(time=>Number(time));
}