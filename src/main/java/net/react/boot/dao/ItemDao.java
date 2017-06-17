package net.react.boot.dao;

import net.react.boot.domain.Item;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Jakub krhovják (cor on 6/16/17.
 */
public interface ItemDao extends JpaRepository<Item, Long> {
}
