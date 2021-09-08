$(document).ready(function(){
		  $('.dropdown-submenu a.test').on("click", function(e){
		    $(this).next('ul').toggle();
		    e.stopPropagation();
		    e.preventDefault();
		  });
		});


$(document).ready(function(){
	  $("#userSerach").on("keyup", function() {
	    var value = $(this).val().toLowerCase();
	    $(".userSerach option").filter(function() {
	      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
	    });
	  });
	});
		
		
 (function($){
		$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
		  if (!$(this).next().hasClass('show')) {
			$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
		  }
		  var $subMenu = $(this).next(".dropdown-menu");
		  $subMenu.toggleClass('show');

		  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
			$('.dropdown-submenu .show').removeClass("show");
		  });

		  return false;
		});
	})(jQuery)

function validateForm(formObject){
	 var userId = document.getElementById("userId").value;
	// alert(userId);
	 //alert(formObject);
	 if(userId != ''){
		 var action = formObject.action; 
		 formObject.action = 'changeUACC?userId='+userId;
		 action = formObject.action ;
		 //alert(action);
		 formObject.submit();
	 }
	 else{
		 return false;
	 } 
	
 }

function getEmpData(formObject){
	 var userNo = document.getElementById("userNo").value;
	 if(userNo>0){
		 var action = formObject.action; 
		 formObject.action = 'getTempUser?userNo='+userNo;
		 action = formObject.action ;
		 //alert(action);
		 formObject.submit();
	 }
	 else{
		 return false;
	 } 
	
 }
 
    $(document).ready(function(){
	    $('[data-toggle="tooltip"]').tooltip();   
	});
    
   
 
 function getTagData(formObject){
	 var tagGrpId = document.getElementById("tagGrpId").value;
	// alert(tagGrpId);
	// var subDeptId = document.getElementById("subDeptId").value;
	 //alert(userId);
	 //alert(formObject);
	 if(tagGrpId>0){
		 var action = formObject.action; 
		 formObject.action = 'getTagData?tagGrpId='+tagGrpId;
		 action = formObject.action ;
		 //alert(action);
		 formObject.submit();
	 }
	 else{
		 return false;
	 } 
	
 }
 
 function bindSubDeptDropdown(formObject){
	 var deptId = document.getElementById("dept_Id").value;
	 //var subDeptId = document.getElementById("subDeptId").value;
	 //alert(userId);
	 //alert(formObject);
	 if(deptId>0){
		 var action = formObject.action; 
		 formObject.action = 'getSubDeptByDept?deptId='+deptId;
		 action = formObject.action ;
		 //alert(action);
		 formObject.submit();
	 }
	 else{
		 return false;
	 } 
	
 }
 
 function getTagGroup(formObject){
	 var subDeptId = document.getElementById("subDeptId").value;
	 var formName = formObject.name;
	 //alert(userId);
	 //alert(formObject);
	 if(subDeptId>0){
		 var action = formObject.action; 
		 formObject.action = 'getTagGroupBySubDeptId?subDeptId='+subDeptId+'&formName='+formName;
		 action = formObject.action ;
		 //alert(action);
		 formObject.submit();
	 }
	 else{
		 return false;
	 } 
	
 }
 
 function getTagDataForMultiple(formObject){
	 var tagGrpId = document.getElementById("tagGrpId").value;
	// var subDeptId = document.getElementById("subDeptId").value;
	 //alert(userId);
	 //alert(formObject);
	 if(tagGrpId>0){
		 var action = formObject.action; 
		 formObject.action = 'getMultipleTagData?tagGrpId='+tagGrpId;
		 action = formObject.action ;
		 //alert(action);
		 formObject.submit();
	 }
	 else{
		 return false;
	 } 
	
 }
 
 function getTagDataForManage(formObject){
	 var tagGrpId = document.getElementById("tagGrpId").value;
	 var fileId = document.getElementById("fileId").value;
	 var seqNo = document.getElementById("seqNo").value;
	 //alert(tagGrpId);
	 //alert(fileId);
	 //alert(seqNo);
	 if(tagGrpId>0){
		 var action = formObject.action; 
		 formObject.action = 'getFileTgData?tagGrpId='+tagGrpId+'&fileId='+fileId+'&seqNo='+seqNo;
		 action = formObject.action ;
		 //alert(action);
		 formObject.submit();
	 }
	 else{
		 return false;
	 } 
	
 }
 function manageFileTgDtForView(formObject){
	 var tagGrpId = document.getElementById("tagGrpId").value;
	 //alert(userId);
	 //alert(formObject);
	 if(tagGrpId>0){
		 var action = formObject.action; 
		 formObject.action = 'manageFileTgDtForView?tagGrpId='+tagGrpId;
		 action = formObject.action ;
		 //alert(action);
		 formObject.submit();
	 }
	 else{
		 return false;
	 } 
	
 }
 
 function getListData(formObject){
	 var listId = document.getElementById("list_Id").value;
	 //alert(userId);
	 //alert(formObject);
	 if(listId>0){
		 var action = formObject.action; 
		 formObject.action = 'getTagDataByListId?listId='+listId;
		 action = formObject.action ;
		 //alert(action);
		 formObject.submit();
	 }
	 else{
		 return false;
	 } 
	
 }
 
 function getFileTgDataForView(formObject){
	 var tagGrpId = document.getElementById("tagGrpId").value;
	 var fileId = document.getElementById("fileId").value;
	 var seqNo = document.getElementById("seqNo").value;
	 //alert(tagGrpId);
     //	 alert(fileId);
	 if(tagGrpId>0){
		 var action = formObject.action; 
		 formObject.action = 'getFileTgDataForView?tagGrpId='+tagGrpId+'&fileId='+fileId+'&seqNo='+seqNo;
		 action = formObject.action ;
		 //alert(action);
		 formObject.submit();
	 }
	 else{
		 return false;
	 } 
	
 }
 
 
 function deleteRecord(formObject){
	 var userId = document.getElementById("userId").value;
	 //alert(userId);
	 //alert(formObject);
	 if(userId>0){
		 var action = formObject.action; 
		 formObject.action = 'deleteFormUACCObject?userId='+userId;
		 action = formObject.action ;
		 //alert(action);
		 formObject.submit();
	 }
	 else{
		 return false;
	 } 
	
 }
 
