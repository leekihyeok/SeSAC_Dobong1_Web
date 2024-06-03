package lecture.springbootthymeleaf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class IntroduceController {
    @GetMapping("/introduce/{name}")
    public String introduce(@PathVariable String name, Model model) {
        model.addAttribute("name", name);
        return "introduce";
    }

    // 두 번째 요청 처리: /introduce2
    @GetMapping("/introduce2")
    public String introduce2(@RequestParam(value = "name") String name, @RequestParam(value = "age", required = false) Integer age, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "introduce2";
    }
}
