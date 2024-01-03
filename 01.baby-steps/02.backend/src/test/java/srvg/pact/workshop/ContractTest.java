package srvg.pact.workshop;

import au.com.dius.pact.provider.junit.Provider;
import au.com.dius.pact.provider.junit.loader.PactFolder;
import au.com.dius.pact.provider.junit5.PactVerificationInvocationContextProvider;
import au.com.dius.pact.provider.spring.junit5.MockMvcTestTarget;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.TestTemplate;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

@Provider("SportEventStatusProphecyProducer")
@PactFolder("pacts")
@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
public class ContractTest {

    @Autowired
    private MockMvc mockMvc;

    @BeforeEach
    void before() {
        MockMvcTestTarget testTarget = new MockMvcTestTarget();
        testTarget.setControllers(new SportEventStatusController());
        testTarget.setMockMvc(mockMvc);
    }

    @TestTemplate
    @ExtendWith(PactVerificationInvocationContextProvider.class)
    void pactVerificationTestTemplate() {}
}
