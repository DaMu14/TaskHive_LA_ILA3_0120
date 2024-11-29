using Backend.Models;
using MongoDB.Driver;

namespace Backend.Repositories
{
    public class UserRepository
    {
        private readonly IMongoCollection<User> _usersCollection;

        public UserRepository(IConfiguration configuration)
        {
            // Verbindung zur MongoDB herstellen
            var mongoClient = new MongoClient(configuration.GetSection("DatabaseSettings:ConnectionString").Value);
            var database = mongoClient.GetDatabase(configuration.GetSection("DatabaseSettings:DatabaseName").Value);

            // Users-Collection aus der Konfiguration laden
            _usersCollection = database.GetCollection<User>(
                configuration.GetSection("DatabaseSettings:Collections:Users").Value
            );
        }

        public async Task CreateUserAsync(User user)
        {
            await _usersCollection.InsertOneAsync(user);
        }

        public async Task<User?> GetUserByUsernameAsync(string username)
        {
            return await _usersCollection.Find(u => u.Username == username).FirstOrDefaultAsync();
        }
    }
}
