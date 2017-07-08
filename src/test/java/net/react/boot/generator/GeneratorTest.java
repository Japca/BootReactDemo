package net.react.boot.generator;

import net.react.boot.ReactBootDemoTests;
import org.apache.commons.lang3.StringUtils;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import java.util.regex.Pattern;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Created by Jakub krhovják on 7/8/17.
 *
 */
public class GeneratorTest extends ReactBootDemoTests {

    private static final int NAME_SIZE = 20;

    @Value("${public.image.folder}")
    private String publicFolder;

    private CharacterGenerator generator;

    private Pattern extensionPattern = Pattern.compile("\\.jpg|\\.png");

    @Test
    public void generateImagesTest() throws Exception {
        assertThat(generator.generate()).isNotEmpty();
    }

    @Test
    public void generateImageTest() {
        assertThat(generator.generateImage()).
                startsWith(publicFolder).
                containsPattern(extensionPattern);
    }

    @Test
    public void generateNameTest() throws Exception {
        assertThat(generator.generateName(NAME_SIZE)).
                contains(StringUtils.SPACE);
    }

    @Autowired
    public void setGenerator(CharacterGenerator generator) {
        this.generator = generator;
    }
}
