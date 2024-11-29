using Backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using Backend.Models;

namespace Backend.Controllers
{
    
        [ApiController]
        [Route("api/[controller]")]
        public class UsersController : ControllerBase
        {
            private readonly UserRepository _userRepository;

            public UsersController(UserRepository userRepository)
            {
                _userRepository = userRepository;
            }

            // Benutzer löschen anhand der ID
            [HttpDelete("id/{userId}")]
            public async Task<IActionResult> DeleteUserById(string userId)
            {
                var success = await _userRepository.DeleteUserByIdAsync(userId);
                if (!success)
                    return NotFound(new { Message = "Benutzer mit der angegebenen ID wurde nicht gefunden." });

                return Ok(new { Message = "Benutzer erfolgreich gelöscht." });
            }

            // Benutzer löschen anhand des Benutzernamens
            [HttpDelete("username/{username}")]
            public async Task<IActionResult> DeleteUserByUsername(string username)
            {
                var success = await _userRepository.DeleteUserByUsernameAsync(username);
                if (!success)
                    return NotFound(new { Message = "Benutzer mit dem angegebenen Benutzernamen wurde nicht gefunden." });

                return Ok(new { Message = "Benutzer erfolgreich gelöscht." });
            }
        }
}
