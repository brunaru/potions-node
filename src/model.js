import { Sequelize, Model, DataTypes } from "sequelize";

const PGHOST = process.env['PGHOST']
const PGUSER = process.env['PGUSER']
const PGDATABASE = process.env['PGDATABASE']
const PGPASSWORD = process.env['PGPASSWORD']

const database = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  dialect: "postgres",
  host: PGHOST,
  port: 5432,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
});

class Potion extends Model {}
  Potion.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
  },
  { sequelize: database, timestamps: false },
);

export default Potion
