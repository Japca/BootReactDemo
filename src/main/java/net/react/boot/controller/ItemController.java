package net.react.boot.controller;

import net.react.boot.domain.Item;
import net.react.boot.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Jakub krhovják on 4/1/17.
 *
 */

@RestController
@CrossOrigin
public class ItemController {

    private ItemService itemService;

    @RequestMapping(path = "/items", method = RequestMethod.GET)
    public List<Item> items() {
       return itemService.findAll();
    }

    @Autowired
    public void setItemService(ItemService itemService) {
        this.itemService = itemService;
    }
}

