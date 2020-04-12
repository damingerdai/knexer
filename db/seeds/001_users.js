'use strict'

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'damingerdai',
          age: 20,
          marriage: false,
          create_at: new Date(),
          update_at: new Date()
        }
      ]);
    });
};
