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
        let startDay, endDay, upperLimit, lowerLimit;
        const today = new Date();
        const lastWeek = new Date(today.getTime() - 604800000);
        const { longitude, latitude } = req.body.location;
        const radius = req.body.location.radius ? req.body.location.radius : 20000;

        // set min and max magnitude to 1 and 10 if not provided
        if (req.body.magnitude) {
            upperLimit = req.body.magnitude.upperLimit ? req.body.magnitude.upperLimit : 10;
            lowerLimit = req.body.magnitude.lowerLimit ? req.body.magnitude.lowerLimit : 1;
        }
        if (!upperLimit || !lowerLimit) {
            upperLimit = 10;
            lowerLimit = 1;
        }

        let query = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minmagnitude=${lowerLimit}&maxmagnitude=${upperLimit}&latitude=${latitude}&longitude=${longitude}&maxradiuskm=${radius}`;

        // add start and end time if not provided
        if (req.body.time) {
            if (req.body.time.startDay && req.body.time.endDay) {
                startDay = req.body.time.startDay;
                endDay = req.body.time.endDay;
            }
        }
        if (!startDay || !endDay) {
            endDay = getDate(today);
            startDay = getDate(lastWeek);
        }
        query += `&starttime=${startDay}&endtime=${endDay}`;


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