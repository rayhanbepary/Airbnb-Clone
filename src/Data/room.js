import img1 from '../images/room/1.jpg';
import img2 from '../images/room/2.jpg';
import img3 from '../images/room/3.jpg';

import all from '../images/room/all.jpg';
import host from '../images/host.jpg';


const hostedRoom = [
    {
       id: 1,
       images: [
        {
            url: img1
        },
        {
            url: all
        }
      ],
      hotelName: "Luxurious Fascinating Studio in Business Bay",
      slug: "Luxurious-Fascinating-Studio-in-Business-Bay",
      hostName: 'Rayhan',
      hostImg: host,
      hostType: 'Room in hotel',
      hostDes: 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.',
      entireHome: "You’ll have the apartment to yourself.", 
      selfCheckIn: "You can check in with the doorman.",
      sparkling: "10 recent guests said this place was sparkling clean.",
      location: "Dubai, United Arab Emirates",
      description: 'Key View is proud to present this peaceful one bedroom apartment in the vibrant Dubai Marina. Super spacious and decorated with pale neutrals and turquoise it is a very relaxing space to unwind in and find your zen in. Come home from a busy day of exploring the enchanting Dubai, from the mega Mall of Emirates only 10 minutes away, to the golden sandy shores of JBR Beach, only 5 minutes away, this apartment is perfectly positioned to ensure you get the most out of your Dubai stay...',
      guests: 4,
      bedrooms: 2,
      bed: 2,
      bath: 2,
      cleaningFee: 20,
      serviceFee: 0,
      amenities: [
        "Wifi", "Pool", "Air conditioning", "Kitchen"
      ],
      rating: 4.9,
      reviews: "(20 reviews)",
      price: 85
    },
    {
        id:2,
        images: [
         {
             url: img2
         },
         {
             url: all
         }
       ],
       hotelName: "Bright & Beautiful With Sea View Near The Beach",
       slug: "Bright-&-Beautiful-With-Sea-View-Near-The-Beach",
       hostName: 'Rayhan',
       hostImg: host,
       hostType: 'Entire apartment',
       hostDes: 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.',
       entireHome: "You’ll have the apartment to yourself.", 
       selfCheckIn: "You can check in with the doorman.",
       sparkling: "10 recent guests said this place was sparkling clean.",
       location: "dhaka, Bangladesh",
       description: 'Key View is proud to present this peaceful one bedroom apartment in the vibrant Dubai Marina. Super spacious and decorated with pale neutrals and turquoise it is a very relaxing space to unwind in and find your zen in. Come home from a busy day of exploring the enchanting Dubai, from the mega Mall of Emirates only 10 minutes away, to the golden sandy shores of JBR Beach, only 5 minutes away, this apartment is perfectly positioned to ensure you get the most out of your Dubai stay...',
       guests: 2,
       bedrooms: 1,
       bed: 1,
       bath: 1,
       cleaningFee: 50,
       serviceFee: 10,
       amenities: [
         "wifi", "pool", "air conditioning", "kitchen"
       ],
       rating: 3.9,
       reviews: "(5 reviews)",
       price: 65
     },
     {
        id: 3,
        images: [
         {
             url: img3
         },
         {
             url: all
         }
       ],
       hotelName: "Millennium Plaza Hotel Dubai Superior room 5* /5",
       slug: "Millennium-Plaza-Hotel-Dubai-Superior-room-5-5",
       hostName: 'Rayhan',
       hostImg: host,
       hostType: 'Entire apartment',
       hostDes: 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.',
       entireHome: "You’ll have the apartment to yourself.", 
       selfCheckIn: "You can check in with the doorman.",
       sparkling: "10 recent guests said this place was sparkling clean.",
       location: "Dubai, United Arab Emirates",
       description: 'Key View is proud to present this peaceful one bedroom apartment in the vibrant Dubai Marina. Super spacious and decorated with pale neutrals and turquoise it is a very relaxing space to unwind in and find your zen in. Come home from a busy day of exploring the enchanting Dubai, from the mega Mall of Emirates only 10 minutes away, to the golden sandy shores of JBR Beach, only 5 minutes away, this apartment is perfectly positioned to ensure you get the most out of your Dubai stay...',
       guests: 3,
       bedrooms: 2,
       bed: 2,
       bath: 2,
       cleaningFee: 30,
       serviceFee: 0,
       amenities: [
         "wifi", "pool", "air conditioning", "kitchen"
       ],
       rating: 4,
       reviews: "(10 reviews)",
       price: 35
     }
]

export default hostedRoom;