using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ShoppingListController : ControllerBase
    {
        private readonly IMongoCollection<ShoppingList> _shoppingListsCollection;

        public ShoppingListController(IConfiguration configuration)
        {
            var mongoClient = new MongoClient(configuration.GetSection("DatabaseSettings:ConnectionString").Value);
            var database = mongoClient.GetDatabase(configuration.GetSection("DatabaseSettings:DatabaseName").Value);

            _shoppingListsCollection = database.GetCollection<ShoppingList>(
                configuration.GetSection("DatabaseSettings:Collections:ShoppingLists").Value
            );
        }

        // GET: api/ShoppingList
        [HttpGet]
        public async Task<ActionResult<List<ShoppingList>>> GetAllShoppingLists()
        {
            var lists = await _shoppingListsCollection.Find(list => true).ToListAsync();
            return Ok(lists);
        }

        // GET: api/ShoppingList/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<ShoppingList>> GetShoppingListById(string id)
        {
            var shoppingList = await _shoppingListsCollection.Find(list => list.id == id).FirstOrDefaultAsync();

            if (shoppingList == null)
                return NotFound($"Shopping list with ID {id} not found.");

            return Ok(shoppingList);
        }

        // POST: api/ShoppingList
        [HttpPost]
        public async Task<ActionResult> CreateShoppingList([FromBody] ShoppingList newShoppingList)
        {
            await _shoppingListsCollection.InsertOneAsync(newShoppingList);
            return CreatedAtAction(nameof(GetShoppingListById), new { id = newShoppingList.id }, newShoppingList);
        }

        // POST: api/ShoppingList/{listId}/item
        [HttpPost("{listId}/item")]
        public async Task<ActionResult> AddShoppingItem(string listId, [FromBody] ShoppingItem newItem)
        {
            var shoppingList = await _shoppingListsCollection.Find(list => list.id == listId).FirstOrDefaultAsync();

            if (shoppingList == null)
                return NotFound($"Shopping list with ID {listId} not found.");

            // Generiere eine ID für das neue Item, falls nicht vorhanden
            if (string.IsNullOrEmpty(newItem.Id))
            {
                newItem.Id = Guid.NewGuid().ToString(); // Neue eindeutige ID generieren
            }

            // Setze Default-Werte, falls diese nicht gesetzt wurden
            if (newItem.Quantity == 0)
            {
                newItem.Quantity = 1; // Setze eine Standardmenge, wenn keine angegeben wurde
            }

            if (newItem.IsBought == null)
            {
                newItem.IsBought = false; // Standardwert für 'isBought'
            }

            shoppingList.Items.Add(newItem);
            await _shoppingListsCollection.ReplaceOneAsync(list => list.id == listId, shoppingList);

            return Ok(newItem);
        }


        // PUT: api/ShoppingList/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateShoppingList(string id, [FromBody] ShoppingList updatedShoppingList)
        {
            var result = await _shoppingListsCollection.ReplaceOneAsync(list => list.id == id, updatedShoppingList);

            if (result.MatchedCount == 0)
                return NotFound($"Shopping list with ID {id} not found.");

            return NoContent();
        }

        // DELETE: api/ShoppingList/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteShoppingList(string id)
        {
            var result = await _shoppingListsCollection.DeleteOneAsync(list => list.id == id);

            if (result.DeletedCount == 0)
                return NotFound($"Shopping list with ID {id} not found.");

            return NoContent();
        }
    }
}
