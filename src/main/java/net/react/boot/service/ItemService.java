package net.react.boot.service;

import net.react.boot.domain.Item;

import java.util.List;

/**
 * Created by Jakub krhovják (cor on 6/17/17.
 */
public interface ItemService {

    List<Item> findAll();

    Item save(Item item);

}
