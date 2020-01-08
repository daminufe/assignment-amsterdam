const express = require('express');
const cors = require('cors');

const {flights} = require('./flights');

const app = express();

app.get('/flights.json', cors(), (req, res) => {
    let {search} = req.query;
    search = decodeURI(search).toLowerCase();

    if (!search || search.length < 3) {
        return res.json(flights);
    }

    const results = flights.filter(flight => {
        const { flightNumber, airport } = flight;

        if (flightNumber.toLowerCase().includes(search) || airport.toLowerCase().includes(search)) {
            return flight;
        }
    });

    res.json(results);
});

// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('Mock API serving on port 3000!\n');
});
