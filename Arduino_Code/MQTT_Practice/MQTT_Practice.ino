#include <WiFi.h>
#include <WiFiClient.h>
#include <PubSubClient.h>

const char* ssid       = "rempside";
const char* password   = "Rubyisthebest1";

const char* mqtt_server = "192.168.86.85";


void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0;i<length;i++) {
    Serial.print((char)payload[i]);
  }
  Serial.println();
}

WiFiClient espClient;
PubSubClient client(espClient);

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Attempt to connect
    if (client.connect("arduinotest1")) {
      Serial.println("connected");

      
      client.subscribe("SensorData");
      
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }
}



void setup()
{
  Serial.begin(115200);
  
  //connect to WiFi
  Serial.printf("Connecting to %s ", ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
      delay(500);
      Serial.print(".");
  }
  
  client.setServer(mqtt_server, 1883);
  
  client.setCallback(callback);

  
  //Connect to MQTT
  //Subscribe to Topic
  //Handle messages

  
  Serial.println(" CONNECTED");
  
}

void loop()
{

  if (!client.connected()) {
    reconnect();
  }
  client.publish("SensorData", "arduino connected");

  client.loop();

  
  delay(1000);

  
  
}