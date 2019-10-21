exports.up = function(knex) {
  return knex.schema.createTable("products", tbl => {
    tbl.increments("id");
    tbl.string("name", 32).notNullable();
    tbl.integer("price").notNullable();
    tbl.text("description").notNullable();
    tbl.string("image").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("products");
};
