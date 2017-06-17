package net.react.boot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by Jakub krhovják on 4/1/17.
 *
 */
@Controller
@RequestMapping("/")
public class IndexController {


    @RequestMapping(method = RequestMethod.GET)
    public String index(Model model) {
        return "forward:index.html";
    }

    //headers = "Access-Control-Allow-Origin: http://localhost:8080"


}
