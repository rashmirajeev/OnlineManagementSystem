package com.common.Controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.common.Dao.UserDao;
import com.common.Object.UserObject;

@Controller
public class LoginController {
	
	
	@Autowired
	private UserDao userDao;

	@RequestMapping(value = "/userLogin", method = RequestMethod.POST)
    public String loginUser(@RequestParam("emailId")String emailId, @RequestParam("passwordFn")String password, @ModelAttribute("user") UserObject userObject, HttpServletRequest request,Model model) {
    	HttpSession session = request.getSession();
    	userObject = userDao.getUsersByUserName(emailId);
    	
        if((userObject != null) && (password.equals(userObject.getPwd()) )) {
        	return "home";
        }
        else
        {
        	return "login";
        }
        
	}
}
