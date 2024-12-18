import { Sequelize } from "sequelize";

const db = new Sequelize({
  host: "sql303.infinityfree.com",
  username: "if0_37942428",
  password: "vLYsIWfrbzAtGx6",
  database: "if0_37942428_WP_BE",
  dialect: "mysql",
  logging: false,
});

const connectDatabase = async () => {
  try {
    await db.authenticate();
    console.log("Database connected...");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export { db, connectDatabase };