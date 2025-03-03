import { LocationInfo } from '../types/LocationInfo';
import imageTable from '@/app/images/photo-table.webp';
import imageTableAlt from '@/app/images/photo-table-alt.webp';
import imageWine from '@/app/images/photo-wine.webp';
import imageWineAlt from '@/app/images/photo-wine-alt.webp';

export const locations: LocationInfo[] = [
    {
        slug: 'helsinki',
        title: 'Helsinki',
        address: 'Kasarmikatu 25, 00130 Helsinki',
        description:
            'Rion`s Helsinki city centre restaurant opened on Kasarmikatu in January 2021. It is the third in the series, following the Espoo and Turku restaurants. The Helsinki unit proudly continues the same authentic and honest Georgian tradition that charmed the two previous restaurants.',
        phone: '050 551 2264',
        email: 'helsinki@rioni.fi',
        imageSrc: imageTable,
        fullDescription:
            'Restaurant Rioni is an atmospheric restaurant in the heart of Helsinki that invites you on a journey into the world of Georgian flavors. We offer authentic Georgian flavors that awaken your senses and take you on a journey to the scents and tastes of the Caucasus Mountains. On the menu you will find traditional Georgian delicacies, such as khachapuri, khinkali and barbecue skewers, prepared with love and authentic recipes. ',
        schedule: [
            {
                days: 'Mon - Fri',
                openTime: '16.00',
                closeTime: '23.00',
            },
            {
                days: 'Sat',
                openTime: '13.00',
                closeTime: '00.00',
            },
            {
                days: 'Sun',
                openTime: '13.00',
                closeTime: '22.00',
            },
        ],
    },
    {
        slug: 'espoo',
        title: 'Espoo',
        address: 'Espoonlahdenkatu 8, 02320 Espoo',
        description:
            'Come on a taste journey to our Georgian restaurant, where tradition and passion meet. We offer a combination of Georgian history, culture and taste experiences. Our friendly staff guarantees that your visit will be unforgettable. You can enjoy lunch, dinner, dishes from the À la carte menu or come with a larger group to spend time together.',
        phone: '050 513 1119',
        email: 'info@rioni.fi',
        imageSrc: imageTableAlt,
        fullDescription:
            'Restaurant Rioni is an atmospheric restaurant in the heart of Helsinki that invites you on a journey into the world of Georgian flavors. We offer authentic Georgian flavors that awaken your senses and take you on a journey to the scents and tastes of the Caucasus Mountains. On the menu you will find traditional Georgian delicacies, such as khachapuri, khinkali and barbecue skewers, prepared with love and authentic recipes. ',
        schedule: [
            {
                days: 'Mon - Fri',
                openTime: '16.00',
                closeTime: '23.00',
            },
            {
                days: 'Sat',
                openTime: '13.00',
                closeTime: '00.00',
            },
            {
                days: 'Sun',
                openTime: '13.00',
                closeTime: '22.00',
            },
        ],
    },
    {
        slug: 'turku',
        title: 'Turku',
        address: 'Eerikinkatu 8, 2. floor, 20100 Turku',
        description:
            'Restaurant Rioni is an atmospheric restaurant located in the center of Turku. This unique restaurant offers its guests the opportunity to enjoy authentic Georgian flavors and an unforgettable dining experience. We are the perfect choice for your next evening out and also a great restaurant for groups.',
        phone: '050 468 8051',
        email: 'turku@rioni.fi',
        imageSrc: imageWine,
        fullDescription:
            'Restaurant Rioni is an atmospheric restaurant in the heart of Helsinki that invites you on a journey into the world of Georgian flavors. We offer authentic Georgian flavors that awaken your senses and take you on a journey to the scents and tastes of the Caucasus Mountains. On the menu you will find traditional Georgian delicacies, such as khachapuri, khinkali and barbecue skewers, prepared with love and authentic recipes. ',
        schedule: [
            {
                days: 'Mon - Fri',
                openTime: '16.00',
                closeTime: '23.00',
            },
            {
                days: 'Sat',
                openTime: '13.00',
                closeTime: '00.00',
            },
            {
                days: 'Sun',
                openTime: '13.00',
                closeTime: '22.00',
            },
        ],
    },
    {
        slug: 'tampere',
        title: 'Tampere',
        address: 'Rautatienkatu 12, 33100 Tampere',
        description:
            'Discover Georgian food culture at our new restaurant in Tampere. The most famous Georgian dishes are hatsapuri, khinkali, various meat skewers, meat stews, various vegetarian dishes and breads baked in a tone oven. ',
        phone: '050 391 4499',
        email: 'tampere@rioni.fi',
        imageSrc: imageWineAlt,
        fullDescription:
            'Restaurant Rioni is an atmospheric restaurant in the heart of Helsinki that invites you on a journey into the world of Georgian flavors. We offer authentic Georgian flavors that awaken your senses and take you on a journey to the scents and tastes of the Caucasus Mountains. On the menu you will find traditional Georgian delicacies, such as khachapuri, khinkali and barbecue skewers, prepared with love and authentic recipes. ',
        schedule: [
            {
                days: 'Mon - Fri',
                openTime: '16.00',
                closeTime: '23.00',
            },
            {
                days: 'Sat',
                openTime: '13.00',
                closeTime: '00.00',
            },
            {
                days: 'Sun',
                openTime: '13.00',
                closeTime: '22.00',
            },
        ],
    },
];
