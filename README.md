# pxt-dfrobot_s12sd

[这是一款紫外线检测模块]: https://www.dfrobot.com.cn/goods-1114.html

## Methods

```typescript
/**
* Read ultraviolet data
* @param eType describe Data Type
*/
DFRobot_S12SD.readUv(eType: eDataType): number
```

## Using this extension

点击齿轮，然后点击拓展，输入URL **https://github.com/cdjq/pxt-DFRobot_S12sd** 添加拓展。

## Using the extension

这个拓展用到了紫外线传感器来获取数据。请确保 `micro:bit` 与传感器正确连接。

### Read Number

```typescript
value = DFRobot_S12SD.readUv(DFRobot_S12SD.eDataType.Value)
index = DFRobot_S12SD.readUv(DFRobot_S12SD.eDataType.Index)
index = DFRobot_S12SD.readUv(DFRobot_S12SD.eDataType.RiskLevel)
```

## Testing

1. 编写测试程序

```typescript
let value = 0
let index = 0
let level = 0
basic.forever(function () {
    value = DFRobot_S12SD.readUv(DFRobot_S12SD.eDataType.Value)
    serial.writeNumber(value)
    index = DFRobot_S12SD.readUv(DFRobot_S12SD.eDataType.Index)
    serial.writeNumber(index)
    level = DFRobot_S12SD.readUv(DFRobot_S12SD.eDataType.RiskLevel)
    serial.writeNumber(level)
})
```

2. 下载到`micro:bit`中
3. `micro:bit`通过拓展板与传感器相连，同时`mocro:bit`通过`USB`与电脑相连
4. 把传感器放在有阳光或其他发出紫外线的区域，观察串口数据打印

## License

MIT

## Supported targets

for PXT/microbit (The metadata above is needed for package search.)
