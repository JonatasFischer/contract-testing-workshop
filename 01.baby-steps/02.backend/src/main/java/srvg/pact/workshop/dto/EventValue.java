package srvg.pact.workshop.dto;

import java.util.List;

public record EventValue(
        String phase,
        int next_competition_id,
        String unified_competition_id,
        List<String> next_unified_event_ids,
        long next_betstop,
        int unique_tournament_id,
        int competition_id,
        List<Integer> event_ids,
        String next_unified_competition_id,
        long events_start_timestamp,
        List<String> unified_event_ids,
        List<Integer> next_event_ids){
}
