package lecture.spring_boot_jpa.controller;

import lecture.spring_boot_jpa.dto.BoardDTO;
import lecture.spring_boot_jpa.entity.BoardEntity;
import lecture.spring_boot_jpa.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/board")
public class BoardController {

    @Autowired
    private BoardService boardService;

    // 게시판 목록 보기
    @GetMapping("/list")
    public String list(Model model) {
        List<BoardEntity> boards = boardService.getAllPosts();
        model.addAttribute("boards", boards);
        return "board/list";
    }

    // 게시판 상세 보기
    @GetMapping("/view/{id}")
    public String view(@PathVariable int id, Model model) {
        Optional<BoardEntity> board = boardService.getPost(id);
        model.addAttribute("board", board.orElse(null));
        return "board/view";
    }

    // 게시판 등록 페이지
    @GetMapping("/new")
    public String newBoard(Model model) {
        model.addAttribute("boardDto", new BoardDTO());
        return "board/new";
    }

    // 게시판 등록 처리
    @PostMapping("/post")
    public String postBoard(@ModelAttribute BoardDTO boardDto) {
        boardService.createPost(boardDto);
        return "redirect:/board/list";
    }

    // 게시판 수정 페이지
    @GetMapping("/edit/{id}")
    public String edit(@PathVariable int id, Model model) {
        Optional<BoardEntity> board = boardService.getPost(id);
        if (board.isPresent()) {
            model.addAttribute("boardDto", new BoardDTO(board.get()));
            return "board/edit";
        } else {
            return "redirect:/board/list";
        }
    }

    // 게시판 수정 처리
    @PostMapping("/update/{id}")
    public String updateBoard(@PathVariable int id, @ModelAttribute BoardDTO boardDto) {
        boardService.updatePost(id, boardDto);
        return "redirect:/board/list";
    }

    // 게시판 삭제 처리
    @GetMapping("/delete/{id}")
    public String deleteBoard(@PathVariable int id) {
        boardService.deletePost(id);
        return "redirect:/board/list";
    }
}
