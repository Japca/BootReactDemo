package net.webco.controller;

import net.webco.domain.Item;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Jakub krhovják (cor on 4/1/17.
 *
 */

@RestController
public class ItemController {

    public ItemController() {
        for (long i = 0; i < 3; i++) {
            items.add(new Item(i, "title_" + i, "content_" + i));
        }

    }


    private List<Item> items = new ArrayList<>();

    @RequestMapping(path = "/items", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Item> getItems() {
        return items;
    }

}
