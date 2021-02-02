class Plant {
    blooming = false;
    categoryId = undefined;
    categorySlug = '';
    difficulty = 0;
    fertilizingInterval = undefined;
    id = undefined;
    lastFertilized = undefined;
    lastWatered = undefined;
    name = '';
    requiredExposure = '';
    requiredHumidity = '';
    requiredTemperature = '';
    roomId = undefined;
    wateringInterval = undefined;
 
    fromPlain(plain) {
        const {
            blooming,
            category,
            category_slug,
            difficulty,
            fertilizing_interval,
            id,
            last_fertilized,
            last_watered,
            name,
            required_exposure,
            required_humidity,
            required_temperature,
            room,
            watering_interval,
        } = plain;

        this.blooming = blooming;
        this.categoryId = category;
        this.categorySlug = category_slug;
        this.difficulty = difficulty;
        this.fertilizingInterval = fertilizing_interval;
        this.id = id;
        this.lastFertilized = last_watered;
        this.lastWatered = last_fertilized;
        this.name = name;
        this.requiredExposure = required_exposure;
        this.requiredHumidity = required_humidity;
        this.requiredTemperature = required_temperature;
        this.roomId = room;
        this.wateringInterval = watering_interval;

        return this;
    }
    
}

export default Plant;