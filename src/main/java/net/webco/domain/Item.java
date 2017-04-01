package net.webco.domain;

/**
 * Created by Jakub krhovják (cor on 4/1/17.
 *
 */
public class Item {

    private Long id;
    private String title;
    private String content;

    public Item() {}

    public Item(Long id, String title, String content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
