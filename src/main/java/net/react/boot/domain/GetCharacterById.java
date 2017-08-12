package net.react.boot.domain;

import io.vavr.Tuple;
import io.vavr.Tuple2;

/**
 * Created by Jakub krhovják on 8/12/17.
 */
public class GetCharacterById {

    Tuple2<Long, Character> character;

    public GetCharacterById(Character character) {
        this.character =  Tuple.of(character.getId(), character);
    }

    public Tuple2<Long, Character> getCharacter() {
        return character;
    }

    public void setCharacter(Tuple2<Long, Character> character) {
        this.character = character;
    }
}
