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
    // get daily global earthquakes records
    getDaily: async (req, res, next) => {
        const today = new Date();
        const query = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${getDate(today)}&minmagnitude=2`;

        axios.get(query)
            .then(response => {
                res.locals.daily = responseFormat(response);
                return next();
            })
            .catch(err => {
                console.log(err);
                return next(createErr({ middleware: 'getDaily', error: err }));
            });
    },
    // 1 week ms = 604800000
    // 1 month ms = 2592000000
    // 1 year ms = 31556952000

    // get weekly global earthquakes records
    getWeekly: async (req, res, next) => {
        const today = new Date();
        const lastWeek = new Date(today.getTime() - 604800000);
        const query = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${getDate(lastWeek)}&endtime=${getDate(today)}&minmagnitude=2`;

        axios.get(query)
            .then(response => {
                res.locals.weekly = responseFormat(response);
                return next();
            })
            .catch(err => {
                console.log(err);
                return next(createErr({ middleware: 'getWeekly', error: err }));
            });
    },

    // get monthly global earthquakes records
    getMonthly: async (req, res, next) => {
        const today = new Date();
        const lastMonth = new Date(today.getTime() - 2592000000);
        const query = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${getDate(lastMonth)}&endtime=${getDate(today)}&minmagnitude=5`;

        axios.get(query)
            .then(response => {
                res.locals.monthly = responseFormat(response);
                return next();
            })
            .catch(err => {
                console.log(err);
                return next(createErr({ middleware: 'getMonthly', error: err }));
            });
    },

    // get yaerly global earthquakes records
    getYearly: async (req, res, next) => {
        const today = new Date();
        const lastYear = new Date(today.getTime() - 31556952000);
        const query = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${getDate(lastYear)}&endtime=${getDate(today)}&minmagnitude=5`;

        axios.get(query)
            .then(response => {
                res.locals.yearly = responseFormat(response)
                return next();
            })
            .catch(err => {
                console.log(err);
                return next(createErr({ middleware: 'getYearly', error: err }));
            });
    },

};