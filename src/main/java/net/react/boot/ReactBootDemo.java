package net.react.boot;

import net.react.boot.domain.Character;
import net.react.boot.generator.Generator;
import net.react.boot.service.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.system.ApplicationPidFileWriter;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import javax.annotation.PostConstruct;

@SpringBootApplication
@EnableJpaRepositories
public class ReactBootDemo extends WebMvcConfigurerAdapter {

    private CharacterService itemService;

    private Generator<Character> generator;

    public static void main(String[] args) {
        SpringApplication reactBoot = new SpringApplication(ReactBootDemo.class);
        reactBoot.addListeners(new ApplicationPidFileWriter("app.pid"));
        reactBoot.run(args);
    }

    @PostConstruct
    public void initializeData()  {
       itemService.save(generator.generate());
    }

    @Bean
    public WebMvcConfigurerAdapter forwardToIndex() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addViewControllers(ViewControllerRegistry registry) {
                registry.addViewController("/{path:[^\\.]+}/**").setViewName("forward:index.html");
            }
        };
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
