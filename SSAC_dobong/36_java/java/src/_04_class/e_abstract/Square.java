package _04_class.e_abstract;

public class Square extends Shape{
    private String type;
    public Square(String type, String color){
        super(color);
        this.type = type;
    }
    void draw(){
        System.out.println(getType()+" 그리기");
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    void showType(){
        System.out.printf("사각형의 종류는 %s 입니다.\n", type);
    }
}
