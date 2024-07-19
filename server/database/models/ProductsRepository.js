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
        `INSERT INTO ${this.table} (name, details, materials, dimensions, price, picture, path) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          product.name,
          product.details,
          product.materials,
          product.dimensions,
          product.price,
          product.picture,
          product.path,
        ]
      );
      // Return the ID of the newly inserted item
      return result.insertId;
    } catch (err) {
      console.error("Error in create function:", err); // Added log
      throw err;
    }
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `SELECT id, name, details, materials, dimensions, price, picture, path FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "product" table
    const [rows] = await this.database.query(
      `SELECT id, name, details, materials, dimensions, price, picture, path FROM ${this.table}`
    );

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  async update(product) {
    if (product.picture) {
      const [result] = await this.database.query(
        `UPDATE ${this.table} SET name = ?, details = ?, materials = ?, dimensions = ?, price = ?, picture = ? WHERE id = ?`,
        [
          product.name,
          product.details,
          product.materials,
          product.dimensions,
          product.price,
          product.picture,
          product.id,
        ]
      );
      return result.affectedRows;
    } else {
      const [result] = await this.database.query(
        `UPDATE ${this.table} SET name = ?, details = ?, materials = ?, dimensions = ?, price = ? WHERE id = ?`,
        [
          product.name,
          product.details,
          product.materials,
          product.dimensions,
          product.price,
          product.id,
        ]
      );
      return result.affectedRows;
    }
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  async delete(id) {
    try {
      const [result] = await this.database.query(
        `DELETE FROM ${this.table} WHERE id = ?`,
        [id]
      );
      return result.affectedRows;
    } catch (err) {
      throw err;
    }
  }

  // async delete(id) {
  //   ...
  // }
}

module.exports = ProductsRepository;
