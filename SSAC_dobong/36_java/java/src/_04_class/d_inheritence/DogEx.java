package _04_class.d_inheritence;

import _04_class.a_access_modifier.pack3.A;

public class DogEx {
    public static void main(String[] args) {
        Dog cute = new Dog();
        cute.sayHello();
        cute.fetch();
        System.out.println("----dog class makeSound----");
        cute.makeSound("멍멍");

        // 부모 클래스로 인스턴스 생성
        Animal cat = new Animal();
        System.out.println("----animal class makeSound----");
        cat.makeSound("야옹");

    }
}
