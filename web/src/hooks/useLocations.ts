import { getLocations } from "@/lib/data";
import { LocationInfo } from "@/types";
import { useEffect, useState } from "react";

const useLocations = () => {
    const [locations, setLocations] = useState<LocationInfo[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadLocations = async () => {
            try {
                const locationsData = await getLocations();
                setLocations(locationsData);
            } catch (error) {
                console.error('Error loading locations:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadLocations();
    }, []);

    return { locations, isLoading };
}

export default useLocations;