# ticketing-app
Microservices approach for a ticketing app

# For creating a SECRET inside my kubernetes NODE so that all my # pods can get access to it through ENV_VAR

kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf

# http://localhost:8222/streaming/channelsz?subs=1 ----> NATS-STREAMING-SERVER HEALTH CHECK

# Schedule message or schedule delay implemented by an Event Bus BUT Nats Streaming Server does not have this feature


# kubectl create secret generic stripe-secret --from-literal STRIPE_KEY=stripe_real_secret_key