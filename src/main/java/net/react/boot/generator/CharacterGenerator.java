package net.react.boot.generator;

import net.react.boot.domain.Character;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Calendar;
import java.util.List;
import java.util.Random;

import static java.util.stream.Collectors.toList;

/**
 * Created by Jakub krhovják on 6/17/17.
 */
@Component
public class CharacterGenerator implements Generator<Character> {

    private org.slf4j.Logger log = LoggerFactory.getLogger(getClass());

    @Value("${images.folder}")
    private String imagesFolder;

    @Value("${public.image.folder}")
    private String publicFolder;

    @Value("${email.sign}")
    private String emailSign;

    @Value("${dot}")
    private String dot;

    private ResourceLoader resourceLoader;

    List<String> pictures = Arrays.asList(
            "elliot.jpg", "elyse.png", "helen.jpg", "jenny.jpg", "justen.jpg", "kristy.png", "daniel.jpg",
            "matthew.png", "molly.png", "steve.jpg", "stevie.jpg", "veronika.jpg");

    @Override
    public List<Character> generate() {
        return pictures.stream()
                .map(imageName -> new Character(
                        publicFolder.concat(imageName),
                        generateName(20),
                        generateStringFirstUpperCase(generateValueFromTo(13, 18)),
                        generateDescription(generateValueFromTo(15, 25)),
                        generateEmail(),
                        Calendar.getInstance().getTime())
                ).collect(toList());
    }

    String generateName(int count) {
        int nameLength = count / 2;
        return new StringBuilder()
                .append(generateStringFirstUpperCase(nameLength))
                .append(StringUtils.SPACE)
                .append(generateStringFirstUpperCase(count))
                .toString();

    }

    private String generateEmail() {
        return new StringBuilder()
                .append(generateStringLowerCase(generateValueFromTo(4, 7)))
                .append(dot)
                .append(generateStringLowerCase(generateValueFromTo(5, 10)))
                .append(emailSign)
                .append(generateStringLowerCase(generateValueFromTo(4, 6)))
                .append(dot)
                .append(generateStringLowerCase(generateValueFromTo(2, 3)))
                .toString();
    }

    public String generateImage() {
        int index = new Random().nextInt(pictures.size());
        return publicFolder.concat(pictures.get(index));
    }
}
