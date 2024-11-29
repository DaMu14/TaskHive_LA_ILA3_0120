using MongoDB.Bson;
using MongoDB.Driver;
using Backend.Models;

namespace Backend.Services
{
    public class MongoDbService
    {
        private readonly IMongoCollection<Item> _itemsCollection;

        public MongoDbService(IConfiguration configuration)
        {
            // Verbindung zur MongoDB herstellen
            var client = new MongoClient(configuration.GetSection("DatabaseSettings:ConnectionString").Value);
            var database = client.GetDatabase(configuration.GetSection("DatabaseSettings:DatabaseName").Value);

            // Tasks-Collection aus der Konfiguration laden
            _itemsCollection = database.GetCollection<Item>(
                configuration.GetSection("DatabaseSettings:Collections:Tasks").Value
            );
        }

        public async Task<List<Item>> GetAllAsync()
        {
            return await _itemsCollection.Find(_ => true).ToListAsync();
        }

        public async Task<Item> GetAsync(string id)
        {
            return await _itemsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        }

        public async Task CreateAsync(Item newItem)
        {
            await _itemsCollection.InsertOneAsync(newItem);
        }

        public async Task UpdateAsync(string id, Item updatedItem)
        {
            await _itemsCollection.ReplaceOneAsync(item => item.Id == id, updatedItem);
        }

        public async Task DeleteAsync(string id)
        {
            await _itemsCollection.DeleteOneAsync(item => item.Id == id);
        }
    }
}
    