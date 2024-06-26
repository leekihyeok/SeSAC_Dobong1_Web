package _04_class.b_static;

/*
* 정적 멤버
*  - 인스턴스를 생성할 필요 없이 바로 접근 가능
*    - new ClassName을 통해서 객체를 생성할 필요가 있음
*  - 정적 메소드와 정적 블록은 객체가 없어도 실행 가능하므로, 내부에 인스턴스 필드나 메소드 사용 불가능
*  - this 사용 불가능
* */
public class Calculator {
    static double pi = 3.141592;

    static int plus(int x, int y){
        return x+y;
    }
    static int minus(int x, int y){
        if(x>y){
            return x-y;
        } else {
            return y-x;
        }
    }

    static double circleFerence(int r){
        return 2*r*pi;
    }

    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 5;

        int plusResult = plus(num1, num2);
        int minusResult = minus(num1, num2);
        double circleArea = num1*num1*pi;
        double circleLength = circleFerence(num1);

        System.out.println("덧셈 값: " + plusResult);
        System.out.println("뺄셈 값: " + minusResult);
        System.out.println("원1의 넓이: " + circleArea);
        System.out.println("원1의 둘레: " + circleLength);
    }
}
