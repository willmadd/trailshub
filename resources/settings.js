

export default {
    feBaseUrl:'localhost',
    beBaseUrl:process.env.NODE_ENV==="development"?"http://localhost:8000":"https://www.trailshub.com",
    timeFormat: { day: 'numeric' , month: 'short',  year: 'numeric' },
    MetersToFt: 3.28084,
    ftToMiles: 0.000189394,
}