const Address = require("../models/Address");
const User = require("../models/User");

module.exports = {
  async index(request, response) {
    const { user_id } = request.params;

    const user = await User.findByPk(user_id, {
      include: { association: "addresses" },
    });

    return response.json(user);
  },

  async store(request, response) {
    const { user_id } = request.params;
    const { address, number, postal_code } = request.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return response.status(400).json({ error: "User not found!" });
    }

    const addressData = await Address.create({
      user_id,
      address,
      number,
      postal_code,
    });

    return response.json(addressData);
  },
};
