package _04_class.practice.practice06;

public class Practice {

    public static class Animal {
        private String species;
        private String name;
        private int age;

        public Animal(String species, String name, int age) {
            this.species = species;
            this.name = name;
            this.age = age;
        }

        public String getSpecies() {
            return species;
        }

        public void setSpecies(String species) {
            this.species = species;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public int getAge() {
            return age;
        }

        public void setAge(int age) {
            this.age = age;
        }

        public void makeSound() {
            System.out.println("동물은 소리를 낸다");
        }
    }

    public static class Cat extends Animal {
        private boolean isIndoor; // 고유 속성

        public Cat(String name, int age, boolean isIndoor) {
            super("고양이", name, age);
            this.isIndoor = isIndoor;
        }

        public boolean isIndoor() {
            return isIndoor;
        }

        public void setIndoor(boolean isIndoor) {
            this.isIndoor = isIndoor;
        }

        @Override
        public void makeSound() {
            System.out.println("고양이는 야옹 소리를 낸다");
        }

        public void scratch() {
            System.out.println(getName() + "가 긁고 있습니다.");
        }
    }

    public static class Dog extends Animal {
        private String breed;

        public Dog(String name, int age, String breed) {
            super("강아지", name, age);
            this.breed = breed;
        }

        public String getBreed() {
            return breed;
        }

        public void setBreed(String breed) {
            this.breed = breed;
        }

        @Override
        public void makeSound() {
            System.out.println("강아지는 멍멍 소리를 낸다");
        }

        public void fetch() {
            System.out.println(getName() + "가 물건을 가져옵니다.");
        }
    }

    public static void main(String[] args) {
        Animal animal = new Animal("강아지", "멍멍이", 3);
        System.out.println("종: " + animal.getSpecies());
        System.out.println("이름: " + animal.getName());
        System.out.println("나이: " + animal.getAge());
        animal.makeSound();

        Cat cat = new Cat("나비", 2, true);
        Dog dog = new Dog("바둑이", 3, "시바견");

        System.out.println("\n고양이 정보:");
        System.out.println("이름: " + cat.getName());
        System.out.println("나이: " + cat.getAge());
        System.out.println("실내 고양이 여부: " + cat.isIndoor());
        cat.makeSound();
        cat.scratch();

        System.out.println("\n강아지 정보:");
        System.out.println("이름: " + dog.getName());
        System.out.println("나이: " + dog.getAge());
        System.out.println("품종: " + dog.getBreed());
        dog.makeSound();
        dog.fetch();
    }
}
