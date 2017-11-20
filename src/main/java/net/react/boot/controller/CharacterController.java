package net.react.boot.controller;

import net.react.boot.domain.Character;
import net.react.boot.service.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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
public class CharacterController {

    private CharacterService characterService;

    @RequestMapping(path = "/characters", method = RequestMethod.GET)
    public List<Character> characters() {
        return characterService.findAll();
    }

    @RequestMapping(value = "/character", method = RequestMethod.POST)
    public Character saveCharacter(@RequestBody Character character) {
         return characterService.save(character);
    }

    @RequestMapping(value = "/character/{id}", method = RequestMethod.DELETE)
    public Long deleteCharacter(@PathVariable Long id) {
        return characterService.delete(id);
    }


    @Autowired
    public void setCharacterService(CharacterService characterService) {
        this.characterService = characterService;
    }
}
