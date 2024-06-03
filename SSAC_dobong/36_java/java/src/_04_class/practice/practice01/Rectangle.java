package _04_class.practice.practice01;

import java.util.Scanner;

public class Rectangle {
    // 필드 선언
    private int width;
    private int height;

    // 생성자
    public Rectangle(int width, int height) {
        this.width = width;
        this.height = height;
    }

    // 사각형의 넓이를 계산하여 반환하는 메소드
    public int area() {
        return width * height;
    }

    // 메인 메소드 (테스트용)
    public static void main(String[] args) {
        System.out.println("사각형의 가로와 세로 길이를 띄어쓰기 기준으로 입력해주세요.");
        Scanner sc = new Scanner(System.in);
        int width = sc.nextInt();
        int height = sc.nextInt();

        Rectangle rect = new Rectangle(width, height);

        System.out.println("사각형의 넓이: " + rect.area());
    }
}
