import { Menu, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getMenu = async () => {
    const menu = await prisma.menu.findMany();
    return menu;
};

export const createMenu = async (menu: Menu) => {
    const newMenu = await prisma.menu.create({
        data: menu,
    });
    return newMenu;
};

export const updateMenu = async (menu: Menu) => {
    const updatedMenu = await prisma.menu.update({
        where: { id: menu.id },
        data: menu,
    });
    return updatedMenu;
};

export const deleteMenu = async (id: string) => {
    const deletedMenu = await prisma.menu.delete({
        where: { id },
    });
    return deletedMenu;
};

export const createMenuForLocation = async (menu: Menu, locationId: string) => {
    const newMenu = await prisma.menu.create({
        data: { ...menu, locationId },
    });
    return newMenu;
};

export const updateMenuForLocation = async (menu: Menu, locationId: string) => {
    const updatedMenu = await prisma.menu.update({
        where: { id: menu.id },
        data: { ...menu, locationId },
    });
    return updatedMenu;
};
