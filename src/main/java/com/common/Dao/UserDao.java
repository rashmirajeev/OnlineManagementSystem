package com.common.Dao;

import com.common.Object.UserObject;

public interface UserDao {
	 public	void saveUsersObject(UserObject users);
	 public UserObject getUsersByUserName(String userName);
}
