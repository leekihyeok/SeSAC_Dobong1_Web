package lecture.spring_boot_jpa.dto;

import lecture.spring_boot_jpa.entity.BoardEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class BoardDTO {
    private int id;
    private String userid;
    private String title;
    private String content;

    // Public constructor
    public BoardDTO(int id, String userid, String title, String content) {
        this.id = id;
        this.userid = userid;
        this.title = title;
        this.content = content;
    }

    // Default constructor
    public BoardDTO() {}

    // Constructor to create BoardDTO from BoardEntity
    public BoardDTO(BoardEntity boardEntity) {
        this.id = boardEntity.getId();
        this.userid = boardEntity.getUserid();
        this.title = boardEntity.getTitle();
        this.content = boardEntity.getContent();
    }
}
