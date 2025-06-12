# Step 1: Baby Steps

This example introduces a simple consumer and provider using Pact.

## Setup

1. **Start the Pact Broker**
   ```bash
   cd pact-broker
   docker compose up -d
   ```
2. **Run the provider**
   ```bash
   cd 02.backend
   ./gradlew bootRun
   ```
3. **Run the consumer tests**
   ```bash
   cd 01.frontend
   npm install
   npm test
   ```

Pact files are created in the `pacts` directory and can be published to the broker using the helper in the tests.
