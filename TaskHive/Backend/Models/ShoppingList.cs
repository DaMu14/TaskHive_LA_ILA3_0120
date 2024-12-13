using System;
using System.Collections.Generic;
using Backend.Models;

namespace Backend.Models;


public class ShoppingList
{
    public string id {get;set;}
    public string Title {get;set;}
    public List<ShoppingItem> Items {get; set; } = new List<ShoppingItem>();
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

}