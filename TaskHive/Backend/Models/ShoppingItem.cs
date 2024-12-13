using System;
using System.Collections.Generic;

namespace Backend.Models

{
    public class ShoppingItem
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
        public bool IsBought { get; set; } = false;
    }
}
