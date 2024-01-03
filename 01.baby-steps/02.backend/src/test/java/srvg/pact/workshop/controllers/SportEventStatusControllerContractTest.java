package srvg.pact.workshop.controllers;

import org.apache.hc.core5.http.HttpRequest;
import au.com.dius.pact.core.model.RequestResponseInteraction;
import au.com.dius.pact.provider.junit5.HttpTestTarget;
import au.com.dius.pact.provider.junit5.PactVerificationContext;
import au.com.dius.pact.provider.junit5.PactVerificationInvocationContextProvider;
import au.com.dius.pact.provider.junitsupport.Provider;
import au.com.dius.pact.provider.junitsupport.State;
import au.com.dius.pact.provider.junitsupport.loader.PactBroker;
import au.com.dius.pact.provider.junitsupport.loader.VersionSelector;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.TestTemplate;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

@Provider("SportEventStatusProphecyProducer")
@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@PactBroker(url = "https://pactbroker.gaming-nonprod.sportradar.online/")
@VersionSelector()
class SportEventStatusControllerContractTest {

    @LocalServerPort
    int port;

    @Autowired
    private MockMvc mockMvc;

    @State("initial-prophecy")
    void initializeState1() {
        //initialize the data to provide the expected result

    }

    @BeforeEach
    void before(PactVerificationContext context) {
        HttpTestTarget testTarget = new HttpTestTarget("localhost", this.port);
        context.setTarget(testTarget);
    }

    @TestTemplate
    @ExtendWith(PactVerificationInvocationContextProvider.class)
    void pactVerificationTestTemplate(PactVerificationContext context, HttpRequest request) {
        context.verifyInteraction();
        var interaction = ((RequestResponseInteraction) context.getInteraction());
        System.out.println(interaction.getResponse().getBody().valueAsString());


    }
}
