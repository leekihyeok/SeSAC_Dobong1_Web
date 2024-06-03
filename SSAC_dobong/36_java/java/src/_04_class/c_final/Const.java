package _04_class.c_final;

public class Const {
    public static final int MAX_VALUE = 100;
    public static final String GREETING = "Hello, world!";

    // only static
    static int MIN_VALUE = 0; // 수정이 가능

    // only final
    // - 인스턴스에 속해있는 변수
    final String name = "rekey";
}
