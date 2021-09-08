<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
 <%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
 <%@ taglib uri="http://www.springframework.org/tags/form" prefix="f"%>
<%@ page import="java.text.SimpleDateFormat" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Home Page</title>
	 
	 <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/test.css"/>
	 <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/bootstrap.min.css"/>
	 <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/jquery-ui.min.css"/>
	 <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery.min.js"></script>
	 <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery.dataTables.min.js"></script>
	 <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/popper.js"></script>
	 <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/bootstrap.min.js"></script>
	 <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/validate.js"></script>
	 <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/validationRules.js"></script>
	 <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/dms.js"></script>
	 <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/canvas.js"></script>
	 <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery-ui.min.js"></script>
	 <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/font-awesome/css/font-awesome.css"/>
	 <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/dms.css"/>
	
</head>
<body>
 <div class="wrapper">
  <div class="header">
       <div class="row">
                <div class="col-lg-2 col-md-2 col-sm-2">
                	<%--  <a href="home"><img src="${pageContext.request.contextPath}/resources/images/Official_Logo_of_PCMC.jpeg" class="img-responsive img-fluid" style="width:60%;height:80px;" /></a>--%>
                </div>
              <div class="col-lg-4 col-md-4 col-sm-4" style="width:100%;height:60px;font-weight:bold;">
			          SCHOOL MANAGEMENT SYSTEM
			 </div> 
			 
			 
			<%--  <div class="col-lg-4 col md-4 col-sm-4">
			 		 <lable>Date</lable> : <%= new SimpleDateFormat("dd MMMM yyyy").format(new java.util.Date()) %> 
			 </div> --%>
       </div>
   

