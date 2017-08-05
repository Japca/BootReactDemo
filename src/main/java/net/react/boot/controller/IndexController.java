package net.react.boot.controller;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Created by Jakub krhovják on 8/5/17.
 */
@Configuration
public class IndexController {


        @Bean
        public WebMvcConfigurerAdapter forwardToIndex() {
            return new WebMvcConfigurerAdapter() {
                @Override
                public void addViewControllers(ViewControllerRegistry registry) {
                    // forward requests to /admin and /user to their index.html
                    registry.addViewController("/{path:[^\\.]+}/**").setViewName(
                            "forward:index.html");
//                
                }
            };
        }



//    @RequestMapping("/")
//    public String index() {
//        return "src/main/resources/public/index.html";
//    }

}
