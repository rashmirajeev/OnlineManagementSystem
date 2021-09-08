$(function() {
 
  $("form").validate({
	  rules: {
		  subDeptNm:{
			  required:true,
			  },
			status:
				{
				required:true,
				},
		  },
		  
	  messages:{
		  subDeptNm: {
		        required: "Please provide a subDepartment Name.",
		        
		      },
		  },
		  submitHandler: function(form) {
		      form.submit();
		    }
	  });
	  });