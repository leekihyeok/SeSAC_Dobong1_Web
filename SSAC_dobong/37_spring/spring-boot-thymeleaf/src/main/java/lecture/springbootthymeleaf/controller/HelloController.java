package lecture.springbootthymeleaf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class HelloController {
    // localhost:8080/hi
    @GetMapping("/hi")
    public String hello(Model model) {
        Hello hello = new Hello();
        String[] fruits = {"apple", "banana", "kiwi", "peach"};
        model.addAttribute("msg", "hello");
        model.addAttribute("msg2", "<strong>안녕?</strong>");
        model.addAttribute("age", 17);
        model.addAttribute("userType", "Admin");
        model.addAttribute("fruits", fruits);
        model.addAttribute("url", "https://codingon.co.kr/partner/sesac_dobong_1st");
        model.addAttribute("hello", hello);
        return "hi";
    }

    @GetMapping("/pra/1")
    public String prac01(Model model) {
        model.addAttribute("age", 17);
        return "practice";
    }

    @GetMapping("/pra/2")
    public String prac02(Model model) {
        List<Person> people = new ArrayList<>();
        people.add(new Person("rekey", 28));
        people.add(new Person("bumsoo", 25));
        people.add(new Person("billy", 37));
        people.add(new Person("googoo", 99));
        model.addAttribute("people", people);
        return "practice2";
    }

    class Person {
        private String name;
        private int age;

        public String getName() {
            return name;
        }

        public int getAge() {
            return age;
        }

        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }

    }

    class Hello {
        private String msg = "hi";

        public String getMsg() {
            return msg;
        }
    }

}
