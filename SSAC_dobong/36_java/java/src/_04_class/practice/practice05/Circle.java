package _04_class.practice.practice05;

import java.util.Scanner;

public class Circle {
    // 상수 선언
    public static final double PI = 3.141592653589793;

    // 필드 선언 (final로 설정하여 변경 불가능)
    private final double radius;

    // 생성자
    public Circle(double radius) {
        this.radius = radius;
    }

    // 반지름 값을 반환하는 메소드 (getter)
    public double getRadius() {
        return radius;
    }

    // 원의 넓이를 계산하여 반환하는 메소드
    public double calculateArea() {
        return PI * radius * radius;
    }

    // 메인 메소드 (테스트용)
    public static void main(String[] args) {
        // Circle 객체 생성
        Scanner sc = new Scanner(System.in);
        System.out.print("원의 반지름을 입력하세요: ");
        double radius = sc.nextInt();

        Circle circle = new Circle(radius);
        // 반지름과 넓이를 출력
        System.out.println("원의 반지름: " + circle.getRadius());
        System.out.println("원의 넓이: " + circle.calculateArea());
    }
}

