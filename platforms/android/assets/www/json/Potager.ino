


int sensorValue;
int taux;

void setup() {
  // put your setup code here, to run once:
  pinMode(A0, INPUT);
  pinMode(2, INPUT);
  pinMode(6, OUTPUT);
  Serial.begin(9600);
}

  

void loop() {
  // put your main code here, to run repeatedly:
  sensorValue = analogRead(A0); 
  taux = digitalRead(2);
  Serial.println(taux);
  Serial.println(sensorValue);
  delay(100);
  if(taux == 1) {  //Si taux ets à l'état haut
    digitalWrite(6,HIGH);  //Mettre sous tension la LED
  }
  else{
    digitalWrite(6,LOW);
  }
  

}
