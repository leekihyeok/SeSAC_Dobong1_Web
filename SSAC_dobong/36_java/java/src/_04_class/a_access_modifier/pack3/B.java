package _04_class.a_access_modifier.pack3;

public class B {
    public static void main(String[] args) {
        A a =new A();
        System.out.println(a.field1);
        System.out.println(a.field2);

        a.field1 = 11;
        a.field2 = 22;
        System.out.println(a.field2);
    }
}
