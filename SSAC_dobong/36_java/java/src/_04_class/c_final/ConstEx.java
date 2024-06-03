package _04_class.c_final;

public class ConstEx {
    public static void main(String[] args) {
        System.out.println(Const.MAX_VALUE);
        System.out.println(Const.GREETING);
//        Const.MAX_VALUE = 200; // 다시 할당 불가능

        System.out.println(Const.MIN_VALUE);
        Const.MIN_VALUE = 50;
        System.out.println(Const.MIN_VALUE);

//        System.out.println(Const.name); // 접근 불가능 -> 객체 생성해야 가능
        Const info = new Const();
        System.out.println(info.name);
    }
}
