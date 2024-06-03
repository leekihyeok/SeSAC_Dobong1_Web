package _04_class.f_interface.interfaceEx;

interface Move{
    void moveForward();
    void moveBackward();

}
interface Power{
    void powerOn ();
    void powerOff ();
}

interface Car extends Move,Power{
    void changeGear(int gear);
}
class Suv implements Car{
    @Override
    public void changeGear(int gear) {
        System.out.println("기어 변경: " + gear);
    }

    @Override
    public void moveForward() {
        System.out.println("전진");
    }

    @Override
    public void moveBackward() {
        System.out.println("후진");
    }

    @Override
    public void powerOn() {
        System.out.println("시동 켜기");
    }

    @Override
    public void powerOff() {
        System.out.println("시동 끄기");
    }
}
public class InterfaceEx01 {
    public static void main(String[] args) {

    }
}
