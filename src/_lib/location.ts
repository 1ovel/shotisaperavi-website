import { Location, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getLocations = async () => {
    const locations = await prisma.location.findMany();
    return locations;
};

export const createLocation = async (location: Location) => {
    const newLocation = await prisma.location.create({
        data: location,
    });
    return newLocation;
};

export const updateLocation = async (location: Location) => {
    const updatedLocation = await prisma.location.update({
        where: { id: location.id },
        data: location,
    });
    return updatedLocation;
};

export const deleteLocation = async (id: string) => {
    const deletedLocation = await prisma.location.delete({
        where: { id },
    });
    return deletedLocation;
};

export const getLocationById = async (id: string) => {
    const location = await prisma.location.findUnique({
        where: { id },
    });
    return location;
};
