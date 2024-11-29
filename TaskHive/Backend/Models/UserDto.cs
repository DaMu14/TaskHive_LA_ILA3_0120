using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class UserDto
    {
        [Required]
        public string Username { get; set; } = string.Empty;

        [Required]
        [MinLength(5, ErrorMessage = "Das Passwort muss mindestens 5 Zeichen lang sein.")]
        public string Password { get; set; } = string.Empty;
    }
}
