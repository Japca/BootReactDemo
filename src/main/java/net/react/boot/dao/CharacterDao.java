package net.react.boot.dao;

import net.react.boot.domain.Character;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Jakub krhovják on 6/16/17.
 *
 */
public interface CharacterDao extends JpaRepository<Character, Long> {

}
