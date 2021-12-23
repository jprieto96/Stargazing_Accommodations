const dataJSON =
{
"mainCategory": "Stargazing Accommodations",
"localAuthority":" ", 
/* 	
	Added this arrray to have filtering fields in an array
  	Each element of the array is another array that describe in the fisrt position the name of the attribute of the items
  	and in the second position ho we can display tha attribute in the filter menu
*/ 
"filterFields": [["area", "Area"], ["Address", "Address"], ["postCode", "Post code"], ["facilities", "Facilities"], ["tags", "Tags"]],
"itemNames": ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10"],
"item1":

     {
		"ItemID":"i1",
		"displayName": "Colliford Lake Park", 
		"openingTimes" :"24 h",
		"area": "Bodmin Moor",
		"facilities": ["Exceptional views"],
		"Address" : "St Neot Liskeard Cornwall",
		"postCode": "PL14 6PL",
		"tags": ["Lake", "Nature reserve"],
		"telephone": "01566 771930",
		"description": "Colliford Lake Park is a nature reserve located in the very heart of Bodmin Moor and easy access from the A30. Ample public parking with picnic areas and lakeside walks allow you to find that perfect stargazing spot. With wide expansive skies and being away from light pollution this makes for an excellent place to spot meteors and see the Milky Way in all of its glory!",
		"latLong" : {"lat": "50.53644506692668", "lng": "-4.58373315739495"}, // do not remove this catergory as you might need it for assignment 2 
		"image": ["images/collfifordlakes.jpg", "images/collfifordlakes2.jpg", "images/collfifordlakes3.jpg"] // include more than one image for details page
		// add or remove catergories as appropriate, justification for the same should be included in reflection
    }

,

"item2":

    {
		"ItemID":"i2",
		"displayName": "Kingfishers Holidays", 
		"openingTimes" :"24 h",
		"area": "Charmouth",
		"facilities": ["Self-catering"],
		"Address" : "Newlands Bridge, Charmouth",
		"postCode": "84741-0285 UT",
		"tags": ["Jurassic Coast"],
		"telephone": "07561 308387",
		"description": "Located in an Area of Outstanding Natural Beauty this lovely self-catering accommodation is an ideal base to explore the Jurassic Coast and the stars in the dark night sky.",
		"latLong" : {"lat": "50.73794952893167", "lng": "-2.893614958569564"}, // do not remove this catergory as you might need it for assignment 2 
		"image": ["images/Kingfishers.jpg", "images/Kingfishers2.jpg"]
		// add or remove catergories as appropriate, justification for the same should be included in reflection
    },

"item3":

    {
		"ItemID":"i3",
		"displayName": "Pontithel Lodges", 
		"openingTimes" :"24 h",
		"area": "Brecon",
		"facilities": ["Large decking area"],
		"Address" : "Pontithel, Brecon",
		"postCode": "LD3 0SA",
		"tags": ["Black mountains"],
		"telephone": "N/A",
		"description": "Enjoy views of the Black Mountains, Hay Bluff, Langorse Mountain as well as the fabulous dark skies from your own large decking area.",
		"latLong" : {"lat": "52.02190002917505", "lng": "-3.219630964929505"}, // do not remove this catergory as you might need it for assignment 2 
		"image": ["images/Pontithel.jpg", "images/Pontithel2.jpg", "images/Pontithel3.jpg"]
		// add or remove catergories as appropriate, justification for the same should be included in reflection
    },

"item4":

	{
		"ItemID":"i4",
		"displayName": "Caban Dan Y Ser (Cabin under the Stars)", 
		"openingTimes" :"24 h",
		"area": "Bronaber",
		"facilities": ["Hot tub"],
		"Address" : "Bronaber, Snowdonia",
		"postCode": "LL41 4YB",
		"tags": ["Cabins", "National Park"],
		"telephone": "N/A",
		"description": "Enjoy a fabulous stargazing break in Snowdonia Dark Sky Park in this cosy Scandinavian style pine log cabin!",
		"latLong" : {"lat": "52.869600749051834", "lng": "-3.9089742854821123"}, // do not remove this catergory as you might need it for assignment 2 
		"image": ["images/cabandanyser.jpeg", "images/cabandanyser2.jpg"]
		// add or remove catergories as appropriate, justification for the same should be included in reflection
	},

"item5":

	{
		"ItemID":"i5",
		"displayName": "Llanfair Hall", 
		"openingTimes" :"24 h",
		"area": "Anglesey",
		"facilities": ["Barbecue fire pit", "Freeview TV/DVD"],
		"Address" : "Dwyran, Llanfairpwllgwyngyll, Anglesey",
		"postCode": "LL61 6AX",
		"tags": ["Rural", "Cabins"],
		"telephone": "01248 440031",
		"description": "Nestled in the Welsh countryside, Llanfair Hall is only 8 miles from the A55, 16 miles from the edge of Snowdonia and boasts 5* and Gold rated glamping pods on Anglesey while being awarded the AA’s UK Glamping Site of the year for 2019-2020. You’ll have your own individual wet room, personal barbecue fire pit, Freeview TV/DVD, sumptuous 100% cotton bedlinen and towels – everything you need for glamorous camping with the highest possible specifications! Further options include an amazing log cabin and most superb 1720s barn conversion.",
		"latLong" : {"lat": "53.175545530039706", "lng": "-4.324040280548902"}, // do not remove this catergory as you might need it for assignment 2 
		"image": ["images/llanfair-hall.jpg", "images/llanfair-hall2.jpg"]
		// add or remove catergories as appropriate, justification for the same should be included in reflection
	},

"item6":

	{
		"ItemID":"i6",
		"displayName": "Galloway Astronomy Centre", 
		"openingTimes" :"24 h",
		"area": "Craiglemine Cottage, Glasserton",
		"facilities": ["Astronomy Centre"],
		"Address" : "Craiglemine Cottage, Whithorn",
		"postCode": "DG8 8NE",
		"tags": ["Observatory"],
		"telephone": "01988 500594",
		"description": "Enjoy a stargazing break at the Galloway Astronomy Centre and experience the fabulous dark skies of South West Scotland! From the on-site observatory, home to a huge 16″ reflecting telescope, guests can enjoy tours of the heavens viewing distant objects, including galaxies and nebulae. Non-residents may also book private tours in advance, which can be tailor-made to meet your level of experience and interests.",
		"latLong" : {"lat": "54.72364029529928", "lng": "-4.475597730328959"}, // do not remove this catergory as you might need it for assignment 2 
		"image": ["images/galloway.jpg", "images/galloway2.jpg"]
		// add or remove catergories as appropriate, justification for the same should be included in reflection
	},

"item7":

	{
		"ItemID":"i7",
		"displayName": "Knoydart Hide", 
		"openingTimes" :"24 h",
		"area": "Inverie, Knoydart",
		"facilities": ["Luxury", "Self-catering", "Hot tub"],
		"Address" : "Knoydart Hide, Inverie, Knoydart, Mallaig",
		"postCode": "PH41 4PL",
		"tags": ["Luxury"],
		"telephone": "01687 460012",
		"description": "Knoydart Hide offers luxury self-catering accommodation with outdoor hot tub in a beautiful and secluded woodland setting overlooking Loch Nevis. A fantastic location to explore the local area and look up at the dark skies above. Stargazing guided tours available.",
		"latLong" : {"lat": "57.037819078836854", "lng": "-5.683902714917809"}, // do not remove this catergory as you might need it for assignment 2 
		"image": ["images/knoydart.jpg", "images/knoydart2.jpg", "images/knoydart3.jpg"]
		// add or remove catergories as appropriate, justification for the same should be included in reflection
	},

"item8":

	{
		"ItemID":"i8",
		"displayName": "Raworths Retreat at Burn Cottage", 
		"openingTimes" :"24 h",
		"area": "Laundry Road",
		"facilities": ["Two bed", "Self-catering", "Cottage"],
		"Address" : "Laundry Road, Lairg",
		"postCode": "IV27 4DE",
		"tags": ["Rural", "Village"],
		"telephone": "0345 268 1786",
		"description": "This lovely cosy, modern two bed self-catering cottage that sleeps four is located in the quiet rural village of Lairg and a perfect base to explore the surrounding area and the dark, starry skies above.",
		"latLong" : {"lat": "58.024641560826424", "lng": "-4.394528901895984"}, // do not remove this catergory as you might need it for assignment 2 
		"image": ["images/raworths.jpg", "images/raworths2.jpg", "images/raworths3.jpg"]
		// add or remove catergories as appropriate, justification for the same should be included in reflection
	},

"item9":

	{
		"ItemID":"i9",
		"displayName": "Birdsong Cottage", 
		"openingTimes" :"24 h",
		"area": "Alnwick",
		"facilities": ["Luxury", "Large balcony"],
		"Address" : "Brownieside, Alnwick",
		"postCode": "NE67 5HW",
		"tags": ["Luxury", "Sea view"],
		"telephone": "01665 517284",
		"description": "Enjoy a stargazing break to Northumberland at this luxury en-suite B&B near Alnwick. Their “Haven Suite” has a large balcony ideal for dark sky stargazing, relaxing & sea view!",
		"latLong" : {"lat": "55.50608793896463", "lng": "-1.7399995726346946"}, // do not remove this catergory as you might need it for assignment 2 
		"image": ["images/birdsong.jpg", "images/birdsong2.jpg", "images/birdsong3.jpg"]
		// add or remove catergories as appropriate, justification for the same should be included in reflection
	},

"item10":

	{
		"ItemID":"i10",
		"displayName": "Cropton Cabins Holiday Park", 
		"openingTimes" :"24 h",
		"area": "Cropton",
		"facilities": ["Hot tub"],
		"Address" : "Cropton, Wrelton",
		"postCode": "YO18 8ES",
		"tags": ["Cabins", "National Park", "Rural"],
		"telephone": "03330 110 495",
		"description": "Enjoy a stargazing break at the fantastic Cropton Cabins located under the darkest of skies in the North York Moors National Park! This venue has adapted its lighting to reduce light pollution protecting not just the environment but also the enjoyment of the starry skies above. Set amongst an expanse of natural woodland the well appointed cabins (some of which include a hot tub!) offer an amazing retreat for families and couples!",
		"latLong" : {"lat": "54.31668430966593", "lng": "-0.8364975047382261"}, // do not remove this catergory as you might need it for assignment 2 
		"image": ["images/cropton.jpg", "images/cropton2.jpg", "images/cropton3.jpg"]
		// add or remove catergories as appropriate, justification for the same should be included in reflection
	}

};