using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace lab1
{
    internal class Client
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int ListeningPort { get; set; }
        public int SendingPort { get; set; }
        public List<Message> Messages { get; set; }
    }
}
