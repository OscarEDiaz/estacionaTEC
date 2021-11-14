import paho.mqtt.publish as publish
import random
import string

# Data is sen to a Channel located in ThingSpeak
# Provide your own credentials to access ThingSpeak
# For any comments please contact torresc@tec.mx

# The ThingSpeak Channel ID. It mus be created before
# in ThingSpeak
# Replace <YOUR-CHANNEL-ID> with your channel ID.
channel_ID = "1570334"

# The hostname of the ThingSpeak MQTT broker.
mqtt_host = "mqtt3.thingspeak.com"

# Your MQTT credentials for the registered device
mqtt_client_ID = "LQkwBScTNgE2DDICJzksAg4"
mqtt_username  = "LQkwBScTNgE2DDICJzksAg4"
mqtt_password  = "OxrBcMNQsjs8TtFJnBVJ0ASA"

t_transport = "websockets"
t_port = 80

# Create the topic string.
topic = "channels/" + channel_ID + "/publish"

while (True):
    x = random.randint(0,1)
    y = random.randint(0,1)
    z = random.randint(0,1)
    a = random.randint(0,1)
    b = random.randint(0,1)
    c = random.randint(0,1)
    d = random.randint(0,1)
    e = random.randint(0,1)
    
    # build the payload string. Two data values are sent
    # to the Channel in field1 and field2
    payload = "field1=" + str(x) + "&field2=" + str(y) + "&field3=" + str(z) + "&field4=" + str(a) + "&field5=" + str(b) + "&field6=" + str(c) + "&field7=" + str(d) + "&field8=" + str(e)

    # attempt to publish this data to the topic.
    try:
        print ("Writing Payload = ", payload," to host: ", mqtt_host, " clientID= ", mqtt_client_ID, " User ", mqtt_username, " PWD ", mqtt_password)
        publish.single(topic, payload, hostname=mqtt_host, transport=t_transport, port=t_port, client_id=mqtt_client_ID, auth={'username':mqtt_username,'password':mqtt_password})
    except (keyboardInterrupt):
        break
    except Exception as e:
        print (e)
