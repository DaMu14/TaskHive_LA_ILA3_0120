using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Backend.Models
{
    public class Item
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)] // MongoDB generiert automatisch eine ObjectId
        public string? Id { get; set; } // Nullable machen, um Validierungsprobleme zu vermeiden

        [BsonElement("name")] public string Name { get; set; }

        [BsonElement("dueDate")] public DateOnly DueDate { get; set; }

        [BsonElement("isCompleted")] public bool IsCompleted { get; set; }

        [BsonElement("userId")] // Benutzer-ID für die Zuordnung
        [BsonRepresentation(BsonType.ObjectId)] // Referenz auf die ObjectId eines Benutzers
        public string UserId { get; set; }
    }
}