package com.eemgu.usedproducts.domain.dto.Object;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Setter
public class SalesBoardDetailDto {
    private List<String> categorys;
    private String address;
    private String title;
    private String content;
    private boolean salesCompleted;
    private LocalDateTime writeDateTime;
    private List<String> salesBoardImages;
}
