class Room {
    draft = false;
    exposure = '';
    humidity = '';
    id = undefined;
    name = '';
    temperature = '';

    fromPlain(plain) {
        const {
            draft,
            exposure,
            humidity,
            id,
            name,
            temperature,
        } = plain;

            this.draft = draft;
            this.exposure = exposure;
            this.humidity = humidity;
            this.id = id;
            this.name = name;
            this.temperature = temperature;

            return this;
    }
}

export default Room;
