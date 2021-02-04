class RoomPlain {
    roomId = undefined;
    roomName='';
    roomExposure='';
    roomTemperature='';
    roomHumidity='';

    fromPlain(plain) {
        const {
            id ,
            name,
            exposure,
            temperature,
            humidity,

        } = plain;

        this.roomId = id;
        this.roomName =name;
        this.roomExposure = exposure;
        this.roomTemperature = temperature;
        this.roomHumidity = humidity;

        return this;
    }

}
export default RoomPlain;
