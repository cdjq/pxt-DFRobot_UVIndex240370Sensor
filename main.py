index = 0
level = 0
value = 0

def on_forever():
    global index, value, level
    index = DFRobot_S12SD.read_uv(dataType.INDEX)
    serial.write_string("index ")
    value = DFRobot_S12SD.read_uv(index)
    serial.write_line("" + str((index)))
    basic.pause(100)
    level = DFRobot_S12SD.read_uv(dataType.RISK_LEVEL)
    serial.write_string("level")
    serial.write_line("" + str((level)))
    basic.pause(100)
    value = DFRobot_S12SD.read_uv(dataType.VALUE)
    serial.write_string("value")
    serial.write_line("" + str((value)))
basic.forever(on_forever)
