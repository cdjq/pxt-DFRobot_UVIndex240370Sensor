let index = 0
let level = 0
let value = 0
basic.forever(function () {
    index = DFRobot_S12SD.readUv(dataType.Index)
serial.writeString("index ")
    serial.writeLine("" + (index))
    basic.pause(100)
    level = DFRobot_S12SD.readUv(dataType.RiskLevel)
serial.writeString("level")
    serial.writeLine("" + (level))
    basic.pause(100)
    value = DFRobot_S12SD.readUv(dataType.Value)
serial.writeString("value")
    serial.writeLine("" + (value))
})
