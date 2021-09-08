package com.common.DaoImpl;



import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.common.Dao.UserDao;
import com.common.Object.UserObject;

@Repository
@Transactional
public class UserDaoImpl implements UserDao{

	@Autowired
	private SessionFactory sessionFactory;

	public void saveUsersObject(UserObject users) {
		sessionFactory.getCurrentSession().save(users);
		
	}

	public UserObject getUsersByUserName(String emailId) {
		UserObject usersObject = (UserObject) sessionFactory.getCurrentSession().createQuery("From UserObject where emailid =: emailId").setParameter("emailId", emailId).uniqueResult();
		return usersObject;
	}
	
	

}
