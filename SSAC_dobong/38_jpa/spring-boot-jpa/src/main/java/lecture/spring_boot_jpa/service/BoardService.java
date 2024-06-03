package lecture.spring_boot_jpa.service;

import lecture.spring_boot_jpa.dto.BoardDTO;
import lecture.spring_boot_jpa.entity.BoardEntity;
import lecture.spring_boot_jpa.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    public void createPost(BoardDTO boardDto) {
        BoardEntity post = BoardEntity.builder()
                .userid(boardDto.getUserid())
                .title(boardDto.getTitle())
                .content(boardDto.getContent())
                .build();
        boardRepository.save(post);
    }

    public Optional<BoardEntity> getPost(int id) {
        return boardRepository.findById(id);
    }

    public List<BoardEntity> getAllPosts() {
        return boardRepository.findAll();
    }

    public void updatePost(int id, BoardDTO boardDto) {
        Optional<BoardEntity> optionalPost = boardRepository.findById(id);
        System.out.println("ab  " + id);
        if (optionalPost.isPresent()) {

            BoardEntity post = optionalPost.get();
            System.out.println("abcd  " + post.getId());
            post.setTitle(boardDto.getTitle());
            post.setContent(boardDto.getContent());
            boardRepository.save(post);
        }
    }

    public void deletePost(int id) {
        boardRepository.deleteById(id);
    }
}
