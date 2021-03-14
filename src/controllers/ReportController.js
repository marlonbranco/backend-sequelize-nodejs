const { Op } = require("sequelize");
const User = require("../models/User");

module.exports = {
  async show(request, response) {
    const users = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.iLike]: "%@example.com",
        },
      },
      include: [
        {
          association: "addresses",
          where: { address: "Some Address" },
        },
        {
          association: "techs",
          required: false,
          where: {
            name: {
              [Op.iLike]: "React%",
            },
          },
        },
      ],
    });
    return response.json(users);
  },
};
