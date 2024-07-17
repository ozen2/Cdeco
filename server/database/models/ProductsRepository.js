const AbstractRepository = require("./AbstractRepository");

class ProductsRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "product" as configuration
    super({ table: "product" });
  }

  // The C of CRUD - Create operation

  async create(product) {
    try {
      // Execute the SQL INSERT query to add a new item to the "product" table
      const [result] = await this.database.query(
        `INSERT INTO ${this.table} (name, details, materials, dimensions, price, picture) VALUES (?, ?, ?, ?, ?, ?)`,
        [product.name, product.details, product.materials, product.dimensions, product.price, product.picture]
      );
      // Return the ID of the newly inserted item
      return result.insertId;
    } catch (err) {
      // Log any errors

      throw err;
    }
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `SELECT name, details, materials, dimensions, price, picture FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "product" table
    const [rows] = await this.database.query(
      `SELECT name, details, materials, dimensions, price, picture FROM ${this.table}`
    );

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = ProductsRepository;