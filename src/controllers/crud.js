var app = require('./appExpress');
var con = require('./dbconnection');

con.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Connected !!")
    }
})
//code for data create
app.post('/post', (req, res) => {
    const name = req.body.name;
    const id = req.body.id;
    const mark = req.body.mark;
    const query = 'insert into mytableautoINC values(?,?,?)'

    con.query(query, [id, name, mark], (err) => {
        if (err) {
            console.log(err)
        } else {
            res.send("POSTED")
        }
    })
})


// code for filter
app.get("/fetchbyid/:id", (req, res) => {
    const fetchid = req.params.id;
    const query = 'select * from mytableautoINC where id=?'

    con.query(query, fetchid, (err, result) => {
        if (err) {
            if (result.length == 0) {
                res.send("ID does not match")
            }
        } else {
            res.send(result)
        }
    })
})

// code for update
app.put("/update/:id", (req, res) => {
    const fetchid = req.params.id;
    const fetchname = req.body.name;
    const fetchmark = req.body.mark;
    const query = 'insert into mytableautoINC values(?,?,?)'

    con.query('UPDATE mytableautoINC SET name =?, mark =? where id =?', [fetchname, fetchmark, fetchid], (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send("Update Successfully")
        }
    })

})

// code for delete
app.delete("/delete/:id", (req, res) => {
    const fetchid = req.params.id;
    const query = 'Delete from mytableautoINC where id=?'

    con.query(query, fetchid, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send("Succefully deleted")
        }
    })

})
//code for All table data get
app.get("/fetchAllData", (req, res) => {
    const query = 'select * from mytableautoINC'

    con.query(query, req, (err, result) => {
        if (err) {
            res.send("Data not available")
        } else {
            res.send(result)

        }
    })
})

