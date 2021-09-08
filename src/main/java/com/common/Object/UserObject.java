package com.common.Object;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity @Table(name="usermst")
public class UserObject implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "userId", updatable = false, nullable = false)
	private  Integer userId ;
	
	@Column(name="emailId")
	private  String emailId ;
	
	@Column(name="username")
	private  String userName ;
	
	@Column(name="pwd")
	private String pwd;

	public UserObject() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserObject(Integer userId, String emailId, String userName, String pwd) {
		super();
		this.userId = userId;
		this.emailId = emailId;
		this.userName = userName;
		this.pwd = pwd;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	
	

}
