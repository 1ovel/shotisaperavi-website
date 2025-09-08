import { getLocations, getMenus } from "@/lib/data";
import { LocationInfo, MenuInfo } from "@/types";
import { useEffect, useMemo, useState } from "react";

const useMenuContentData = (locationIdFromUrl: string | null) => {
    const [locations, setLocations] = useState<LocationInfo[]>([]);
    const [menus, setMenus] = useState<MenuInfo[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedLocationId, setSelectedLocationId] = useState<string>('');
    const [selectedMenuId, setSelectedMenuId] = useState<string>('');

    useEffect(() => {
        const loadData = async () => {
            try {
                const [locationsData, menusData] = await Promise.all([
                    getLocations(),
                    getMenus()
                ]);
                
                setLocations(locationsData);
                setMenus(menusData);
                
                if (locationIdFromUrl && locationsData.some((loc) => loc.id === locationIdFromUrl)) {
                    setSelectedLocationId(locationIdFromUrl);
                    setSelectedMenuId(locationIdFromUrl);
                } else if (locationsData.length > 0) {
                    setSelectedLocationId(locationsData[0].id);
                    setSelectedMenuId(locationsData[0].id);
                }
            } catch (error) {
                console.error('Error loading data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, [locationIdFromUrl]);

    useEffect(() => {
        if (locationIdFromUrl && locations.length > 0) {
            setSelectedMenuId(
                locations.some((loc) => loc.id === locationIdFromUrl)
                    ? locationIdFromUrl
                    : selectedLocationId
            );
            setSelectedLocationId(
                locations.some((loc) => loc.id === locationIdFromUrl)
                    ? locationIdFromUrl
                    : selectedLocationId
            );
            return;
        }
        setSelectedMenuId(selectedLocationId);
    }, [selectedLocationId, locationIdFromUrl, locations]);

    const selectedMenu = useMemo(() => {
        return menus.find((menu) => menu.locationId === selectedMenuId);
    }, [selectedMenuId, menus]);

    return {
        isLoading,
        selectedLocationId,
        selectedMenu,
        locations,
        setSelectedLocationId
    }
}

export default useMenuContentData;