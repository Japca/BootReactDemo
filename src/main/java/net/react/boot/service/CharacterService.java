package net.react.boot.service;

import net.react.boot.domain.Character;

import java.util.List;

/**
 * Created by Jakub krhovják on 6/17/17.
 */
public interface CharacterService {

    List<Character> findAll();

    Character save(Character character);

    List<Character> save(List<Character> characters);

}
