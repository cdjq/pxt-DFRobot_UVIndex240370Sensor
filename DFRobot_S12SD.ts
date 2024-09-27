enum dataType {
    //% block="Value"
    Value,
    //% block="Index"
    Index,
    //% block="RiskLevel"
    RiskLevel,
}
let I2CAddr = 0x23
let S12SD_INPUTREG_UVS_DATA = 0x06   ///<UVS data
let S12SD_INPUTREG_UVS_INDEX = 0x07   ///<UVS index
let S12SD_INPUTREG_RISK_LEVEL = 0x08   ///<RISK LEVEL 
/**
 * Custom blocks
 */
//% weight=100 color=#00F5FF icon="\uf185" block="DFRobot_S12SD"
namespace DFRobot_S12SD {
    /**
     * Read ultraviolet data
     * @param eType describe Data Type
     */
    //% block
    export function readUv(eType: dataType): number {
        let readBuffer
        let ret = 0
        switch (eType) {
            case dataType.RiskLevel:
                pins.i2cWriteNumber(I2CAddr, S12SD_INPUTREG_RISK_LEVEL, NumberFormat.Int8LE)
                readBuffer = pins.i2cReadBuffer(I2CAddr, 2)
                ret = ((readBuffer[1] << 8) | readBuffer[0]) & 0xFFFF
                break
            case dataType.Value:
                pins.i2cWriteNumber(I2CAddr, S12SD_INPUTREG_UVS_DATA, NumberFormat.Int8LE)
                readBuffer = pins.i2cReadBuffer(I2CAddr, 2)
                ret = ((readBuffer[1] << 8) | readBuffer[0]) & 0xFFFF
                break
            case dataType.Index:
                pins.i2cWriteNumber(I2CAddr, S12SD_INPUTREG_UVS_INDEX, NumberFormat.Int8LE)
                readBuffer = pins.i2cReadBuffer(I2CAddr, 2)
                ret = ((readBuffer[1] << 8) | readBuffer[0]) & 0xFFFF
                break
        }
        return ret
    }

}
