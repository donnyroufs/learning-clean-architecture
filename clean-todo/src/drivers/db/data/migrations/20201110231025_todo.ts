import * as Knex from "knex"

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("Todo", (table) => {
    table.increments().notNullable()
    table.string("title")
    table.boolean("isCompleted").defaultTo(false)
    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("Todo")
}
