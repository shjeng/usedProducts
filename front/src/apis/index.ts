import axios from "axios";
import { ResponseDto } from "./response";
import { GetNicknameDuplChk, PostEmailAuthChkDto, PostEmailAuthDto, PostSignInResponseDto, PostSignUpResponseDto } from "./response/auth";
import { EmailAuthChkRequestDto, EmailAuthRequestDto, SignInRequestDto, SignUpRequestDto } from "./request/auth";
import { error } from "console";
import { PostSalesBoardWriteResponseDto, SalesBoardDetailResponseDto, SalesBoardFavoriteChkResponseDto } from "./response/board";
import { SalesBoardWriteRequestDto } from "./request/board";
import { GetUserResponseDto } from "./response/user";

const DOMAIN = 'http://localhost:8080';
const API_DOMAIN = `${DOMAIN}/api`;
const authorization = (accessToken: string) => {
  return {headers: {Authorization: `Bearer ${accessToken}`}}
}
// ========================== get ========================== // 
// 닉네임 중복 요청
const NICK_NAME_DUPLE_CHK = (nickname: string) => `${API_DOMAIN}/auth/nickname-check?nickname=${nickname}`;
export const nicknameDupleChk = async(nickname: string) => {
  const result = await axios.get(NICK_NAME_DUPLE_CHK(nickname))
      .then(response => {
          const responseBody: GetNicknameDuplChk = response.data;
          return responseBody;
      })
      .catch(error => {
        if(!error.response) return null;
        const responseBody: ResponseDto = error.requestBody.data;
        return responseBody;
      })
  return result;
}
// 판매 게시물 상세 보기 
const SALES_BOARD_DETAIL = (email: string, boardId: string) => `${API_DOMAIN}/board/get-sales-board?boardId=${boardId}&email=${email}`;
export const salesBoardDetailRequest = async(email:string, boardId: string) => {
  const result = await axios.get(SALES_BOARD_DETAIL(email,boardId))
      .then(response => {
        const responseBody:SalesBoardDetailResponseDto = response.data;
        return responseBody;
      })
      .catch(error => {
        if(!error.response) return null;
        const responseBody: ResponseDto = error.response.data;
        return responseBody;
      })
  return result;
}
// 회원 정보 가져오기 
const GET_USER = () => `${API_DOMAIN}/user`;
export const getUser = async(accessToken:string) => {
  const result = await axios.get(GET_USER(),authorization(accessToken))
      .then(response=>{
        const responseBody:GetUserResponseDto = response.data;
        return responseBody;
      })
      .catch(error=>{
        if(!error) return null;
        const responseBody:ResponseDto = error.response.data;
        return responseBody;
      })
  return result;
}
// ========================== post ========================== // 
// 이메일 인증 요청 
const SIGN_UP_EMAIL_AUTH_URL = () => `${API_DOMAIN}/auth/sign-up/email-auth`;
export const signUpEmailAuthRequest = async (requestBody: EmailAuthRequestDto) => {
  const result = await axios.post(SIGN_UP_EMAIL_AUTH_URL(),requestBody)
      .then(response => {
        const responseBody: PostEmailAuthDto = response.data ;
        return responseBody;
      })
      .catch(error => {
        if(!error.response) return null;
        const responseBody: ResponseDto = error.response.data;
        return responseBody;
      })
  return result;
}
// 이메일 인증 확인
const SIGN_UP_EMAIL_AUTH_CHK_URL = () => `${API_DOMAIN}/auth/sign-up/email-auth-chk`;
export const signUpEmailAuthChkRequest = async(requestBody: EmailAuthChkRequestDto) => {
  const result = await axios.post(SIGN_UP_EMAIL_AUTH_CHK_URL(),requestBody)
      .then(response => {
        const responseBody: PostEmailAuthChkDto = response.data;
        return responseBody;
      })
      .catch(error => {
        if(!error.response) return null;
        const responseBody: ResponseDto = error.response.data;
        return responseBody;
      })
  return result;
}
// 회원가입
const SIGN_UP = () => `${API_DOMAIN}/auth/sign-up`;
export const signUpRequest = async (requestBody: SignUpRequestDto) => {
  const result = await axios.post(SIGN_UP(), requestBody)
      .then(response => {
        const responseBody: PostSignUpResponseDto = response.data;
        return responseBody;
      })
      .catch(error => {
        if(!error.response) return null;
        const responseBody: ResponseDto = error.response.data;
        return responseBody;
      })
  return result;
}
// 로그인
const SIGN_IN = () => `${API_DOMAIN}/auth/sign-in`;
export const signInRequest = async(requestBody: SignInRequestDto) => {
  const result = await axios.post(SIGN_IN(),requestBody)
      .then(response => {
        const responseBody: PostSignInResponseDto  = response.data;
        return responseBody;
      })
      .catch(error => {
        if(!error.response) return null;
        const responseBody: ResponseDto = error.response.data;
        return responseBody;
      })
  return result;
}
// 판매 게시물 작성
const SALES_BOARD_WRITE = () => `${API_DOMAIN}/board/sales`;
export const salesBoardWriteRequest = async(requestBody:SalesBoardWriteRequestDto,accessToken:string) => {
  const result = await axios.post(SALES_BOARD_WRITE(),requestBody,authorization(accessToken))
      .then(response => {
        const responseBody: PostSalesBoardWriteResponseDto = response.data;
        return responseBody;
      })
      .catch(error => {
        if(!error.response) return null;
        const responseBody: ResponseDto = error.response.data;
        return responseBody;
      })
  return result;
}
// ============ put ============ //
const SALES_BOARD_FAVORITE_CHK = () => `${API_DOMAIN}/board/favorite`;
export const salesBoardFavoriteChkRequest = async(boardId: string, accessToken: string) => {
  const result = await axios.put(SALES_BOARD_FAVORITE_CHK(),{"boardId":boardId}, authorization(accessToken))
    .then(response => {
      const responseBody: SalesBoardFavoriteChkResponseDto = response.data;
      return responseBody;
    })
    .catch(error=>{
      if(!error) return null;
      const responseBody : ResponseDto = error.response.data;
      return responseBody;
    })
    return result;
}




// 파일 업로드 
const FILE_UPLOAD_URL = () => `${DOMAIN}/file/upload`;
const headers = (accessToken:string) =>{
  return {headers:
    {'Content-Type':'multipart/form-data',
    'Authorization': `Bearer ${accessToken}`}
  }; // 헤더 설정
}
export const fileUploadRequest = async(data:FormData,accessToken:string) => {
  const result = await axios.post(FILE_UPLOAD_URL(),data,headers(accessToken))
      .then(response=>{
        const responseBody: string = response.data;
        return responseBody;
      })
      .catch(error => {
        return null;
      });
  return result;

}
