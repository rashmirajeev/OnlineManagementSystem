<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="f"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
 <head>
	 <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
	 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	 <title>Header Page</title>
	 
	 <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/jquery.dataTables.min.css"/>
	 <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/bootstrap.min.css"/>
	 
	 <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery.min.js"></script>
	 <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/popper.js"></script>
	 <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/bootstrap.min.js"></script>
	 <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/validate.js"></script>
	 <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/validationRules.js"></script>
	 
	 <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery.dataTables.min.js"></script>
	 <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/dms.js"></script>
	 
	 <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/font-awesome/css/font-awesome.css"/>
	 <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/dms.css"/>
 </head>
 <body>
 <div class="wrapper">
	<div class="headerLogin">
       <div class="row">
       <%--  <div class="col-lg-2 col-md-2 col-sm-2">
              <a href="home"> <img src="${pageContext.request.contextPath}/resources/images/Official_Logo_of_PCMC.jpeg" class="img-responsive img-fluid" style="width:60%;height:80px;"/></a>
        </div> --%>
     </div>
     <!-- end of header -->
  	</div>
    <!-- start of main body -->
    <div class="content">
      <div class="clsHeight">
  	  	
  	  	<div class="row" style="padding-top:50px;">
	     	<div class="col-md-8 offset-md-4">
       		</div>
	       <!-- Button trigger modal -->
	        <div class="box">
				<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
					Click for Login
				</button>
			</div>
			<!-- Modal -->
			<div class="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="popup">
					<div class="modal-dialog" role="document">
		    			<div class="modal-content">
				      		<div class="modal-header" style="background-color:#4682B4;">
					        	<h4 class="modal-title" id="exampleModalLabel">Login Here</h4>
						        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
						          <span aria-hidden="true">&times;</span>
						        </button>
				      		</div>
			      			<div class="modal-body">
						        <form class="form" action="userLogin" method="post" name="loginForm">
					                 <div class="form-group">
					                    <label class="col-lg-5 control-label fa fa-user"> User Name</label>
					                     <div class="col-lg-7">
					                     	<input type="text" class="form-control" placeholder="Login Id" name="emailId" id="emailId"/>
					                     </div>
					                 </div>
					                 <div class="form-group">
					                     <label class="col-lg-5 control-label fa fa-unlock-alt"> Password</label>
					                     <div class="col-lg-7">
					                         <input type="password" class="form-control" placeholder="Password" name="passwordFn" id="passwordFn"/>
					                     </div>
					                 </div>
					                 <div class="form-group">
					                     <div class="col-lg-8">
					                        <a href="forgotPassword" ><i class="fa fa-unlock"></i> Forgot Password ?</a>
					                     </div>
					                 </div>
					                 <div class="form-group last">
					                     <div class="col-lg-offset-4 col-lg-8">
					                         <input type="submit" class="btn btn-info" value="Login">
					                         <input type="reset" class="btn btn-info" value="Reset">
					                     </div>
					                 </div>
					            </form>
			      			</div>
		    			</div>
		    		</div>
		  		</div>
			</div>
     	</div>
      </div>
    </div>
   <!-- end of main body -->

<style>
body {
  /**background: url(http://www.shukatsu-note.com/wp-content/uploads/2014/12/computer-564136_1280.jpg) no-repeat;**/
  background-size: cover;
  height: 100vh;
}

.box {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  background: rgba(255,255,255,0.2);
  padding: 15px;
  border: 2px solid #fff;
  border-radius: 20px/50px;
  background-clip: padding-box;
  text-align: center;
}

.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 40%;
  position: relative;
  transition: all 5s ease-in-out;
}
</style>

