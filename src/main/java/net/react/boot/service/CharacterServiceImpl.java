package net.react.boot.service;

import net.react.boot.dao.CharacterDao;
import net.react.boot.domain.Character;
import net.react.boot.generator.CharacterGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.List;

/**
 * Created by Jakub krhovják on 6/17/17.
 *
 */

@Service
public class CharacterServiceImpl implements CharacterService {

    private CharacterDao characterDao;

    private CharacterGenerator characterGenerator;

    @Override
    public List<Character> findAll() {
        return characterDao.findAll();
    }

    @Override
    public Character save(Character character) {
        if(isNewCharacter(character)) {
            character.setImage(characterGenerator.generateImage());
        }

        if(character.getCreated() == null) {
            character.setCreated(Calendar.getInstance().getTime());
        }

        return characterDao.save(character);
    }

    private boolean isNewCharacter(Character character) {
        return character.getId() == null;
    }

    @Override
    public Long delete(Long id) {
        characterDao.delete(id);
        return id;
    }

    @Override
    public List<Character> save(List<Character> characters) {
        return characterDao.save(characters);
    }

    @Autowired
    public void setCharacterDao(CharacterDao characterDao) {
        this.characterDao = characterDao;
    }

    @Autowired
    public void setCharacterGenerator(CharacterGenerator characterGenerator) {
        this.characterGenerator = characterGenerator;
    }
}
