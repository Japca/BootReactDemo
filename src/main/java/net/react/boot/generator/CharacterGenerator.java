package net.react.boot.generator;

import net.react.boot.ReactBootDemo;
import net.react.boot.domain.Character;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.File;
import java.net.URL;
import java.util.Arrays;
import java.util.Calendar;
import java.util.List;
import java.util.Random;

import static java.util.stream.Collectors.toList;

/**
 * Created by Jakub krhovják on 6/17/17.
 *
 */
@Component
public class CharacterGenerator implements Generator<Character> {

    @Value("${images.folder}")
    private String imagesFolder;

    @Value("${public.image.folder}")
    private String publicFolder;

    @Value("${email.sign}")
    private String emailSign;

    @Value("${dot}")
    private String dot;

    @Override
    public List<Character> generate() {
        return Arrays.stream(getImages().list())
                .map(imageName -> new Character(
                        publicFolder.concat(imageName),
                        generateName(20),
                        generateStringFirstUpperCase(generateValueFromTo(13, 18)),
                        generateDescription(generateValueFromTo(15, 25)),
                        generateEmail(),
                        Calendar.getInstance().getTime())
                        ).collect(toList());
    }

    public String generateName(int count) {
        int nameLength = count / 2;
        return new StringBuilder()
                .append(generateStringFirstUpperCase(nameLength))
                .append(StringUtils.SPACE)
                .append(generateStringFirstUpperCase(count))
                .toString();

    }

    public String generateEmail() {
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

    private File getImages() {
        URL url = ReactBootDemo.class.getClassLoader().getResource(imagesFolder);
        return new File(url.getPath());
    }

    public String generateImage() {
        File images = getImages();
        int index = new Random().nextInt(images.listFiles().length);
        return publicFolder.concat(images.listFiles()[index].getName());
    }
}
