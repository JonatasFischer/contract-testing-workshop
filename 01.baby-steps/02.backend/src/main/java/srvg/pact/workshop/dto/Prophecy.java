package srvg.pact.workshop.dto;

import java.util.List;

public record Prophecy(
        String subject,
        List<Event> prophecy,
        long next,
        String state,
        boolean is_delta) {
}