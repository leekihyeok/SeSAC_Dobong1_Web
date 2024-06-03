package _04_class.practice.practice11;

abstract class Vehicle {
    private String name;
    private int maxSpeed;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMaxSpeed() {
        return maxSpeed;
    }

    public void setMaxSpeed(int maxSpeed) {
        this.maxSpeed = maxSpeed;
    }

    abstract void move();
}

interface Flyable {
    void fly();
}

class Car extends Vehicle {
    @Override
    void move() {
        System.out.println(getName() + " 도로를 따라 이동 중");
    }
}

class Airplane extends Vehicle implements Flyable {
    @Override
    void move() {
        System.out.println(getName() + " 하늘을 날아가는 중");
    }

    @Override
    public void fly() {
        System.out.println(getName() + " 고도 10,000피트에서 비행 중");
    }
}

public class Practice {
    public static void main(String[] args) {
        Vehicle[] vehicles = new Vehicle[2];

        Car car = new Car();
        car.setName("Toyota");
        vehicles[0] = car;

        Airplane airplane = new Airplane();
        airplane.setName("Boeing 747");
        vehicles[1] = airplane;

        for (Vehicle vehicle : vehicles) {
            vehicle.move();

            if (vehicle instanceof Flyable) {
                ((Flyable) vehicle).fly();
            }
        }
    }
}

