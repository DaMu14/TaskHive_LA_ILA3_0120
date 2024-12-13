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
        private readonly MongoDbService _service;

        public TaskController(MongoDbService service)
        {
            _service = service;
        }

        // Alle Aufgaben abrufen
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var items = await _service.GetAllAsync();
            return Ok(items);
        }

        // Einzelne Aufgabe abrufen
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id)
        {
            var item = await _service.GetAsync(id);

            if (item == null)
                return NotFound("Aufgabe wurde nicht gefunden.");

            return Ok(item);
        }

        // Aufgabe erstellen
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Item newItem)
        {
            Console.WriteLine($"Empfangene Daten: {System.Text.Json.JsonSerializer.Serialize(newItem)}");

            if (string.IsNullOrEmpty(newItem.Name))
                return BadRequest("Der Name darf nicht leer sein.");

            if (string.IsNullOrEmpty(newItem.UserId))
                return BadRequest("Die Benutzer-ID darf nicht leer sein.");

            if (newItem.Id == null)
            {
                // MongoDB generiert automatisch eine neue Id
                newItem.Id = ObjectId.GenerateNewId().ToString();
            }

            await _service.CreateAsync(newItem);
            return Ok(newItem);
        }

        // Aufgabe aktualisieren
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, [FromBody] Item updatedItem)
        {
            var existingItem = await _service.GetAsync(id);

            if (existingItem == null)
                return NotFound("Aufgabe wurde nicht gefunden.");

            existingItem.Name = updatedItem.Name;
            existingItem.DueDate = updatedItem.DueDate;
            existingItem.IsCompleted = updatedItem.IsCompleted;
            existingItem.UserId = updatedItem.UserId; // Benutzer-ID aktualisieren

            await _service.UpdateAsync(id, existingItem);

            return Ok("Aufgabe wurde aktualisiert.");
        }

        // Aufgabe löschen
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var item = await _service.GetAsync(id);

            if (item == null)
                return NotFound("Aufgabe wurde nicht gefunden.");

            await _service.DeleteAsync(id);
            return Ok("Aufgabe wurde gelöscht.");
        }
    }
}
