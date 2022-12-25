import { mysqlconnFn } from "../../../lib/db/mysql";

export async function GET() {
  let mysqlconn = await mysqlconnFn();

  let user = await mysqlconn
    .query("SELECT * FROM user")
    .then(function ([rows, fields]) {
      return rows;
    });

  let menu = await mysqlconn
    .query("SELECT * FROM menu")
    .then(function ([rows, fields]) {
      return rows;
    });

  let bar_card = await mysqlconn
    .query("SELECT * FROM bar_card")
    .then(function ([rows, fields]) {
      return rows;
    });

  let booking = await mysqlconn
    .query("SELECT * FROM booking")
    .then(function ([rows, fields]) {
      return rows;
    });

  let order = await mysqlconn
    .query("SELECT * FROM `order`")
    .then(function ([rows, fields]) {
      return rows;
    });

  return new Response(
    JSON.stringify({
      user,
      menu,
      bar_card,
      booking,
      order,
    })
  );
}
