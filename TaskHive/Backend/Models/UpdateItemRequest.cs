using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class UpdateItemRequest
    {
        public string Name { get; set; }

        public DateTime? DueDate { get; set; }

        public bool? IsCompleted { get; set; } 
    }

}
