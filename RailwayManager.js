const prompt = require('prompt-sync')();
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
function menu() 
{
console.log("1. Afficher les trajets ");
console.log("2. Acheter un ticket ");
console.log("3. Afficher les tickets");
console.log("4. Annuler un ticket");
console.log("5. Rechercher un ticket");
console.log("6. Filtrer les trajets ");
console.log("7. Trier les trajets ");
console.log("0. Quitter ");
let x=parseInt(prompt("Votre choix : "));
 return x;
}
let x=menu()
const tickets = [];
menu ();
// if (x===1)
// {
console.log("bienvenue dans le Railway Management System!");
console.log("Voici la liste des voyages disponibles :");
for (let i=0; i<=trips.length-1; i++) 
{
    console.log("id :" + trips[i].id );
    console.log("departure :" + trips[i].departure);
    console.log("destination :" + trips[i].destination);
    console.log("departureTime :" + trips[i].departureTime);
    console.log("arrivalTime :" + trips[i].arrivalTime);
    console.log("price :" + trips[i].price);
    console.log("availableSeats :" + trips[i].availableSeats);
}
// }else if (x===2)
// {
let nom1=prompt("entrez votre nom :");
let n1=parseInt(prompt("entrez l'identifiant de votre trajet :"));
if (n1>20 || n1<=0)
{
    console.log("se trajet n'existe pas :");
}else if (trips[n1-1].availableSeats==0)
{
    console.log("il n'y a plus de place disponibles pour le trajet que vous avez sélectionné .Veuillez choisir un autre trajet ?");
}else 
{
    const voyageur1 =
    {
        id: 1, 
        passengerName: nom1, 
        tripId: n1, 
        seatNumber: trips[n1-1].availableSeats, 
        price: trips[n1-1].price
    }
    trips[n1-1].availableSeats-=1;
    tickets.push(voyageur1);
    console.log("ticket acheté avec succés");
    console.log(tickets[0]);
};
// }else if (x===3)
// {
    console.log("voici tous les tickets :");
    for(let i=0; i<=tickets.length; i++ )
    {
        console.log(tickets[0]);
    }
// }else if (x===4)
// {
    let s=parseInt(prompt("entrez l'identifiant du ticket"));
    const d=tickets.find(tickets.id===s);
    console.log(d)
    tickets.delete(d)
    console.log(tickets)
// }
