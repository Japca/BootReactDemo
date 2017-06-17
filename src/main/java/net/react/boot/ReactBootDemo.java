package net.react.boot;

import net.react.boot.domain.Item;
import net.react.boot.service.ItemService;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import javax.annotation.PostConstruct;

@SpringBootApplication
@EnableJpaRepositories
public class ReactBootDemo {

    private static final int INIT_ITEM_COUNT = 10;

    private ItemService itemService;

    public static void main(String[] args) {
        SpringApplication.run(ReactBootDemo.class, args);
    }

    @PostConstruct
    public void initializeData() {
        for (int i = 0; i < INIT_ITEM_COUNT; i++) {
            itemService.save(new Item(generate(10), generate(100), generate(50), generate(20)));
        }
    }

    private String generate(int charCount) {
        return RandomStringUtils.randomAlphabetic(charCount);
    }


    @Autowired
    public void setItemService(ItemService itemService) {
        this.itemService = itemService;
    }
}
