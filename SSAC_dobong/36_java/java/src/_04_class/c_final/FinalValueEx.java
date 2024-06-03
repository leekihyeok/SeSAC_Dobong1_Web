package _04_class.c_final;

public class FinalValueEx {
    public static void main(String[] args) {
        final int Number = 10;
//        Number = 20; -> 안됨
        System.out.println(Number);
    }
}
