package net.react.boot.generator;

import net.react.boot.ReactBootDemo;
import net.react.boot.domain.Item;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.File;
import java.net.URL;
import java.util.LinkedList;
import java.util.List;

/**
 * Created by Jakub krhovják on 6/17/17.
 *
 */
@Component
public class ItemGenerator implements Generator<Item> {

    @Value("${images.folder}")
    private String imagesFolder;

    @Value("${public.image.folder}")
    private String publicFolder;

    @Override
    public List<Item> generate() {
        URL url = ReactBootDemo.class.getClassLoader().getResource(imagesFolder);
        File images = new File(url.getPath());

        List<Item> items = new LinkedList<>();
        for (String imageName: images.list()) {
            items.add(new Item(publicFolder.concat(imageName),
                    generateString(10),
                    generateString(20),
                    generateString(200),
                    generateString(20)));
        }
        return items;
    }

}
