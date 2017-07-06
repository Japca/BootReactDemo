package net.react.boot.controller;

import net.react.boot.domain.Character;
import net.react.boot.service.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
        return character;
 //       return itemService.save(character);
    }

    @Autowired
    public void setCharacterService(CharacterService characterService) {
        this.characterService = characterService;
    }
}

