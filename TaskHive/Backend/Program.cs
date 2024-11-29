using Backend.Models;
using Backend.Repositories;
using Backend.Services;

namespace Backend
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // CORS-Politik für Geräte aus dem gleichen Netzwerk
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowLocalNetwork",
                    policy => policy
                        .SetIsOriginAllowed(origin =>
                        {
                            // Erlaubt nur Anfragen aus dem lokalen Subnetz (z. B. 192.168.x.x)
                            if (string.IsNullOrEmpty(origin)) return false;

                            try
                            {
                                var uri = new Uri(origin);
                                return uri.Host.StartsWith("192.168."); // Prüft, ob die Anfrage aus dem Subnetz stammt
                            }
                            catch
                            {
                                return false; // Wenn Parsing fehlschlägt, verweigern
                            }
                        })
                        .AllowAnyMethod()
                        .AllowAnyHeader());
            });

            // Konfiguration für die Datenbankeinstellungen
            builder.Services.Configure<DatabaseSettings>(builder.Configuration.GetSection("DatabaseSettings"));
            builder.Services.AddSingleton<MongoDbService>();
            builder.Services.AddSingleton<UserRepository>();

            // Add services to the container.
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            // Aktivieren der CORS-Politik
            app.UseCors("AllowLocalNetwork");

            app.UseAuthorization();

            app.MapControllers();

            // Lauschen auf allen Schnittstellen (für das lokale Netzwerk notwendig)
            app.Run();
        }
    }
}
