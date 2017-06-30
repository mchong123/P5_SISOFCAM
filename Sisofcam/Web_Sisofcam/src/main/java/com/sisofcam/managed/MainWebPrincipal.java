
package com.sisofcam.managed;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.inject.Named;
import javax.enterprise.context.Dependent;


@Named(value = "mainWebPrincipal")
@Dependent
public class MainWebPrincipal {

 private List<String> images;
     
    @PostConstruct
    public void init() {
        images = new ArrayList<String>();
        for (int i = 0; i <= 3; i++) {
            images.add("image" + i + ".jpg");
        }
    }
 
    public List<String> getImages() {
        return images;
    }
    
}
