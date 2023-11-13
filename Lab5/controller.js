const User = require('./User');
const usersData = require('./data').users;


module.exports.login = function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = usersData.find(u => u.email === email);

    if (user) {
        if (user.password === password) {
            res.status(200).json({
                message: 'Success',
                userData: user
            });

        } else {
            res.status(401).json({message: 'Invalid password!'});
        }
    } else {
        res.status(404).json({message: 'User not found!'});
    }
}

module.exports.register = function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const group = req.body.group;
    const phone = req.body.phone;
    const address = req.body.address;

    const user = usersData.find(u => u.email === email);
    if (user) {
        res.status(409).json({message: 'User already exists!'});
    } else {
        const newUser = new User(email, password, name, group, phone, address);
        usersData.push(newUser);
        res.status(201).json({user: newUser, message: 'User created successfully'});
    }

}

module.exports.update = function (req, res) {
    const email = req.params.email;
    const user = usersData.find(u => u.email === email);
    if (user) {
        user.email = req.body.email;
        user.password = req.body.password;
        user.name = req.body.name;
        user.group = req.body.group;
        user.phone =  req.body.phone;
        user.address = req.body.address;
        user.isAdmin = req.body.isAdmin;
        res.status(200).json(user);
    } else {
        res.status(404).json({
            message: 'User not found'
        });
    }
}

module.exports.delete = function (req, res) {
    const email = req.params.email;
    const index = usersData.findIndex(u => u.email === email);
    if (index !== -1) {
        usersData.splice(index, 1);
        res.status(200).json({
            message: 'User deleted'
        });

    } else {
        res.status(404).json({
            message: 'User not found'
        });
    }
}
module.exports.getAll = function (req, res) {
    res.status(200).json(usersData);
}