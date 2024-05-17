package _01_basic_syntax;

public class Casting {
    public static void main(String[] args) {
        /*
        * 1. 묵시적 형변환
        * 더 작은 타입에서 더 큰 타입을 "자동 변혼"
        * */
        int smallNum = 10;
        System.out.println(smallNum);
        double bigNum = smallNum;
        System.out.println(bigNum);

        /*
        * 2. 명시적 형변환
        * 더 큰 타입에서 더 작은 타입으로 "강제 변환"
        * */
        double anotherBigNum = 20.0;
        int anotherSmallNum = (int) anotherBigNum;
        int largeNum = 1000;
        byte smallByte = (byte) largeNum; // 데이터 손실이 일어날 수 있음
        System.out.println("small byte = " + smallByte);
        System.out.println("another small num byte = " + anotherSmallNum);

    }
}
