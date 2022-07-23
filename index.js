const express = require("express");
const sequelize = require('./db/connect.js');
const User = require('./app/models/user.model');

sequelize.sync().then(() => {
    console.log("Work");
});

const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {
    await User.create(req.body).then(()=> {
        res.send('user is registered');
    });
})

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.send(users);
});

app.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({where: {id:id}});
    res.send(user);
})

app.put('/users/:id', async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({where: {id:id}});
    user.username = req.body.username;
    await user.save();
    res.send('user is updated');
});

app.delete('/users/:id', async (req, res ) => {
    const id = req.params.id;
    await User.destroy({ where: { id:id } });
    res.send('user is removed');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log (`Server is running on port ${PORT}.`);
});