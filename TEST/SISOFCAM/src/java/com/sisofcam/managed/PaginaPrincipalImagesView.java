package com.sisofcam.managed;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;

@ManagedBean
public class PaginaPrincipalImagesView {
    
    private List<String> imageNumber;
    
    @PostConstruct
    public void init() {
        imageNumber = new ArrayList<>();
        for (int i = 0; i <= 2; i++) {
            imageNumber.add("image"+i+".jpg");
            
        }
        
    }

    public List<String> getImageNumber() {
        return imageNumber;
    }

    public void setImageNumber(List<String> imageNumber) {
        this.imageNumber = imageNumber;
    }
    
    

}
