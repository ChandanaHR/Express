//Ways to handle multiple parameterd
app.get('/things/:name/:id',(req,res)=>{
    const {name,id} = req.params
    res.json({
        name,
        id
    })
})

//regex
app.get('/things/:name/:id', (req, res) => {
    const { name, id } = req.params;

    if (!/^\d{5}$/.test(id)) {
        return res.status(400).json({ error: "ID must be exactly 5 digits" });
    }

    res.json({ name, id });
});

//Catching errors
