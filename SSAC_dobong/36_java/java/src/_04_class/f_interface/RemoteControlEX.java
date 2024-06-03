package _04_class.f_interface;

import _04_class.a_access_modifier.pack3.A;

public class RemoteControlEX {
    public static void main(String[] args) {
        RemoteControl rc;
        rc=null;

        rc=new Television();
        rc.turnOn();
        rc.setVolume(8);
        rc.turnOff();

        System.out.println("====================");

        rc=new Audio();
        rc.turnOn();
        rc.setVolume(15);
        rc.turnOff();
    }
}