// rnd for mouse events
/**
function openPopUp(linkShow) {
	// alert("You pressed button: " + event.button)
		 window.open(''+linkShow,'mywin',
		 'left=100, top=400, screenX=200, screenY=150,width=500,height=500,toolbar=1,resizable=0');
 }
 **/
 /***
 function storageTypeChange(type) {
	 var storageType = type;
	 if(storageType == 'DTBS'){
		 document.getElementById('driveNm').disabled = true;
	 }
	 if(storageType == 'DISC'){
		 document.getElementById('driveNm').disabled = false;
	 }
	 
 }
 ***/
 function validateTagData(evt,tagTypeId,tagId) {
	 if(tagTypeId==1 || tagTypeId==2){
		 //alert(tagTypeId);
		 $("#"+tagId).keypress(function (e) {
			 //alert(tagTypeId);
			     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
			 		$("."+tagId).html("Digits Only.").show().delay(2000).fadeOut("slow"); 
			        return false;
			    }
			   });
	        }
	 else if(tagTypeId==5){
		 $("#"+tagId).keypress(function (e){
				if((e.which >=65 && e.which <=90) || (e.which>=97 && e.which<=122)){
		  return true
		}
		else{
			 $("."+tagId).html("Alphabets Only.").show().delay(2000).fadeOut("slow");
               return false;
		}
	  });
	}
     /*var iKeyCode = (evt.which) ? evt.which : evt.keyCode
     if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
         return false;
     return true;*/
 }    

 
 $(document).ready(function(){
	// Prepare the preview for profile picture
	    $("#wizard-picture").change(function(){
	        readURL(this);
	    });
	});
	function readURL(input) {
	    if (input.files && input.files[0]) {
	        var reader = new FileReader();
	        reader.onload = function (e) {
	            $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
	        }
	        reader.readAsDataURL(input.files[0]);
	    }
	}
	 
	