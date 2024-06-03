package _04_class.practice.practice02;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Rectangle {

    private int width;
    private int height;
    Rectangle(int width) {
        this.width = width;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    int area() {
        return width * height;
    }
    // Rectangle class
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
                    System.out.println("세로로 길이는: " + re.getHeight());
                    System.out.println("넓이는: " + re.area());
                    System.out.println("---------------------");
                }
                return;
            }
            Rectangle rec = new Rectangle(width);
            rec.setHeight(height);
            array.add(rec);
        }
    }

}

