const user = require('../model/User')

module.exports.login = async (req, res, next) => {
    const { email, senha } = req.body

    if (!email || !senha) {
        return res.status(500).json({ error: 'Nao autorizado' })
    }

    const _user = await user.findOne({ email, senha })

    if (!_user) {
        return res.status(500).json({ error: 'Nao autorizado' })
    }

    return res.status(200).json({ token: _user._id })
}

module.exports.auth = async (req, res, next) => {
    const token = req.headers.authorization
    let _user
    if (!token) {
        return res.status(500).json({ error: 'Nao autorizado' })
    }

    try {
        _user = await user.findById(token)
    } catch (error) {
        return res.status(500).json({ error: 'Nao autorizado' })
    }

    if (!_user) {
        return res.status(500).json({ error: 'Nao autorizado' })
    }

    next()
}