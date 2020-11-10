import knex from "knex"
import knexfile from "./knexfile"

// use a proper node_env here.
const env = "development"
const configOptions = knexfile[env]

export default knex(configOptions)
