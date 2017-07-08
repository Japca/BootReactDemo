package net.react.boot.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

/**
 * Created by Jakub krhovják  on 4/1/17.
 *
 */
@Entity
//@RepositoryRestResource(collectionResourceRel = "characters", path = "characters")
public class Character {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String image;
    private String name;
    private String profession;
    private String description;
    private String email;
    private Date created;

    public Character() {
    }

    public Character(String image, String name, String profession, String description, String email, Date created) {
        this.image = image;
        this.name = name;
        this.profession = profession;
        this.description = description;
        this.email = email;
        this.created = created;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }
}
