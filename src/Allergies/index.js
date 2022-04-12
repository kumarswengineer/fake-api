const sample = require("./mocks/sample.json")

// it follows express js pattern please refer express js for more info
module.exports = (app, apiRoot) => {

    app.get(apiRoot + "GetAllergies", (req, resp) => {
        const { originalUrl } = req;
        console.log(originalUrl);
        // resp.status(500).send();
        // resp.setHeader();
        // resp.write();
        resp.json(sample);
        // resp.end();
    });

    app.post(apiRoot + "SaveAllergies", (req, resp) => {
        const { originalUrl } = req;
        console.log(originalUrl);
        resp.status(500).send();
        // resp.setHeader();
        // resp.write();
        // resp.json({ custom: 'response' });
        // resp.end();
    });



};
