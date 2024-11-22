using MongoDB.Bson;
using MongoDB.Driver;
using Backend.Models;
using Microsoft.Extensions.Options;

namespace Backend.Services
{
    public class MongoDbService
    {
        private readonly IMongoCollection<Item> _itemsCollection;

        public MongoDbService(IOptions<DatabaseSettings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            var database = client.GetDatabase(settings.Value.DatabaseName);
            _itemsCollection = database.GetCollection<Item>(settings.Value.CollectionName);
        }

        // Alle Items abrufen
        public async Task<List<Item>> GetAllAsync()
        {
            return await _itemsCollection.Find(_ => true).ToListAsync();
        }

        // Ein einzelnes Item anhand der ID abrufen
        public async Task<Item> GetAsync(string id)
        {
            return await _itemsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        }

        // Ein neues Item erstellen
        public async Task CreateAsync(Item newItem)
        {
            await _itemsCollection.InsertOneAsync(newItem);
        }

        public async Task UpdateAsync(string id, Item updatedItem)
        {
            if (!ObjectId.TryParse(id, out var objectId))
            {
                throw new FormatException("Die angegebene ID ist kein gültiges ObjectId.");
            }

            await _itemsCollection.ReplaceOneAsync(item => item.Id == id, updatedItem);
        }

        public async Task DeleteAsync(string id)
        {
            if (!ObjectId.TryParse(id, out var objectId))
            {
                throw new FormatException("Die angegebene ID ist kein gültiges ObjectId.");
            }

            await _itemsCollection.DeleteOneAsync(item => item.Id == id);
        }
    }
}