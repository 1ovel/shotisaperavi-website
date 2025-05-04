import { MenuInfo } from '@/app/types/MenuInfo';

export const menus: MenuInfo[] = [
    {
        id: 'helsinki',
        locationId: 'helsinki',
        menuSections: [
            {
                id: 'helsinki-supra',
                title: 'Supra',
                decorator: 'სუფრა',
                menuId: 'helsinki',
                menuItems: [
                    {
                        id: 'helsinki-supra-1',
                        title: 'SUPRA / person',
                        description:
                            'for a group of at least 4 people, the meal includes: PKHALI – spinach, beetroot and green bean paste with herbs and walnuts, BADRIJANI – eggplant and walnut rolls, POTATO SALAD – cucumber and tomato salad, IMERULI KHATCHAPURI – oven-baked cheese bread, MTSVADI – pork and chicken skewers, SHKHMERULI – garlicky chicken and sour cream stew praised by our customers, CHASHUSHULI – beef stew, AJAPSANDALI – vegetable stew, VEGETABLE SKEWERS, FRIED POTATOES AND ONIONS, HOUSE SAUCES and HOUSE BREAD',
                        price: 46,
                        menuSectionId: 'helsinki-supra',
                    },
                    {
                        id: 'helsinki-supra-2',
                        title: 'SUPRA VEGETABLE / person',
                        description:
                            'for a group of at least 4 people, the meal includes: PKHALI – spinach, beetroot and green bean paste with herbs and walnuts, BADRIJANI – eggplant and walnut rolls, POTATO SALAD – cucumber and tomato salad, IMERULI KHATCHAPURI – baked cheese bread, OR LOBIANI – bean bread vegan, AJAPSANDALI – vegetable stew, LOBIO – bean and walnut stew, GRILLED VEGETABLES, HOUSE SAUCES, HOUSE BREAD',
                        price: 40,
                        menuSectionId: 'helsinki-supra',
                    },
                    {
                        id: 'helsinki-supra-3',
                        title: 'SUPRA for 2 people',
                        description:
                            'for a group of at least 4 people, the meal includes: PKHALI – spinach, beetroot and green bean paste with herbs and walnuts, BADRIJANI – eggplant and walnut rolls, POTATO SALAD – cucumber and tomato salad, IMERULI KHATCHAPURI – baked cheese bread, OR LOBIANI – bean bread vegan, AJAPSANDALI – vegetable stew, LOBIO – bean and walnut stew, GRILLED VEGETABLES, HOUSE SAUCES, HOUSE BREAD',
                        price: 80,
                        menuSectionId: 'helsinki-supra',
                    },
                ],
            },
            {
                id: 'helsinki-grill',
                title: 'Grill',
                decorator: 'მაყალის კერძები',
                menuId: 'helsinki',
                menuItems: [
                    {
                        id: 'helsinki-grill-1',
                        title: 'MTSVADI',
                        description:
                            'Shoti&Saperavi`s all-time favorite, grilled pork neck',
                        price: 26,
                        menuSectionId: 'helsinki-grill',
                    },
                    {
                        id: 'helsinki-grill-2',
                        title: 'KATMIS MTSVADI',
                        description: 'Grilled chicken skewer',
                        price: 24,
                        menuSectionId: 'helsinki-grill',
                    },
                    {
                        id: 'helsinki-grill-3',
                        title: 'LAMB CHOPS',
                        description: 'Grilled lamb shank',
                        price: 21,
                        menuSectionId: 'helsinki-grill',
                    },
                ],
            },
        ],
    },
    {
        id: 'tampere',
        locationId: 'tampere',
        menuSections: [
            {
                id: 'tampere-grill',
                title: 'Grill',
                decorator: 'მაყალის კერძები',
                menuId: 'tampere',
                menuItems: [
                    {
                        id: 'tampere-grill-1',
                        title: 'MTSVADI',
                        description:
                            'Shoti&Saperavi`s all-time favorite, grilled pork neck',
                        price: 26,
                        menuSectionId: 'tampere-grill',
                    },
                    {
                        id: 'tampere-grill-2',
                        title: 'KATMIS MTSVADI',
                        description: 'Grilled chicken skewer',
                        price: 24,
                        menuSectionId: 'tampere-grill',
                    },
                    {
                        id: 'tampere-grill-3',
                        title: 'LAMB CHOPS',
                        description: 'Grilled lamb shank',
                        price: 21,
                        menuSectionId: 'tampere-grill',
                    },
                ],
            },
        ],
    },
    {
        id: 'turku',
        locationId: 'turku',
        menuSections: [
            {
                id: 'turku-supra',
                title: 'Supra',
                decorator: 'სუფრა',
                menuId: 'turku',
                menuItems: [
                    {
                        id: 'turku-supra-1',
                        title: 'SUPRA for 2 people',
                        description:
                            'for a group of at least 4 people, the meal includes: PKHALI – spinach, beetroot and green bean paste with herbs and walnuts, BADRIJANI – eggplant and walnut rolls, POTATO SALAD – cucumber and tomato salad, IMERULI KHATCHAPURI – baked cheese bread, OR LOBIANI – bean bread vegan, AJAPSANDALI – vegetable stew, LOBIO – bean and walnut stew, GRILLED VEGETABLES, HOUSE SAUCES, HOUSE BREAD',
                        price: 80,
                        menuSectionId: 'turku-supra',
                    },
                ],
            },
            {
                id: 'turku-grill',
                title: 'Grill',
                decorator: 'მაყალის კერძები',
                menuId: 'turku',
                menuItems: [
                    {
                        id: 'turku-grill-1',
                        title: 'MTSVADI',
                        description:
                            'Shoti&Saperavi`s all-time favorite, grilled pork neck',
                        price: 26,
                        menuSectionId: 'turku-grill',
                    },
                    {
                        id: 'turku-grill-2',
                        title: 'KATMIS MTSVADI',
                        description: 'Grilled chicken skewer',
                        price: 24,
                        menuSectionId: 'turku-grill',
                    },
                    {
                        id: 'turku-grill-3',
                        title: 'LAMB CHOPS',
                        description: 'Grilled lamb shank',
                        price: 21,
                        menuSectionId: 'turku-grill',
                    },
                ],
            },
        ],
    },
    {
        id: 'espoo',
        locationId: 'espoo',
        menuSections: [
            {
                id: 'espoo-supra',
                title: 'Supra',
                decorator: 'სუფრა',
                menuId: 'espoo',
                menuItems: [
                    {
                        id: 'espoo-supra-1',
                        title: 'SUPRA VEGETABLE / person',
                        description:
                            'for a group of at least 4 people, the meal includes: PKHALI – spinach, beetroot and green bean paste with herbs and walnuts, BADRIJANI – eggplant and walnut rolls, POTATO SALAD – cucumber and tomato salad, IMERULI KHATCHAPURI – baked cheese bread, OR LOBIANI – bean bread vegan, AJAPSANDALI – vegetable stew, LOBIO – bean and walnut stew, GRILLED VEGETABLES, HOUSE SAUCES, HOUSE BREAD',
                        price: 40,
                        menuSectionId: 'espoo-supra',
                    },
                    {
                        id: 'espoo-supra-2',
                        title: 'SUPRA for 2 people',
                        description:
                            'for a group of at least 4 people, the meal includes: PKHALI – spinach, beetroot and green bean paste with herbs and walnuts, BADRIJANI – eggplant and walnut rolls, POTATO SALAD – cucumber and tomato salad, IMERULI KHATCHAPURI – baked cheese bread, OR LOBIANI – bean bread vegan, AJAPSANDALI – vegetable stew, LOBIO – bean and walnut stew, GRILLED VEGETABLES, HOUSE SAUCES, HOUSE BREAD',
                        price: 80,
                        menuSectionId: 'espoo-supra',
                    },
                ],
            },
        ],
    },
];
