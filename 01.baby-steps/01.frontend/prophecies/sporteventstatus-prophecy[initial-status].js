const { Matchers } = require('@pact-foundation/pact');
const { like, term } = Matchers;

const version = "1.0.3";
const prophecy = {
    "subject": "vwmf:38973:123695:competition:1465009:match:135858816:sporteventstatus",
    "prophecy": [
        {
            "t": 1704304680000,
            "v": {
                "phase": "live",
                "next_competition_id": 1465009,
                "unified_competition_id": "vf:season:1465009",
                "next_unified_event_ids": [
                    "vf:match:135858817"
                ],
                "next_betstop": 1704304860000,
                "unique_tournament_id": 38973,
                "competition_id": 1465009,
                "event_ids": [
                    135858816
                ],
                "next_unified_competition_id": "vf:season:1465009",
                "events_start_timestamp": 1704304690000,
                "unified_event_ids": [
                    "vf:match:135858816"
                ],
                "next_event_ids": [
                    135858817
                ]
            }
        },
        {
            "t": 1704304780000,
            "v": {
                "phase": "post",
                "next_competition_id": 1465009,
                "unified_competition_id": "vf:season:1465009",
                "next_unified_event_ids": [
                    "vf:match:135858817"
                ],
                "next_betstop": 1704304860000,
                "unique_tournament_id": 38973,
                "competition_id": 1465009,
                "event_ids": [
                    135858816
                ],
                "next_unified_competition_id": "vf:season:1465009",
                "events_start_timestamp": 1704304690000,
                "unified_event_ids": [
                    "vf:match:135858816"
                ],
                "next_event_ids": [
                    135858817
                ]
            }
        },
        {
            "t": 1704304800000,
            "v": {
                "phase": "pre",
                "next_competition_id": 1465009,
                "unified_competition_id": "vf:season:1465009",
                "next_unified_event_ids": [
                    "vf:match:135858818"
                ],
                "next_betstop": 1704304860000,
                "unique_tournament_id": 38973,
                "competition_id": 1465009,
                "event_ids": [
                    135858817
                ],
                "next_unified_competition_id": "vf:season:1465009",
                "events_start_timestamp": 1704304870000,
                "unified_event_ids": [
                    "vf:match:135858817"
                ],
                "next_event_ids": [
                    135858818
                ]
            }
        },
        {
            "t": 1704304860000,
            "v": {
                "phase": "live",
                "next_competition_id": 1465009,
                "unified_competition_id": "vf:season:1465009",
                "next_unified_event_ids": [
                    "vf:match:135858818"
                ],
                "next_betstop": 1704305040000,
                "unique_tournament_id": 38973,
                "competition_id": 1465009,
                "event_ids": [
                    135858817
                ],
                "next_unified_competition_id": "vf:season:1465009",
                "events_start_timestamp": 1704304870000,
                "unified_event_ids": [
                    "vf:match:135858817"
                ],
                "next_event_ids": [
                    135858818
                ]
            }
        }
    ],
    "next": 1704304870000,
    "state": "active",
    "is_delta": false
}
const interaction = {
    given: 'an initial  prophecy',
    uponReceiving: 'a request for data',
    withRequest: {
        method: 'GET',
        path: '/sporteventstatus'
    },
    willRespondWith: {
        status: 200,
        body: like(prophecy)
    }
}

module.exports = { prophecy, interaction };
