package _04_class.a_access_modifier.pack4;

import _04_class.a_access_modifier.pack3.A;

public class C {
    public static void main(String[] args) {
        A a = new A();

        System.out.println(a.field1);
//        System.out.println(a.field2); -> public이 아니어서 안됨
    }
}
