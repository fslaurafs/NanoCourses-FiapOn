void setup() {
  pinMode(10, OUTPUT);
  Serial.begin(115200);
}

void loop() {
  int valorRecebido;
  
  if(Serial.available()) {
    valorRecebido = Serial.read();

    if(valorRecebido == '0') {
      digitalWrite(10, LOW);
    } else {
      digitalWrite(10, HIGH);
    }
  }
}
