package srvg.pact.workshop;

public class Prophecy {
    private final long id;
    private final String name;
    private final String datetime;

    public Prophecy(long id, String name, String datetime) {
        this.id = id;
        this.name = name;
        this.datetime = datetime;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDatetime() {
        return datetime;
    }
}