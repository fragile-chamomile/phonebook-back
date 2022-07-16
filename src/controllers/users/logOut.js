const { User } = require("../../models/user");

const logOut = async (req, res) => {
	const { _id } = req.user;
	await User.findByIdAndUpdate(_id, { token: null });

	res.status(200).json();
};

module.exports = logOut;
