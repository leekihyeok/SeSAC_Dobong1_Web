package _04_class.a_access_modifier.pack5;

public class PersonEx {
    public static void main(String[] args) {
        Person p1 = new Person(29, "LeeGiHyeok");
        Person p2 = new Person(28, "MyLove");

        System.out.println("p1의 이름: "+p1.getName());
        System.out.println("p1의 나이: "+p1.getAge());

        System.out.println("p2의 이름: "+p2.getName());
        System.out.println("p2의 나이: "+p2.getAge());

        p2.setAge(-10);
        System.out.println("p2의 나이: "+p2.getAge());

        p2.setAge(20);
        System.out.println("p2의 나이: "+p2.getAge());


    }
}
