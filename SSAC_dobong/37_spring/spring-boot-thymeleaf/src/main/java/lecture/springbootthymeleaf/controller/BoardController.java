package lecture.springbootthymeleaf.controller;

import lecture.springbootthymeleaf.dto.PostDTO;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/restBoard")
public class BoardController {
    // 게시판 등록 post
    @PostMapping("/post")
    public String postBoard(@RequestBody PostDTO board) {
        return board.getTitle() + " 등록완료되었습니다.";
    }

    // 게시판 읽기 get
    @GetMapping("/get")
    public String getBoard() {
        String userid = "사용자";
        String title = "글제목";
        String content = "글내용";
        return userid + " 님의 글 => " + title + ": " + content;
    }

    // 게시판 수정 patch
    @PatchMapping("/patch/{userid}")
    public String patchBoard(@PathVariable String userid, @RequestBody PostDTO board) {
        return userid + "님의 글: " + board.getTitle() + " 수정완료!";
    }

    // 게시판 삭제 delete
    @DeleteMapping("/delete/{userid}")
    public String deleteBoard(@PathVariable String userid) {
        return userid + "님의 글 삭제 완료!";
    }

}
