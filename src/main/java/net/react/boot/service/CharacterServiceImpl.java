package net.react.boot.service;

import net.react.boot.dao.CharacterDao;
import net.react.boot.domain.Character;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Jakub krhovják on 6/17/17.
 *
 */

@Service
public class CharacterServiceImpl implements CharacterService {

    private CharacterDao characterDao;

    @Override
    public List<Character> findAll() {
        return characterDao.findAll();
    }

    @Override
    public Character save(Character character) {
        return characterDao.save(character);
    }

    @Override
    public List<Character> save(List<Character> characters) {
        return characterDao.save(characters);
    }

    @Autowired
    public void setCharacterDao(CharacterDao characterDao) {
        this.characterDao = characterDao;
    }
}
