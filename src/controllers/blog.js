// blog.js
var con = require('./dbconnection');

exports.postBlog = (req, res) => {
    const { id, blogName, blogDetails } = req.body;
    const query = 'INSERT INTO mytableblog (id, blogName, blogDetails) VALUES (?, ?, ?)';

    con.query(query, [id, blogName, blogDetails], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error inserting data');
        }
        res.send('✅ Blog inserted successfully');
    });
};

exports.getBlog = (req, res) => {
    const query = 'SELECT * FROM mytableblog';
    con.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error fetching data");
        } else {
            res.send(result);
        }
    });
};