const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Order } = require("../models/models");

const generateJwt = (id, email, role) => {
  return jwt.sign(
    {
      id,
      email,
      role,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "24h",
    }
  );
};

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("Некоректный email или password"));
    }
    const candidate = await User.findOne({
      where: {
        email,
      },
    });
    if (candidate) {
      return next(
        ApiError.badRequest("Пользователь с таким email уже существует")
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      email,
      role,
      password: hashPassword,
    });
    const order = await Order.create({
      userId: user.id,
    });
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({
      token,
    });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      return next(ApiError.internal("Пользователь не найден"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal("Указан неверный пароль"));
    }
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({
      token,
    });
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    return res.json({
      token,
    });
  }

  async getOne(req, res) {
    const { id } = req.params;
    const user = await User.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      return res.json({
        address: "Не найден",
        name: "Не найден",
        num_tel: "отсутсвует",
        surname: "Не найден",
      });
    }
    return res.json(user);
  }

  async getAll(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }

  async createInfo(req, res, next) {
    try {
      let { name, surname, num_tel, address } = req.body;
      const { id } = req.params;
      const [updated] = await User.update(
        { name, surname, num_tel, address },
        { where: { id } }
      );
      if (updated == 0) {
        return res.status(404).send({ error: "User not found" });
      }
      return res.json(updated);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new UserController();
