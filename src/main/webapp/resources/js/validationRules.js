// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
    	emailId: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      passwordFn: {
        required: true,
        minlength: 4
      },
      deptNm:{
    	  required: true,
          maxlength: 100
      },
      subDeptNm:{
    	  required: true,
          maxlength: 100
      },
      desigNm:{
    	  required: true,
          maxlength: 100
      },
      classNm:{
    	  required: true,
          maxlength: 200
      },
      deptId:{
    	  required: true,
      },
      userId:{
    	  required: true,
      },
      subDeptId:{
    	  required: true,
      },
     
      "configCompositeKey.pk":{
    	  required: true,
    	  maxlength: 3
      },
      "configCompositeKey.sk":{
    	  required: true,
    	  maxlength: 4
      },
      ds:{
    	  required: true,
    	  maxlength: 50
      },
      value:{
    	  required: true,
    	  maxlength: 50
      },
      classId:{
    	  required: true,
      },
      tagGrpId:{
    	  required: true   
      },
 	  fileName:{
    	  required: true   
      },
      tagGrpNm:{
    	  required: true,
    	  maxlength: 100
      },
      listOfMultipartFile:{
    	  required: true
    	  /*maxlength: 50*/
      },
      /*multipartFile:{
    	  required: true,
      },*/
      listName:{
    	  required: true,
    	  maxlength: 100
      },
      listId:{
    	  required: true,
      },
      listValue:{
    	  required: true,
    	  maxlength: 100
      },
      userName:{
    	  required: true,
    	  maxlength: 200
      },
      address:{
    	  required: true,
    	  maxlength: 300
      },
      mobileNo:{
    	  required: true,
    	  maxlength: 12
      },
      hintId:{
    	  required: true,
      },
      hintAnswer:{
    	  required: true,
    	  maxlength: 50
      },
      groupList:{
    	  required: true,
      },
       tagNm:{
    	  required: true,
    	  maxlength: 100
      },
	  width:{
    	  required: true,
    	  
      },
      dispSeqNo:{
    	  required: true,

      },
      "designationObject.desgId":{
    	  required: true,
      },
      desgId:{
    	  required: true,
      },
      userlevel:{
    	  required: true,
      },
      folderNm:{
    	  required: true,
      },
      atriBt:{
    	  required: true,
      },
      status:{
    	  required: true,
      },
      /*"tagCompositeKey.tagGrpId":{
    	  required: true,
      },*/
      "tagTypeObject.tagTypeId":{
    	  required: true,
      },
     /* tagTypeId:{
    	  required: true,
      },*/
      /*"listObject.listId":{
    	  required: true,
      },*/
      "classTgGrpCompositeKey.classId":{
    	  required: true,
      },
      "classTgGrpCompositeKey.tagGrpId":{
    	  required: true,
      },
      "tagCompositeKey.tagGrpId":{
    	  required: true,
      },
      
      
      oldPasswordFn:{
    	  required: true,
      },
      newPasswordFn:{
    	  required: true,
    	  minlength: 4
      },
      confirmPasswordFn:{
    	  required: true,
    	  equalTo: "#newPasswordFn"
      },
      folderId:{
    	  required: true,
      },
      
      creationFromDt:{
    	  required: true,
      },
      creationToDt:{
    	  required: true,
      },
      creationFromTs:{
    	  required: true,
      },
	  returnDtStr:{
    	  required: true,
      },
      creationToTs:{
    	  required: true,
      },
      branchNm:{
    	  required: true,
    	  maxlength:200
      },
      branchAddress:{
    	  required: true,
    	  maxlength:200
      },
      branchId:{
    	  required: true,
      },
      rackId:{
    	  required: true,
      },
      shelfId:{
    	  required: true,
      },
      rackNo:{
    	  required: true,
    	  maxlength:200
      },
      shelfNo:{
    	  required: true,
    	  maxlength:200
      },
      compNo:{
    	  required: true,
    	  maxlength:200
      },
	  authorityNm:{
    	  required: true,
    	  maxlength:200
      },
	  returnTime:{
    	  required: true,
      },
	compartId:{
    	  required: true,
      },
      shrtNm:{
    	  required: true,
          maxlength: 4
      }
      
      
    },
    
    
    // Specify validation error messages
    messages: {
      passwordFn: {
        required: "Please provide a password.",
        minlength: "Your password must contains atleat 4 characters."
      },
      deptNm: {
          required: "Please provide department name.",
          maxlength: "Department name should not be more than 100 characters."
      },
      subDeptNm:{
    	  required: "Please provide sub department name.",
          maxlength: "Sub department name should not be more than 100 characters."
      },
      desigNm: {
          required: "Please provide designation name.",
          maxlength: "Designation name should not be more than 100 characters."
      },
      classNm: {
          required: "Please provide class name.",
          maxlength: "Class name should not be more than 200 characters."
      },
      deptId: {
          required: "Please select department.",
      },
      subDeptId:{
    	  required: "Please select sub department.",
      },
      userId: {
          required: "Please select user name.",
      },
      shrtNm: {
          required: "Please provide short name.",
          maxlength: "Short Name should not be more than 4 characters."
      },
      "configCompositeKey.pk": {
          required: "Please provide primary key.",
          maxlength: "Primary key should not be more than 4 characters."
      },
      "configCompositeKey.sk": {
          required: "Please provide secondary key.",
          maxlength: "Secondary key should not be more than 4 characters."
      },
      ds: {
          required: "Please provide description.",
          maxlength: "Description should not be more than 50 characters."
      },
      value: {
          required: "Please provide value.",
          maxlength: "Value should not be more than 50 characters."
      },
      "classTgGrpCompositeKey.classId": {
          required: "Please select Sub Department.",
      },
      "classTgGrpCompositeKey.tagGrpId":{
    	  required: "Please select tag Group.",
      },
      "tagCompositeKey.tagGrpId":{
    	  required: "Please select tag Group.",
      },
      tagGrpId: {
          required: "Please select tag group."
      },
	  fileName: {
          required: "Please provide file name."
      },
     /* tagTypeId:{
    	  required: "Please select tag Type."
      },*/
      tagGrpNm: {
          required: "Please provide value.",
          maxlength: "Value should not be more than 50 characters."
      },
      listOfMultipartFile: {
          required: "Please select files to upload.",
          maxlength: "Selected files should not be more than 50."
      },
      listName: {
          required: "Please provide list name.",
          maxlength: "List name should not be more than 100 characters."
      },
      "listObj.listId": {
          required: "Please provide list type name."
      },
      listValue: {
          required: "Please provide list value.",
          maxlength: "List value should not be more than 100 characters."
      },
      userName: {
          required: "Please provide user name.",
          maxlength: "User name should not be more than 200 characters."
      },
      address: {
          required: "Please provide address.",
          maxlength: "Address should not be more than 300 characters."
      },
      mobileNo: {
          required: "Please provide mobile no.",
          maxlength: "Mobile no should not be more than 12 characters."
      },
      hintId: {
          required: "Please select hint question.",
      },
      hintAnswer: {
          required: "Please provide hintAnswer.",
          maxlength: "HintAnswer should not be more than 50 characters."
      },
      groupList: {
          required: "Please select one group.",
      },
      tagNm: {
          required: "Please provide tag name.",
          maxlength: "Tag name should not be more than 100 characters."
      },
      width: {
          required: "Please provide width."
      },
      dispSeqNo: {
          required: "Please provide sequence no.",
      },
      desgId:{
    	  required: "Please select designation.",
      },
      userlevel:{
    	  required: "Please select user level."
      },
      folderNm:{
    	  required: "Please provide folder name.",
      },
      folderId: {
          required: "Please select folder name."
      },
      creationFromTs:{
    	  required: "Please Select From Date."
      },
      creationToTs:{
    	  required: "Please Select To Date."
      },
      creationFromDt:{
    	  required: "Please Select From Date."
      },
      creationToDt:{
    	  required: "Please Select To Date."
      },
      branchNm:{
    	  required: "Please provide branch name.",
          maxlength: "Branch name should not be more than 200 characters."
      },
      branchAddress:{
    	  required: "Please provide branch address.",
          maxlength: "Branch address should not be more than 200 characters."
      },
      branchId:{
    	  required: "Please select Branch.",
      },
      rackId:{
    	  required: "Please select Rack No.",
      },
      shelfId:{
    	  required: "Please select Shelf No.",
      },
      rackNo:{
    	  required: "Please provide rack number.",
          maxlength: "Rack number should not be more than 200 characters."
      },
      shelfNo:{
    	  required: "Please provide shelf number.",
          maxlength: "Shelf number should not be more than 200 characters."
      },
	  authorityNm:{
    	 required: "Please provide authority name.",
         maxlength: "Authority name should not be more than 200 characters."
      },
      compNo:{
    	  required: "Please provide compartment number.",
          maxlength: "Compartment number should not be more than 200 characters."
      },
	compartId:{
    	  required: "Please select compartment No.",
      },
	  returnDtStr:{
    	  required: "Please provide return date.",
      },
 	  returnTime:{
    	  required: "Please provide return time.",
      },
      emailId: "Please enter a valid email address."
    },
    
    errorElement: "em",
	errorPlacement: function ( error, element ) {
		// Add the `help-block` class to the error element
		error.addClass( "help-block" );

		// Add `has-feedback` class to the parent div.form-group
		// in order to add icons to inputs
		element.parents( ".col-lg-8" ).addClass( "has-feedback" );

		if ( element.prop( "type" ) === "checkbox" ) {
			error.insertAfter( element.parent( "label" ) );
		} else {
			error.insertAfter( element );
		}

		// Add the span element, if doesn't exists, and apply the icon classes to it.
		if ( !element.next( "span" )[ 0 ] ) {
			$( "<span class='glyphicon glyphicon-remove form-control-feedback'></span>" ).insertAfter( element );
		}
	},
	success: function ( label, element ) {
		// Add the span element, if doesn't exists, and apply the icon classes to it.
		if ( !$( element ).next( "span" )[ 0 ] ) {
			$( "<span class='glyphicon glyphicon-ok form-control-feedback'></span>" ).insertAfter( $( element ) );
		}
	},
	highlight: function ( element, errorClass, validClass ) {
		$( element ).parents( ".col-lg-8" ).addClass( "has-error" ).removeClass( "has-success" );
		$( element ).next( "span" ).addClass( "glyphicon-remove" ).removeClass( "glyphicon-ok" );
	},
	unhighlight: function ( element, errorClass, validClass ) {
		$( element ).parents( ".col-lg-8" ).addClass( "has-success" ).removeClass( "has-error" );
		$( element ).next( "span" ).addClass( "glyphicon-ok" ).removeClass( "glyphicon-remove" );
	},

    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});