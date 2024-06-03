package _04_class.c_final;

public class FinalUpgrade {
    public static void main(String[] args) {
        FinalMethod obj = new FinalMethod();
        obj.showMsg();
        SubClass obj2 = new SubClass();
        obj2.showMsg();
    }
}
class FinalMethod{
    final void showMsg(){
        System.out.println("final이 붙은 이 메소드는 오버라이딩 할 수 없습니다.");
    }
}

class SubClass extends FinalMethod {
    // 메소드 재정의
//    void sho
}

// ======================================
// 클래스 final 키워드 사용 가능
final class FinalClass{ }
// 클래스에 final이 붙은 경우에는 자식 클래스 상속 불가
//class SubClass2 extends FinalClass{}
