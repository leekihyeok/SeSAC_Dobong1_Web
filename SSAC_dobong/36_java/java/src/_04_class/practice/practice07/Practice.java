package _04_class.practice.practice07;

class Vehicle {
    private String brand;
    private String model;
    private int year;

    public Vehicle(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    public int getYear() {
        return year;
    }

    public void drive() {
        System.out.println("차량 시동을 걸었습니다.");
    }

    public void stop() {
        System.out.println("차량을 정지했습니다.");
    }

    @Override
    public String toString() {
        return "brand='" + brand + "', model='" + model + "', year=" + year;
    }
}

class Bus extends Vehicle {
    private int passengerCapacity;

    public Bus(String brand, String model, int year, int passengerCapacity) {
        super(brand, model, year);
        this.passengerCapacity = passengerCapacity;
    }

    public int getPassengerCapacity() {
        return passengerCapacity;
    }

    @Override
    public void drive() {
        System.out.println("승객을 운송합니다.");
    }

    @Override
    public String toString() {
        return "Bus {" + super.toString() + ", passengerCapacity=" + passengerCapacity + "}";
    }
}

class Car extends Vehicle {
    private boolean convertible;

    public Car(String brand, String model, int year, boolean convertible) {
        super(brand, model, year);
        this.convertible = convertible;
    }

    public boolean isConvertible() {
        return convertible;
    }

    @Override
    public void drive() {
        System.out.println("자동차를 운전합니다.");
    }

    @Override
    public String toString() {
        return "Car {" + super.toString() + ", convertible=" + convertible + "}";
    }
}

class Motorcycle extends Vehicle {
    private String licenseType;

    public Motorcycle(String brand, String model, int year, String licenseType) {
        super(brand, model, year);
        this.licenseType = licenseType;
    }

    public String getLicenseType() {
        return licenseType;
    }

    @Override
    public void drive() {
        System.out.println("오토바이를 운전합니다.");
    }

    @Override
    public String toString() {
        return "Motorcycle {" + super.toString() + ", licenseType='" + licenseType + "'}";
    }
}

public class Practice {
    public static void main(String[] args) {
        Bus bus = new Bus("Hyundai", "City Bus", 2022, 30);
        Car car = new Car("Toyota", "Camry", 2023, true);
        Motorcycle motorcycle = new Motorcycle("Harley-Davidson", "Sportster", 2021, "A");

        System.out.println("=== Bus 정보 ===");
        System.out.println(bus);
        bus.drive();
        bus.stop();

        System.out.println("\n=== Car 정보 ===");
        System.out.println(car);
        car.drive();
        car.stop();

        System.out.println("\n=== Motorcycle 정보 ===");
        System.out.println(motorcycle);
        motorcycle.drive();
        motorcycle.stop();
    }
}
