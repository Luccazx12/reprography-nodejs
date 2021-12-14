module.exports = {
  jwt: {
    secret: process.env.JWT_SECRET_KEY,
    header: process.env.HEADER_KEY,
    saltRounds: process.env.SALT_ROUNDS
  },
  adminAccount: {
    email: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASS,
    defaultImage: "src/uploads/user-img/default/usuario.png"
  }
}