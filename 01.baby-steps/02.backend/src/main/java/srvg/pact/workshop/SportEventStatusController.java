package srvg.pact.workshop;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SportEventStatusController {

    @GetMapping("/sporteventstatus")
    public Prophecy getProphecy() {
        return new Prophecy(1, "Test Data 2", "2024-01-03T17:07:21.066Z");
    }
}