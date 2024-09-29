let I2CAddr = 0x23                   ///<I2C address
let S12SD_INPUTREG_UVS_DATA = 0x06   ///<UVS data
let S12SD_INPUTREG_UVS_INDEX = 0x07   ///<UVS index
let S12SD_INPUTREG_RISK_LEVEL = 0x08   ///<RISK LEVEL 
/**
 * DFRobot_S12SD blocks
 */
//% weight=100 color=#00F5FF icon="\uf185" block="DFRobot_S12SD"
namespace DFRobot_S12SD {
    export enum eDataType {
        //% block="Value"
        Value,
        //% block="Index"
        Index,
        //% block="RiskLevel"
        RiskLevel,
    }
    /**
     * Read ultraviolet data
     * @param eType describe Data Type
     */
    //% block="read UV %eType"
    export function readUv(eType: eDataType): number {
        let readBuffer
        let ret = 0
        switch (eType) {
            case eDataType.RiskLevel:
                pins.i2cWriteNumber(I2CAddr, S12SD_INPUTREG_RISK_LEVEL, NumberFormat.Int8LE)
                readBuffer = pins.i2cReadBuffer(I2CAddr, 2)
                ret = ((readBuffer[1] << 8) | readBuffer[0]) & 0xFFFF
                break
            case eDataType.Value:
                pins.i2cWriteNumber(I2CAddr, S12SD_INPUTREG_UVS_DATA, NumberFormat.Int8LE)
                readBuffer = pins.i2cReadBuffer(I2CAddr, 2)
                ret = ((readBuffer[1] << 8) | readBuffer[0]) & 0xFFFF
                break
            case eDataType.Index:
                pins.i2cWriteNumber(I2CAddr, S12SD_INPUTREG_UVS_INDEX, NumberFormat.Int8LE)
                readBuffer = pins.i2cReadBuffer(I2CAddr, 2)
                ret = ((readBuffer[1] << 8) | readBuffer[0]) & 0xFFFF
                break
        }
        return ret
    }
}
