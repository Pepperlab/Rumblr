const axios = require('axios');

// custom error creator
const createErr = (errObj) => {
    return ({
        log: `Error occured in ${errObj.middleware} middleware inside searchController`,
        message: `Error occured in ${errObj.middleware} middleware inside searchController. Error info: ${errObj.error}`
    });
};

const getDate = (date, detail) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    if (detail) {
        const seconds = date.getSeconds();
        const minutes = date.getMinutes();
        const hour = date.getHours();
        return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
    } else {
        return `${year}-${month}-${day}`;
    }
};

const responseFormat = (response) => {
    const results = [];
    const data = response.data.features;
    data.forEach(element => {
        const timeOccured = new Date(element.properties.time);

        results.push({
            magnitude: element.properties.mag,
            latitude: element.geometry.coordinates[1],
            longitude: element.geometry.coordinates[0],
            alert: element.properties.alert,
            place: element.properties.place,
            time: getDate(timeOccured, true)
        })
    });
    return results;
};

module.exports = {
    getSearch: async (req, res, next) => {
        const { longitude, latitude } = req.body.location;
        const radius = req.body.location.radius ? req.body.location.radius : 20000;
        const startDay = req.body.time ? req.body.time.startDay : undefined;
        const endDay = req.body.time ? req.body.time.endDay : undefined;
        const upperLimit = req.body.magnitude ? req.body.magnitude.upperLimit : null;
        const lowerLimit = req.body.magnitude ? req.body.magnitude.lowerLimit : 1;

        const query = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${startDay}&endtime=${endDay}&minmagnitude=${lowerLimit}&maxmagnitude=${upperLimit}&latitude=${latitude}&longitude=${longitude}&maxradiuskm=${radius}`;

        axios.get(query)
            .then(response => {
                res.locals.search = responseFormat(response)
                return next();
            })
            .catch(err => {
                console.log(err);
                return next(createErr({ middleware: 'getSearch', error: err }));
            });
    }
}