package _04_class.e_abstract;

public abstract class Shape {
    String color;
    public Shape(String color){
        this.color=color;
    }
    void Start(){
        System.out.println("도형을 그려보자");
    }

    public String getColor() {
        return this.color;
    }

    // 추상 메소드
    // - 중괄호 블록 없이 선언만 하면 됨
    // - 구현부는 자식클래스에서 오버라이딩을 통해 구현
    //   -> 자식 클래스에서 공통적으로 사용할 예정인 함수이지만, 구현부가 모두 다를 때 사용
    //   -> 선택적으로 오버라이딩을 하는 것이 아닌 모든 자식 클래스에서 오버라이딩 해야 함
    abstract void draw();
}
