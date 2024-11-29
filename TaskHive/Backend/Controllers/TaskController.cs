using Microsoft.AspNetCore.Mvc;
using Backend.Models;
using Backend.Services;
using MongoDB.Bson;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly MongoDbService _mongoDbService;

        public TaskController(MongoDbService mongoDbService)
        {
            _mongoDbService = mongoDbService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var items = await _mongoDbService.GetAllAsync();
            return Ok(items);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id)
        {
            if (!ObjectId.TryParse(id, out _))
                return BadRequest("Invalid ID format");

            var item = await _mongoDbService.GetAsync(id);
            if (item == null)
                return NotFound("Item not found");

            return Ok(item);
        }


        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateItemRequest request)
        {
            if (request == null || string.IsNullOrEmpty(request.Name))
                return BadRequest("Name darf nicht leer sein.");

            if (request.DueDate == default)
                return BadRequest("Ein gültiges Fälligkeitsdatum muss angegeben werden.");

            // Erstelle das neue Item mit den zusätzlichen Feldern
            var newItem = new Item
            {
                Name = request.Name,
                DueDate = request.DueDate.Date,
                IsCompleted = request.IsCompleted,
                Id = ObjectId.GenerateNewId().ToString() // Optional: Erstelle die ID explizit
            };

            await _mongoDbService.CreateAsync(newItem);

            // Rückgabe mit dem erstellten Objekt
            return CreatedAtAction(nameof(GetById), new { id = newItem.Id }, newItem);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, [FromBody] UpdateItemRequest request)
        {
            if (request == null || string.IsNullOrEmpty(request.Name))
                return BadRequest("Name cannot be empty");

            var existingItem = await _mongoDbService.GetAsync(id);
            if (existingItem == null)
                return NotFound("Item not found");

            // Aktualisiere nur das Feld "Name"
            existingItem.Name = request.Name;
            await _mongoDbService.UpdateAsync(id, existingItem);

            return NoContent(); // Erfolgreiche Bearbeitung ohne Rückgabe
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id) // Ändere den Typ von int zu string
        {
            var item = await _mongoDbService.GetAsync(id);
            if (item == null)
                return NotFound("Item not found");

            await _mongoDbService.DeleteAsync(id);
            return NoContent();
        }
    }
}
