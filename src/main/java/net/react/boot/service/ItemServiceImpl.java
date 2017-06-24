package net.react.boot.service;

import net.react.boot.dao.ItemDao;
import net.react.boot.domain.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Jakub krhovják on 6/17/17.
 *
 */

@Service
public class ItemServiceImpl implements ItemService {

    private ItemDao itemDao;

    public List<Item> findAll() {
        return itemDao.findAll();
    }

    public Item save(Item item) {
        return itemDao.save(item);
    }

    public List<Item> save(List<Item> items) {
        return itemDao.save(items);
    }

    @Autowired
    public void setItemDao(ItemDao itemDao) {
        this.itemDao = itemDao;
    }
}
