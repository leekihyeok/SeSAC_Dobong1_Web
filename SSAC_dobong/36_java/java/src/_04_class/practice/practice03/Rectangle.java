package _04_class.practice.practice03;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Rectangle {
    // 인스턴스 필드
    private int width;
    private int height;

    // 정적 필드: 인스턴스의 개수를 추적
    private static int instanceCount = 0;

    // 생성자
    Rectangle(int width) {
        this.width = width;
        instanceCount++;  // 새로운 인스턴스가 생성될 때마다 증가
    }

    // width 필드의 getter
    public int getWidth() {
        return width;
    }

    // width 필드의 setter
    public void setWidth(int width) {
        this.width = width;
    }

    // height 필드의 getter
    public int getHeight() {
        return height;
    }

    // height 필드의 setter
    public void setHeight(int height) {
        this.height = height;
    }

    // 사각형의 넓이를 계산하여 반환하는 메소드
    int area() {
        return width * height;
    }

    // 정적 메소드: 생성된 Rectangle 인스턴스의 개수를 반환
    public static int getInstanceCount() {
        return instanceCount;
    }

    // 메인 메소드
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Rectangle> array = new ArrayList<>();
        while (true) {
            System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요.");
            int width = sc.nextInt();
            int height = sc.nextInt();
            if (width == 0 && height == 0) {
                for (Rectangle re : array) {
                    System.out.println("가로 길이는: " + re.getWidth());
                    System.out.println("세로 길이는: " + re.getHeight());
                    System.out.println("넓이는: " + re.area());
                    System.out.println("---------------------");
                }
                // 생성된 Rectangle 인스턴스의 개수 출력
                System.out.println("Rectangle 인스턴스의 개수: " + Rectangle.getInstanceCount());
                return;
            }
            Rectangle rec = new Rectangle(width);
            rec.setHeight(height);
            array.add(rec);
        }
    }
}
