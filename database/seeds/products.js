exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("products").insert([
        {
          id: 1,
          name: "testBag",
          price: 50,
          description: "Issa bag.",
          image: "dummyImage"
        },
        {
          id: 2,
          name: "testWallet",
          price: 20,
          description: "Holds money.",
          image: "dummyImage"
        },
        {
          id: 3,
          name: "testCardHolder",
          price: 10,
          description: "Holds cards.",
          image: "dummyImage"
        }
      ]);
    });
};
