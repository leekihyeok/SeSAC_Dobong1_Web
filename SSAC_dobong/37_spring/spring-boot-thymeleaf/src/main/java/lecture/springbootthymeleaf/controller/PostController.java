package lecture.springbootthymeleaf.controller;

import lecture.springbootthymeleaf.vo.UserVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class PostController {


    @GetMapping("/form")
    public String form(Model model) {
        List<Integer> years = new ArrayList<>();
        for (int year = 1950; year <= 2023; year++) {
            years.add(year);
        }

        List<Integer> months = new ArrayList<>();
        for (int month = 1; month <= 12; month++) {
            months.add(month);
        }

        List<Integer> days = new ArrayList<>();
        for (int day = 1; day <= 31; day++) {
            days.add(day);
        }

        model.addAttribute("years", years);
        model.addAttribute("months", months);
        model.addAttribute("days", days);
        return "practicePost";
    }

    @PostMapping("/submitForm")
    public String submitForm(
            @RequestParam String name,
            @RequestParam String gender,
            @RequestParam String birthYear,
            @RequestParam String birthMonth,
            @RequestParam String birthDay,
            @RequestParam(value = "interest", required = false) String[] interests,
            Model model) {
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        model.addAttribute("birthDate", birthYear + "-" + birthMonth + "-" + birthDay);
        model.addAttribute("interests", interests != null ? String.join(",", interests) : "없음");
        return "result";
    }


    @PostMapping("/submit")
    @ResponseBody
    public String join(@RequestBody UserVO user) {
        return user.getName() + "회원가입 성공";
    }

}
