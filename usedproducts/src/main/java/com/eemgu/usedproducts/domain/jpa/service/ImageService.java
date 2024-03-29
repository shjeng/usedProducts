package com.eemgu.usedproducts.domain.jpa.service;

import com.eemgu.usedproducts.domain.entity.ImageEntity;
import com.eemgu.usedproducts.domain.entity.SalesBoard;
import com.eemgu.usedproducts.domain.jpa.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
@RequiredArgsConstructor
public class ImageService {
    private final ImageRepository imageRepository;

    public List<ImageEntity> findBySalesBoard(SalesBoard salesBoard){
        return imageRepository.findBySalesBoard(salesBoard);
    }
    public void saveAll(List<ImageEntity> images){
        imageRepository.saveAll(images);
    }

}
