package net.react.boot.generator;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.StringUtils;

import java.util.List;

/**
 * Created by Jakub krhovják on 6/17/17.
 *
 */
public interface Generator<T> {

    List<T> generate();

    default String generateDescription(int round) {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(generateStringFirstUpperCase(generateValueFromTo(8, 15)));
        for(int i = 0; i < round; i++) {
            stringBuilder.append(StringUtils.SPACE)
                    .append(generateStringLowerCase(generateValueFromTo(6, 12)));
        }
        return stringBuilder.toString();
    }

    default String generateStringLowerCase(int charCount) {
        return RandomStringUtils.randomAlphabetic(charCount).toLowerCase();
    }

    default String generateStringFirstUpperCase(int charCount) {
        String generatedString = generateStringLowerCase(charCount);
        return Character.toUpperCase(generatedString.charAt(0)) + generatedString.substring(1);
    }

    default int generateValueFromTo(int from, int to) {
        return (int)(Math.random() * to) + from;
    }
}
