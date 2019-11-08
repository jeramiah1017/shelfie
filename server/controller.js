module.exports = {
     getInventory: (request, response) => {
    const db = request.app.get('db'); 
    db.get_inventory()
        .then(product => {
            response.status(200).send(product)
        });
 },

     getProduct: (request, response) => {
     const db = request.app.get('db'); 
     const { id } = request.params; 
     db.get_product([id])
        .then(product => {
            response.status(200).send(product)
        })
 },

  createProduct: (request, response) => {
     const db = request.app.get('db');
     const { name, price, img } = request.body; 
     db.create_inventory([name, price, img])
        .then(() => {
            response.status(200).send('Product has been created')
     })
 },

  updateProduct: (request, response ) => {
      console.log(request.body)
    const db = request.app.get('db'); 
    const { id } = request.params; 
    const { name, price, img:img_url } = request.body; 
    db.update_inventory([name, price, img_url, id])
        .then(() => {
            response.status(200).send(`Product ${id} has been updated`)
        })
 },

  deleteProduct: (request, response) => {
     const db = request.app.get('db');
     const { id } = request.params; 
     db.delete_inventory([id])
        .then(() =>{
            response.status(200).send(`Product ID: ${id} was deleted`)
        })
        .catch(error => console.log('deleteProduct:', error))
 }
}

