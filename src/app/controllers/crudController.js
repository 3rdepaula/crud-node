const express = require('express');


const User = require('../models/user');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const users = await User.find();

        return res.send({ users })
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao carregar usuários' });
    }
}) 

router.post('/', async (req, res) => {
    try {
        const users = await User.create(req.body);
        return res.send({ users })
        
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao criar novo usuário' });
    }
})

router.put('/:userId', async (req, res) => {
    try {

        const { name, email } = req.body;

        const users = await User.findByIdAndUpdate(req.params.userId,{ 
            name,
            email
        }, { new: true });
        return res.send({ users });
        
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao atualizar usuário' });
    }
})

router.delete('/:userId', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.userId);
        return res.send();
        
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao deletar usuário' });
    }
})

module.exports = app => app.use('/crud', router)