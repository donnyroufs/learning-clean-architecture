export class Todo {
  constructor(
    public id: number,
    public title: string,
    public isCompleted: boolean,
    public created_at: Date,
    public updated_at: Date
  ) {
    if (title.length < 6) {
      throw new Error("Title is too short.")
    }

    if (title.length > 256) {
      throw new Error("Title is too long")
    }
  }
}

/* 
* What's the relation between the raw entity and a database model?
* What kind of methods could an entity have?
* Do we care about database fields like created_at and updated_at or is this an usecase for Data Transfer Objects(DTOs)?
*/
