package srvg.pact.workshop.controllers;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import srvg.pact.workshop.dto.Event;
import srvg.pact.workshop.dto.EventValue;
import srvg.pact.workshop.dto.Prophecy;

import java.util.List;

@RestController
public class SportEventStatusController {

    @GetMapping("/sporteventstatus")
    public Prophecy getProphecy() {
        EventValue v1 = new EventValue("live-invalid", 1465009, "vf:season:1465009", List.of("vf:match:135858817"), 1704304860000L, 38973, 1465009, List.of(135858816), "vf:season:1465009", 1704304690000L, List.of("vf:match:135858816"), List.of(135858817));
        Event event1 = new Event(1704304680000L, v1);

        EventValue v2 = new EventValue("post-invalid", 1465009, "vf:season:1465009", List.of("vf:match:135858817"), 1704304860000L, 38973, 1465009, List.of(135858816), "vf:season:1465009", 1704304690000L, List.of("vf:match:135858816"), List.of(135858817));
        Event event2 = new Event(1704304780000L, v2);

        EventValue v3 = new EventValue("pre", 1465009, "vf:season:1465009", List.of("vf:match:135858818"), 1704304860000L, 38973, 1465009, List.of(135858817), "vf:season:1465009", 1704304870000L, List.of("vf:match:135858817"), List.of(135858818));
        Event event3 = new Event(1704304800000L, v3);

        EventValue v4 = new EventValue("live", 1465009, "vf:season:1465009", List.of("vf:match:135858818"), 1704305040000L, 38973, 1465009, List.of(135858817), "vf:season:1465009", 1704304870000L, List.of("vf:match:135858817"), List.of(135858818));
        Event event4 = new Event(1704304860000L, v4);

        Prophecy prophecy = new Prophecy("invalid-subject", List.of(event1, event2, event3, event4), 0L, "active", false);

        return prophecy;
    }
}