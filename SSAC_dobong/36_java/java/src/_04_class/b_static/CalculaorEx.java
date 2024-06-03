package _04_class.b_static;

public class CalculaorEx {
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 5;

        int plusResult = Calculator.plus(num1, num2);
        int minusResult = Calculator.minus(num1, num2);
        double circleArea = num1*num1*Calculator.pi;
        double circleLength = Calculator.circleFerence(num1);

        System.out.println("덧셈 값: " + plusResult);
        System.out.println("뺄셈 값: " + minusResult);
        System.out.println("원1의 넓이: " + circleArea);
        System.out.println("원1의 둘레: " + circleLength);
    }
}
