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

            // CORS-Politik, die Anfragen von �berall erlaubt
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAll",
                    policy => policy
                        .AllowAnyOrigin()  // Erlaubt Anfragen von allen Urspr�ngen
                        .AllowAnyMethod()  // Erlaubt alle HTTP-Methoden (GET, POST, etc.)
                        .AllowAnyHeader()  // Erlaubt alle Header
                );
            });

            // Konfiguration f�r die Datenbankeinstellungen
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
            app.UseCors("AllowAll");

            app.UseAuthorization();
            d
            app.MapControllers();

            // Lauschen auf allen Schnittstellen
            app.Run();
        }
    }
}
