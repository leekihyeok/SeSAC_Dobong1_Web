package _04_class.f_interface;

public interface RemoteControl {
    // interface는 추상 메소드를 포함해야 함
    // abstract를 붙히지 않아도 자동으로 abstract로 되어있음
    // (추상크래스에서는 생략 불가)
    public void turnOn();
    public void turnOff();
    public void setVolume(int volume);

    // 상수필드
    // - 상수 외의 필드 선언 불가
    int MAX_VOLUME=10; // java 인터페이스에서 선언된 필드는 기본적으로 [static final] 특성을 가짐
    // -> static final을 붙이지 않아도 컴파일러가 자동을 추가
    static final int MIN_VOLUME=0;
}
