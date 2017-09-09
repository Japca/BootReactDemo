package net.react.boot;

import net.react.boot.domain.Character;
import net.react.boot.generator.Generator;
import net.react.boot.service.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.system.ApplicationPidFileWriter;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import javax.annotation.PostConstruct;

@SpringBootApplication
@EnableJpaRepositories
public class ReactBootDemo {

    private CharacterService itemService;

    private Generator<Character> generator;

    public static void main(String[] args) {
        SpringApplication reactBoot = new SpringApplication(ReactBootDemo.class);
        reactBoot.addListeners(new ApplicationPidFileWriter("app.pid"));
        reactBoot.run(args);
        ReactBootDemo.justTest();
    }

    public static void justTest() {

    }

    @PostConstruct
    public void initializeData()  {
       itemService.save(generator.generate());
    }

    @Autowired
    public void setItemService(CharacterService itemService) {
        this.itemService = itemService;
    }

    @Autowired
    public void setGenerator(Generator<Character> generator) {
        this.generator = generator;
    }
}
