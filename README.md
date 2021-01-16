# ticketing-app
Microservices approach for a ticketing app

# For creating a SECRET inside my kubernetes NODE so that all my # pods can get access to it through ENV_VAR

kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf

# http://localhost:8222/streaming/channelsz?subs=1 ----> NATS-STREAMING-SERVER HEALTH CHECK
