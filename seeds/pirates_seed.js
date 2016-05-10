
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('pirates').del(),

    // Inserts seed entries
    knex('pirates').insert({name: 'John Blackbeard', poison: 'Rum', accessory: 'Black Beard'}),
    knex('pirates').insert({name: 'Davie Crockett', poison: 'Tequila', accessory: 'Crock Pot'}),
    knex('pirates').insert({name: 'Captain Longsword', poison: 'Orange Juice', accessory: 'Long Sword'})
  );
};
