//user.js
var con = require('./dbconnection');

exports.postUserDetails = (req, res) => {
    const { Name, Address, Qualification, Blog_Name, Blog_Details, Mobile_No } = req.body;

    const query = 'INSERT INTO userDetails (Name, Address, Qualification, Blog_Name, Blog_Details, Mobile_No) VALUES (?,?,?,?,?,?)';

    con.query(query, [Name, Address, Qualification, Blog_Name, Blog_Details, Mobile_No], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error in insertion");
        } else {
            res.send("POSTED");
        }
    });
};

exports.getUserDetails = (req, res) => {
    const query = 'SELECT * FROM userDetails';
    con.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error fetching data");
        } else {
            res.send(result);
        }
    });
};


// code for update
exports.updateUserDetails = (req, res) => {
    const { Name, Address, Qualification, Blog_Name, Blog_Details, Mobile_No } = req.body;
    const id = req.params.id;  // <-- get id from URL

    if (!id) {
        return res.status(400).send("User ID is required for update");
    }

    const query = `
        UPDATE userDetails
        SET Name = ?, Address = ?, Qualification = ?, Blog_Name = ?, Blog_Details = ?, Mobile_No = ?
        WHERE id = ?
    `;

    con.query(query, [Name, Address, Qualification, Blog_Name, Blog_Details, Mobile_No, id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error updating user");
        }
        if (result.affectedRows === 0) {
            return res.status(404).send("User not found");
        }
        res.send("✅ User updated successfully");
    });
};

// Delete user by ID
// controllers/user.js
exports.deleteUser = (req, res) => {
    const id = req.params.id;
    const query = "DELETE FROM userDetails WHERE id = ?";
    con.query(query, [id], (err, result) => {
        if (err) return res.status(500).send("Error deleting user");
        if (result.affectedRows === 0) return res.status(404).send("User not found");
        res.send("✅ User deleted successfully");
    });
};
