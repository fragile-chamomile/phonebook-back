const getCurrent = async (req, res) => {
	const { name, email, avatarURL } = req.user;
	res.json({
		status: "success",
		code: 200,
		data: {
			user: {
				name,
				email,
				avatarURL
			},
		},
	});
};

module.exports = getCurrent;
