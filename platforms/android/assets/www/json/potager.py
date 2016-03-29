import serial

ser = serial.Serial(port = '/dev/cu.usbmodem1411', baudrate = 9600)
f = open('humidite.json','w+')
try:
	while 1:
		line = ser.readline()
		if line: f.write(line)
except KeyboardInterrupt:
	f.close()
	ser.close()


