namespace Backend.Models
{
    public class CreateItemRequest
    {
        public string Name { get; set; }
        public DateTime DueDate { get; set; } 
        public bool IsCompleted { get; set; }
    }

}
