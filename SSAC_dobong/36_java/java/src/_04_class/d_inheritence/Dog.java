package _04_class.d_inheritence;

public class Dog extends Animal{
    @Override // 어노테이션 새량 가능
    // 오버라이딩시 함수의 이름, 반환 타입 인자의 개수와 타입이 같아야 함.
    void makeSound(String t){
        System.out.println(super.name); // 부모 필드에 접근
        super.makeSound(t); // 부모 필드에 접근
    }

    // 자식 클래스 메소드 추가
    void fetch(){
        System.out.println("공 가져와!!!!!!");
    }

    /*
    * Overriding: 상속이 일어났을 때 자식 클래스에서 메소드를 재정의 하는 것
    * - 부모 메소드 재정의 시, 내용의 일부만 변경되더라도 처읍부터 다시 정의
    * - 이 때, super를 이용하면 내용을 그대로 가져올 수 있음
    * - super.mehtod(): 숨겨진 부모 메소드를 호출
    * */
}
