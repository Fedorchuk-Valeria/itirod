using lab1;
using Microsoft.EntityFrameworkCore;
using System.Net;
using System.Net.Sockets;
using System.Text;

class Program
{
    public static void AddMessage(string mess, string name)
    {
        using (var context = new DataContext())
        {
            var clientWithMess = context.Clients.Include(c => c.Messages).FirstOrDefault(c => c.Name == name);
            clientWithMess.Messages.Add(new Message() { Content = mess });
            context.SaveChanges();
        }
    }

    public static int GetChecksum(string str)
    {
        int result = 0;
        foreach (var item in str)
        {
            result += (int)item;
        }
        return result + str.Length;
    }
    public static void Main()
    {
        Console.WriteLine($"Enter name:");
        string userName = Console.ReadLine();

        Console.WriteLine($"Enter listening port:");
        int listeningPort = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine($"Enter sending port:");
        int sendingPort = Convert.ToInt32(Console.ReadLine());

        using (var context = new DataContext())
        {
            var client = context.Clients.FirstOrDefault(c=>c.Name == userName && c.ListeningPort == listeningPort && c.SendingPort == sendingPort);
            if (client is null) { 
                var newClient = new Client() { 
                    Name = userName,
                    ListeningPort = listeningPort,
                    SendingPort = sendingPort
                };
                context.Clients.Add(newClient);
                context.SaveChanges();
            } else
            {
                var clientWithMess = context.Clients.Include(c => c.Messages).FirstOrDefault(c => c.Name == userName);
                foreach(var item in clientWithMess.Messages)
                {
                    Console.WriteLine(item.Content);
                }
            }
        }

        Task getTask = Task.Factory.StartNew(() =>
        {
            while (true)
            {
                using (Socket socket = new Socket(AddressFamily.InterNetwork, SocketType.Dgram, ProtocolType.Udp))
                {
                    var ip = new IPEndPoint(IPAddress.Parse("127.0.0.1"), listeningPort);
                    socket.Bind(ip);

                    byte[] data = new byte[128];

                    EndPoint remoteIp = new IPEndPoint(IPAddress.Any, 0);

                    var result = socket.ReceiveFrom(data, ref remoteIp);
                    var message = Encoding.UTF8.GetString(data, 0, result);

                    int ind = message.LastIndexOf(' ');

                    string mess = message.Substring(0, ind);

                    int ch = Convert.ToInt32(message.Substring(ind + 1));

                    if(ch != GetChecksum(mess))
                    {
                        Console.WriteLine("Data lost");
                    }
                    else
                    {
                        AddMessage(mess, userName);

                        Console.WriteLine(mess);
                    }
                }
            }
        });
        Task sendTask = Task.Factory.StartNew(() =>
        {
            while (true)
            {
                using (var udpSocket = new Socket(AddressFamily.InterNetwork, SocketType.Dgram, ProtocolType.Udp))
                {
                    //Console.WriteLine("Enter message:");
                    string message = userName + ": " + Console.ReadLine();
                    int checksum = GetChecksum(message);
                    AddMessage(message, userName);
                    message += ' ' + checksum.ToString();
                    byte[] data = Encoding.UTF8.GetBytes(message);
                    EndPoint remotePoint = new IPEndPoint(IPAddress.Parse("127.0.0.1"), sendingPort);
                    udpSocket.SendTo(data, remotePoint);
                }
            }
        });

        getTask.Wait();
        sendTask.Wait();
    }
}