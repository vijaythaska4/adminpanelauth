
export default {
    authenticateHeader: async(req, res, next) => {
        const secretKey = req.headers.secret_key;
        const publishKey = req.headers.publish_key;
        if (secretKey == process.env.SECRET_KEY && publishKey == process.env.PUBLISH_KEY) {
            next();
        } else {
            return res.status(401).json({ message: 'Key not matched!' });
        }
    },
}