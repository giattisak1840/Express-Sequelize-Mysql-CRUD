import User from "../models/user-model";

export const findAllUsers = async (userreq, res) => {
    const users = await User.findAll();
    res.status(200).json(users);
}

export const insertUser = async (req, res) => {
    const result = await User.create(req.body);
    res.status(201).json(result);
}

export const updateUser = async (req, res) => {
    const result = await User.update(req.body, {
        where: {
            id: req.params.id,
        }
    });
    res.status(200).json(result);
}

export const deleteUser = async (req, res) => {
    const result = await User.destroy({
        where: {
            id: req.params.id,
        }
    });
    res.status(200).json(result);
}