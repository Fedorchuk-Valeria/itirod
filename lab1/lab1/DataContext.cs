using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace lab1
{
    internal class DataContext : DbContext
    {
        public DbSet<Client> Clients { get; set; } 

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=.\SQLExpress;Database=lab1;Trusted_Connection=true;TrustServerCertificate=true;");
        }
        //Server=localhost\SQLEXPRESS;Database=master;Trusted_Connection=True;
    }

}
