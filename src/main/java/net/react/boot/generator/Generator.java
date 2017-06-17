package net.react.boot.generator;

import org.apache.commons.lang3.RandomStringUtils;

import java.util.List;

/**
 * Created by Jakub krhovják on 6/17/17.
 *
 */
public interface Generator<T> {

    List<T> generate();

    default String generateString(int charCount ) {
        return RandomStringUtils.randomAlphabetic(charCount).replaceAll("[eEaAD]", " ");
    }

}
