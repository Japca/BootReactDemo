package net.react.boot;

import net.react.boot.domain.Item;
import net.react.boot.generator.Generator;
import net.react.boot.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import javax.annotation.PostConstruct;

@SpringBootApplication
@EnableJpaRepositories
public class ReactBootDemo {

    private ItemService itemService;

    private Generator<Item> generator;

    public static void main(String[] args) {
        SpringApplication.run(ReactBootDemo.class, args);
    }

    @PostConstruct
    public void initializeData()  {
       itemService.save(generator.generate());
    }

    @Autowired
    public void setItemService(ItemService itemService) {
        this.itemService = itemService;
    }

    @Autowired
    public void setGenerator(Generator<Item> generator) {
        this.generator = generator;
    }
}
