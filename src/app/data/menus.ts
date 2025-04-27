import { MenuInfo } from '../types/MenuInfo';

export const menus: MenuInfo[] = [
    {
        id: 'helsinki',
        menuSections: [
            {
                title: 'Supra',
                decorator: 'სუფრა',
                menuItems: [
                    {
                        title: 'SUPRA / person',
                        description:
                            'for a group of at least 4 people, the meal includes: PKHALI – spinach, beetroot and green bean paste with herbs and walnuts, BADRIJANI – eggplant and walnut rolls, POTATO SALAD – cucumber and tomato salad, IMERULI KHATCHAPURI – oven-baked cheese bread, MTSVADI – pork and chicken skewers, SHKHMERULI – garlicky chicken and sour cream stew praised by our customers, CHASHUSHULI – beef stew, AJAPSANDALI – vegetable stew, VEGETABLE SKEWERS, FRIED POTATOES AND ONIONS, HOUSE SAUCES and HOUSE BREAD',
                        price: 46,
                    },
                    {
                        title: 'SUPRA VEGETABLE / person',
                        description:
                            'for a group of at least 4 people, the meal includes: PKHALI – spinach, beetroot and green bean paste with herbs and walnuts, BADRIJANI – eggplant and walnut rolls, POTATO SALAD – cucumber and tomato salad, IMERULI KHATCHAPURI – baked cheese bread, OR LOBIANI – bean bread vegan, AJAPSANDALI – vegetable stew, LOBIO – bean and walnut stew, GRILLED VEGETABLES, HOUSE SAUCES, HOUSE BREAD',
                        price: 40,
                    },
                    {
                        title: 'SUPRA for 2 people',
                        description:
                            'for a group of at least 4 people, the meal includes: PKHALI – spinach, beetroot and green bean paste with herbs and walnuts, BADRIJANI – eggplant and walnut rolls, POTATO SALAD – cucumber and tomato salad, IMERULI KHATCHAPURI – baked cheese bread, OR LOBIANI – bean bread vegan, AJAPSANDALI – vegetable stew, LOBIO – bean and walnut stew, GRILLED VEGETABLES, HOUSE SAUCES, HOUSE BREAD',
                        price: 80,
                    },
                ],
            },
            {
                title: 'Grill',
                decorator: 'მაყალის კერძები',
                menuItems: [
                    {
                        title: 'MTSVADI',
                        description:
                            'Shoti&Saperavi`s all-time favorite, grilled pork neck',
                        price: 26,
                    },
                    {
                        title: 'KATMIS MTSVADI',
                        description: 'Grilled chicken skewer',
                        price: 24,
                    },
                    {
                        title: 'LAMB CHOPS',
                        description: 'Grilled lamb shank',
                        price: 21,
                    },
                ],
            },
        ],
    },
    {
        id: 'tampere',
        menuSections: [
            {
                title: 'Grill',
                decorator: 'მაყალის კერძები',
                menuItems: [
                    {
                        title: 'MTSVADI',
                        description:
                            'Shoti&Saperavi`s all-time favorite, grilled pork neck',
                        price: 26,
                    },
                    {
                        title: 'KATMIS MTSVADI',
                        description: 'Grilled chicken skewer',
                        price: 24,
                    },
                    {
                        title: 'LAMB CHOPS',
                        description: 'Grilled lamb shank',
                        price: 21,
                    },
                ],
            },
        ],
    },
    {
        id: 'turku',
        menuSections: [
            {
                title: 'Supra',
                decorator: 'სუფრა',
                menuItems: [
                    {
                        title: 'SUPRA for 2 people',
                        description:
                            'for a group of at least 4 people, the meal includes: PKHALI – spinach, beetroot and green bean paste with herbs and walnuts, BADRIJANI – eggplant and walnut rolls, POTATO SALAD – cucumber and tomato salad, IMERULI KHATCHAPURI – baked cheese bread, OR LOBIANI – bean bread vegan, AJAPSANDALI – vegetable stew, LOBIO – bean and walnut stew, GRILLED VEGETABLES, HOUSE SAUCES, HOUSE BREAD',
                        price: 80,
                    },
                ],
            },
            {
                title: 'Grill',
                decorator: 'მაყალის კერძები',
                menuItems: [
                    {
                        title: 'MTSVADI',
                        description:
                            'Shoti&Saperavi`s all-time favorite, grilled pork neck',
                        price: 26,
                    },
                    {
                        title: 'KATMIS MTSVADI',
                        description: 'Grilled chicken skewer',
                        price: 24,
                    },
                    {
                        title: 'LAMB CHOPS',
                        description: 'Grilled lamb shank',
                        price: 21,
                    },
                ],
            },
        ],
    },
    {
        id: 'espoo',
        menuSections: [
            {
                title: 'Supra',
                decorator: 'სუფრა',
                menuItems: [
                    {
                        title: 'SUPRA VEGETABLE / person',
                        description:
                            'for a group of at least 4 people, the meal includes: PKHALI – spinach, beetroot and green bean paste with herbs and walnuts, BADRIJANI – eggplant and walnut rolls, POTATO SALAD – cucumber and tomato salad, IMERULI KHATCHAPURI – baked cheese bread, OR LOBIANI – bean bread vegan, AJAPSANDALI – vegetable stew, LOBIO – bean and walnut stew, GRILLED VEGETABLES, HOUSE SAUCES, HOUSE BREAD',
                        price: 40,
                    },
                    {
                        title: 'SUPRA for 2 people',
                        description:
                            'for a group of at least 4 people, the meal includes: PKHALI – spinach, beetroot and green bean paste with herbs and walnuts, BADRIJANI – eggplant and walnut rolls, POTATO SALAD – cucumber and tomato salad, IMERULI KHATCHAPURI – baked cheese bread, OR LOBIANI – bean bread vegan, AJAPSANDALI – vegetable stew, LOBIO – bean and walnut stew, GRILLED VEGETABLES, HOUSE SAUCES, HOUSE BREAD',
                        price: 80,
                    },
                ],
            },
        ],
    },
];
