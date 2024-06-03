package _04_class.practice.practice09;

import java.util.ArrayList;

abstract class Shape {
    private String color;
    private String type;

    public Shape(String color, String type) {
        this.color = color;
        this.type = type;
    }

    public String getColor() {
        return color;
    }

    public String getType() {
        return type;
    }

    public abstract double calculateArea();

    public abstract void printShapeInfo();
}

class Circle extends Shape {
    private double radius;

    public Circle(String color, double radius) {
        super(color, "원");
        this.radius = radius;
    }

    public double getRadius() {
        return radius;
    }

    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }

    @Override
    public void printShapeInfo() {
        System.out.println("=== Circle 도형의 정보 ===");
        System.out.println("도형의 색상: " + getColor());
        System.out.println("도형의 넓이: " + calculateArea());
    }
}

class Rectangle extends Shape {
    private double width;
    private double height;

    public Rectangle(String color, double width, double height) {
        super(color, "사각형");
        this.width = width;
        this.height = height;
    }

    public double getWidth() {
        return width;
    }

    public double getHeight() {
        return height;
    }

    @Override
    public double calculateArea() {
        return width * height;
    }

    @Override
    public void printShapeInfo() {
        System.out.println("=== Rectangle 도형의 정보 ===");
        System.out.println("도형의 색상: " + getColor());
        System.out.println("도형의 넓이: " + calculateArea());
    }
}

public class Practice {
    public static void main(String[] args) {
        ArrayList<Shape> shapes = new ArrayList<>();

        Circle circle1 = new Circle("Red", 5.0);
        Rectangle rectangle1 = new Rectangle("Blue", 4.0, 6.0);

        shapes.add(circle1);
        shapes.add(rectangle1);

        for (Shape shape : shapes) {
            shape.printShapeInfo();
            System.out.println();
        }
    }
}
