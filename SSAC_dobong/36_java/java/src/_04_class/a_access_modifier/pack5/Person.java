package _04_class.a_access_modifier.pack5;

public class Person {
    // 필드: age, name - private
    private int age;
    private String name;

    // 생성자(int age, String name) - public
    public Person(int age, String name){
        this.age = age;
        this.name = name;
    }

    // 모든 필드에 대한 getter, setter - public
    // name에 대한 getter, setter
    public String getName() {
        return this.name;
    }
    public void setName(String name) {
        this.name = name;
    }

    // age에 대한 getter, setter
    public int getAge() {
        return this.age;
    }
    public void setAge(int age) {
        if( age < 0) {
            this.age = 0;
            return;
        } else {
            this.age= age;
        }
    }
}
