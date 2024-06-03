package _04_class.a_access_modifier.pack2;

import _04_class.a_access_modifier.pack1.B;

public class C {
//    A a; -> 접근 제한자 default를 가진 A 클래스에 접근할 수 없음
    B b; // 접근 제한자가 public을 가진 B 클래스, 어디서든, import 한다면 이용 가능
    /*
    * default 제한자인 A 클래스에서는 에러 발생;
    * public 제한자인 B에서는 정상 동작
    * 
    * */
}
