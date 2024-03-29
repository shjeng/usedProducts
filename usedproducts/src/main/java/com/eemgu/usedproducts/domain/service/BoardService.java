package com.eemgu.usedproducts.domain.service;

import com.eemgu.usedproducts.domain.dto.request.board.GetSalesBoardRequestDto;
import com.eemgu.usedproducts.domain.dto.request.board.SalesBoardWriteRequestDto;
import com.eemgu.usedproducts.domain.dto.response.board.SalesBoardDetailResponseDto;
import com.eemgu.usedproducts.domain.dto.response.board.SalesBoardFavoriteResponseDto;
import com.eemgu.usedproducts.domain.dto.response.board.SalesBoardWriteResponseDto;
import org.springframework.http.ResponseEntity;

public interface BoardService {

    // get
    ResponseEntity<? super SalesBoardDetailResponseDto> getSalesBoardDetail(String email, Long boadId); // 판매 게시글 상세보기

    // post
    ResponseEntity<? super SalesBoardWriteResponseDto> postSalesBoardWrite(SalesBoardWriteRequestDto dto, String email);

    // put
    ResponseEntity<? super SalesBoardFavoriteResponseDto> putSalesBoardFavorite(Long boardId, String email);
}
