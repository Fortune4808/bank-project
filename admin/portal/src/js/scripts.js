$(document).ready(function() {
  var images = ["./src/all-images/background-pix/cover-pix.jpg"];
  $.backstretch(images, { duration: 4000, fade: 2000 });
});

function _next_page(next_id) {
  $('.log-div').hide();
  $('#'+next_id).fadeIn(1000);
}


function alert_close(){
  $('.overlay-div').html('').fadeOut(200);
}

function _expand_link(ids){
  $('#'+ids+'-li').toggle('slow');
}

function setActive(clickedItem) {
  const items = document.querySelectorAll('.active');
  items.forEach(item => {
      item.style.backgroundColor = '#fff'; 
  });

  clickedItem.style.backgroundColor = '#d4d4d4';
}

function capitalizeWords(str) {
  return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

function validateTextInput(input) {
	input = input.trim();
	return input === '' || /^[a-zA-Z\s]+$/.test(input);
  }
  
  function validatePhoneNumber(input) {
	input = input.trim();
	return /^[\d\s()+-]+$/.test(input);
  }  

  function formatNumberWithComma(number) {
    let num = parseFloat(number);
    return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}


function _get_form(page) {
  $('.overlay-div').html('<div class="ajax-loader"><br><img src="src/all-images/image-pix/ajax-loader.gif"/></div>').fadeIn(500);
  var action='get_form';
  var formData ='action='+ action+'&page='+ page;
  axios.post(admin_portal_local_url, formData)
    .then(response => {
      $('.overlay-div').html(response.data);
    });
}

function _get_form_with_id(page, ids) {
  $('.overlay-div').html('<div class="ajax-loader"><br><img src="src/all-images/image-pix/ajax-loader.gif"/></div>').fadeIn(500);
  var action='_get_form_with_id';
  var formData ='action='+ action+'&page='+ page + '&ids=' + ids;
  axios.post(admin_portal_local_url, formData)
    .then(response => {
      $('.overlay-div').html(response.data);
    });
}

function _get_page(page) {
  $('#main-dashboard').html('<div class="ajax-loader"><br><img src="src/all-images/image-pix/ajax-loader.gif"/></div>').fadeIn(500);
  var action='get_page';
  var formData ='action='+ action+'&page='+ page;
  axios.post(admin_portal_local_url, formData)
    .then(response => {
      $('#main-dashboard').html(response.data);
    });
}

function _get_staff_login(staff_id){

  var formData = 'staff_id=' + staff_id;

  axios.post(endpoint+'/admin/fetch-staff-api?access_key='+access_key, formData, { headers: apikey })
    .then(response => {
      var access_check = response.data.check;
      var success = response.data.success;

      if (access_check==0){
        _logout_();
      }else{

        if (success==true){
        var staff_data = response.data.data;
        var first_name = staff_data.first_name;
        var middle_name = staff_data.middle_name;
        var last_name = staff_data.last_name;
        var last_login = staff_data.last_login;
        var position_name = staff_data.position_name;
        var status_name = staff_data.status_name;
        var role_name = staff_data.role_name;
        var date_of_birth = staff_data.date_of_birth;
        var gender_id = staff_data.gender_id;
        var gender_name = staff_data.gender_name;
        var email_address = staff_data.email;
        var mobile_number = staff_data.mobile_number;
        var staff_id = staff_data.staff_id;
        var branch_name = staff_data.branch_name;
        var department_name = staff_data.department_name;
        var date_of_reg = staff_data.created_time;
        var status_id = staff_data.status_id;
        var role_id = staff_data.role_id;
        var marital_status_id = staff_data.marital_status_id;
        var marital_status_name = staff_data.marital_status_name;
        var address = staff_data.address;
        var identification_type = staff_data.identification_type;
        var identification_id = staff_data.identification_id;
        var id_number = staff_data.id_number;
        var qualification = staff_data.qualification_name;
        var qualification_id = staff_data.qualification_id;

        var fullname = first_name + ' ' + middle_name + ' ' + last_name
        var staff_profile = capitalizeWords(fullname);

        var passport = staff_data.passport;
        var documentStoragePath = staff_data.documentStoragePath + '/' + passport;


        $("#login_staff_fullname").html(fullname);
        $("#login_staff_last_login").html(last_login);
        $("#login_staff_profile").html(staff_profile);
       $("#login_status_name").html(status_name);
        $("#login_dashboard_role").html(capitalizeWords(position_name));

       
        $("#role").val(role_name);
        $("#status").val(status_name);
        $("#surname").val(first_name);
        $("#othernames").val(middle_name + ' ' + last_name);
        $("#dob").val(date_of_birth);
        $("#email_address").val(email_address);
        $("#phoneno").val(mobile_number);
        $("#staff_id").val(staff_id);
        $("#post").val(position_name);
        $("#branch_id").val(branch_name);
        $("#department_id").val(department_name);
        $("#r_date").val(date_of_reg);
        $("#last_login_date").val(last_login);
        $("#role_id").val(role_id);
        $("#status_id").val(status_id);
        $("#address").val(address);
        $("#id_number").val(id_number);

        $("#gender_id").append('<option value="' + gender_id + '" selected="selected">' + gender_name +"</option>");
        $("#marital_status_id").append('<option value="' + marital_status_id + '" selected="selected">' + marital_status_name +"</option>");
        $("#qualification_id").append('<option value="' + qualification_id + '" selected="selected">' + qualification +"</option>");
        $("#identification_id").append('<option value="' + identification_id + '" selected="selected">' + identification_type +"</option>");

        $("#pictureBox2, #pictureBox1").attr('src', documentStoragePath);

        }
      }
    });
}

function _all_staff(status_id, branch_id, department_id) {
  $('#fetch_all_staff').html('<div class="ajax-loader"><br><img src="src/all-images/image-pix/ajax-loader.gif"/></div>').fadeIn(500);
  var search_txt = $('#search').val();
  var status_id = $('#status_id').val();
  var branch_id = $('#branch_id').val();
  var department_id = $('#department_id').val();
  var formData = 'search_txt=' + search_txt + '&status_id=' + status_id + '&branch_id=' + branch_id + '&department_id=' + department_id;

  axios.post(endpoint+'/admin/fetch-staff-api?access_key='+access_key, formData, { headers: apikey })
  .then(response => {
    var access_check = response.data.check;
    var success = response.data.success;
    var message = response.data.message;
    var fetch = response.data.data;

    if (access_check==0){
      _logout_();
    }else{
      var text = '';

      if (success==true){

          for (var i = 0; i < fetch.length; i++) {
              var staff_id = fetch[i].staff_id;
              var first_name = fetch[i].first_name.toUpperCase();
              var middle_name = fetch[i].middle_name.toUpperCase();
              var last_name = fetch[i].last_name.toUpperCase();
              var status_name = fetch[i].status_name.toUpperCase();
              var mobile_no = fetch[i].mobile_number;
              var passport = fetch[i].passport;
              var documentStoragePath = fetch[i].documentStoragePath;
    
              text +=
    
              '<div class="w-[45%] h-[130px] bg-[#f0f0f0] rounded-[5px] cursor-pointer hover:shadow-profile-border hover:bg-white mb-[20px] transition-all duration-700 hover:scale-105" onClick="_get_form_with_id(' + "'staff-profile-module'" + "," + "'" + staff_id+ "'" + ')">'+
              '<div class="w-[100%] h-[130px] flex items-center gap-[15px]">'+
                  '<div class="w-[100px] h-[100px] shadow-picture-box-border ml-[15px] rounded-[5px]">'+
                      '<div class="w-[80px] h-[80px] bg-black mt-[10px] ml-[10px] rounded-[5px]">'+
                          '<img src="' + documentStoragePath + '/' + passport + '" class="w-[100%] h-[100%] object-cover" style="width: 80px; height: 80px; object-position: top;"/>'+
                      '</div>'+
                  '</div>'+

                  '<div class="flex flex-col gap-1 text-[#424141] font-title">'+
                      '<div class="font-bold">'+ first_name + ' ' + middle_name + ' ' + last_name +'</div><hr class="w-[100px] border border-primary-color"/>'+
                      '<div class="text-[10px] pl-[10px] font-body">STAFF ID: '+ staff_id +'</div>'+
                      '<div class="text-[10px] pl-[10px]">'+ mobile_no +'</div>'+
                      '<div class="text-[10px] pl-[10px] text-primary-color">'+ status_name +'</div>'+
                  '</div>'+
              '</div>'+
          '</div>';
    
          }

          $('#fetch_all_staff').html(text);
      }else{
          text +=
        '<div class="false-notification-div">' +
        "<p> " + message + " </p>" + '</div>';
      $('#fetch_all_staff').html(text);
      }
    }
  })
  .catch(error => {
      var errorMessage = '<div class="false-notification-div"><p>' + error + '</p></div>';
      $('#fetch_all_staff').html(errorMessage);
  });
}

function _get_staff_profile(staff_id){

	var formData = 'staff_id=' + staff_id;
  
	axios.post(endpoint+'/admin/fetch-staff-api?access_key='+access_key, formData, { headers: apikey })
	  .then(response => {
		var access_check = response.data.check;
		var success = response.data.success;
  
		if (access_check==0){
		  _logout_();
		}else{
  
		  if (success==true){
        var staff_data = response.data.data;
        var first_name = staff_data.first_name;
        var middle_name = staff_data.middle_name;
        var last_name = staff_data.last_name;
        var last_login = staff_data.last_login;
        var position_name = staff_data.position_name;
        var position_id = staff_data.position_id;
        var status_name = staff_data.status_name;
        var role_name = staff_data.role_name;
        var date_of_birth = staff_data.date_of_birth;
        var gender_id = staff_data.gender_id;
        var gender_name = staff_data.gender_name;
        var email_address = staff_data.email;
        var mobile_number = staff_data.mobile_number;
        var staff_id = staff_data.staff_id;
        var branch_name = staff_data.branch_name;
        var branch_id = staff_data.branch_id;
        var department_name = staff_data.department_name;
        var department_id = staff_data.department_id;
        var date_of_reg = staff_data.created_time;
        var status_id = staff_data.status_id;
        var role_id = staff_data.role_id;
        var marital_status_id = staff_data.marital_status_id;
        var marital_status_name = staff_data.marital_status_name;
        var address = staff_data.address;
        var identification_type = staff_data.identification_type;
        var identification_id = staff_data.identification_id;
        var id_number = staff_data.id_number;
        var qualification = staff_data.qualification_name;
        var qualification_id = staff_data.qualification_id;
        var registered_staff_id = staff_data.registered_staff_id;
        var registered_fullname = staff_data.registered_fullname;

        var fullname = first_name + ' ' + middle_name + ' ' + last_name
        var staff_profile = capitalizeWords(fullname);

        var passport = staff_data.passport;
        var documentStoragePath = staff_data.documentStoragePath + '/' + passport;


        $("#fullname").html(fullname);
        $("#last_login").html(last_login);
        $("#staff_profile").html(staff_profile);
        $("#status_name").html(status_name);

        $("#surname").val(first_name);
        $("#othernames").val(middle_name + ' ' + last_name);
        $("#dob").val(date_of_birth);
        $("#email_address").val(email_address);
        $("#phoneno").val(mobile_number);
        $("#id_number").val(id_number);
        $("#address").val(address);
        $("#staff_id").val(staff_id);
        $("#r_date").val(date_of_reg);
        $("#last_login_date").val(last_login);
        $("#role_id").val(role_id);
        $("#status_id").val(status_id);
        $("#r_staff_id").val(registered_staff_id);
        $("#r_fullname").val(registered_fullname);

        $("#marital_status_id").append('<option value="' + marital_status_id + '" selected="selected">' + marital_status_name +"</option>");
        $("#gender_id").append('<option value="' + gender_id + '" selected="selected">' + gender_name +"</option>");
        $("#qualification_id").append('<option value="' + qualification_id + '" selected="selected">' + qualification +"</option>");
        $("#identification_id").append('<option value="' + identification_id + '" selected="selected">' + identification_type +"</option>");
        $("#post_id").append('<option value="' + position_id + '" selected="selected">' + position_name +"</option>");
        $("#branch_id").append('<option value="' + branch_id + '" selected="selected">' + branch_name +"</option>");
        $("#department_id").append('<option value="' + department_id + '" selected="selected">' + department_name +"</option>");
        $("#role_id").append('<option value="' + role_id + '" selected="selected">' + role_name +"</option>");
        $("#status_id").append('<option value="' + status_id + '" selected="selected">' + status_name +"</option>");
        

        $("#staff_passport").attr('src', documentStoragePath);
  
		  }
		}
	});
}

function _all_customer(page, status_id, branch_id) {
  $('#fetch_all_customer').html('<div class="ajax-loader"><br><img src="src/all-images/image-pix/ajax-loader.gif"/></div>').fadeIn(500);
  var search_txt = $('#search').val();
  var status_id = $('#status_id').val();
  var branch_id = $('#branch_id').val();

  var formData = 'search_txt=' + search_txt + '&status_id=' + status_id + '&branch_id=' + branch_id;

  axios.post(endpoint + '/admin/fetch-all-customer-api?access_key=' + access_key + '&page=' + page, formData, { headers: apikey })
      .then(response => {
          var access_check = response.data.check;
          var success = response.data.success;
          var message = response.data.message;
          var fetch = response.data.data;
          var pagination = response.data.pagination;

          if (access_check == 0) {
              _logout_();
          } else {
              var text = '';

              if (success == true) {
                  if (fetch.length > 0) {
                      text = '<table class="w-[100%] border-collapse"><thead><tr><th>SN</th><th>PASSPORT</th><th>FULLNAME</th><th>EMAIL ADDRESS</th><th>MOBILE NUMBER</th><th>BRANCH</th><th>STATUS</th><th>ACTION</th></tr></thead><tbody class="bg-white">';
                      for (var i = 0; i < fetch.length; i++) {
                          var customer = fetch[i];
                          var customer_id = customer.customer_id;
                          var first_name = customer.first_name.toUpperCase();
                          var middle_name = customer.middle_name.toUpperCase();
                          var last_name = customer.last_name.toUpperCase();
                          var email = customer.email;
                          var mobile = customer.mobile_number;
                          var branch = customer.branch_name;
                          var status = customer.status_name;
                          var passport = customer.passport;
                          var documentStoragePath = customer.documentStoragePath;

                          text +=
                              '<tr>'+
                                  '<td>' + (i + 1) + '</td>'+
                                  '<td><div class="w-[25px] h-[25px] rounded-full"><img class="w-[100%] h-[100%] object-cover rounded-full" src="' + documentStoragePath + '/' + passport + '" alt=""></div></td>'+
                                  '<td>' + first_name + ' ' + middle_name + ' ' + last_name + '</td>'+
                                  '<td>' + email + '</td>'+
                                  '<td>'+ mobile + '</td>'+
                                  '<td>' + branch + '</td>'+
                                  '<td>' + status + '</td>'+
								                  '<td><i onclick="_get_form_with_id(' + "'customer-profile-module'" + "," + "'" + customer_id + "'" + ')" class="bi bi-pencil-square text-[15px] text-white p-[8px] bg-primary-color cursor-pointer hover:bg-[#444444]" title="VIEW PROFILE"></i></td>'+
                              '</tr>';
                      }
                      text += '</tbody></table>' +

                      '<div class="my-[10px] flex justify-between">'+
                          '<div class="text-[#3a4669]">Showing ' + pagination.current_page + ' to ' + pagination.total_pages + ' of ' + pagination.total_customer + ' entries</div>'+
                          '<div class="flex gap-1">'+
                              '<button class="text-sm py-[8px] px-[15px]" ' + (pagination.prev_page ? 'onclick="_all_student(' + pagination.prev_page + ', \'' + status_id + '\')"' : 'disabled') + '>PREVIOUS</button>' +
                              '<button class="text-sm py-[8px] px-[15px]" ' + (pagination.next_page ? 'onclick="_all_student(' + pagination.next_page + ', \'' + status_id + '\')"' : 'disabled') + '>NEXT</button>'+
                          '</div>'+
                      '</div>';

                  } 

                  $('#fetch_all_customer').html(text);
              } else {
				text = '<table class="w-[100%] border-collapse"><thead><tr><th>SN</th><th>PASSPORT</th><th>FULLNAME</th><th>EMAIL ADDRESS</th><th>MOBILE NUMBER</th><th>BRANCH</th><th>STATUS</th><th>ACTION</th></tr></thead>' +
				'<tbody class="bg-white">' + 
				'</tbody></table>' + 
				'<div class="bg-[#FAF3F0] text-[#3a4669] border-[#F2BDA2] border-[1px] w-[100%] mx-auto mt-[5px] flex gap-1 p-[10px] pl-[30px] text-[12px]">' +
				'<i class="bi bi-bell"></i><p>' + message + '</p>' +
				'</div>';

                $('#fetch_all_customer').html(text);
              }
          }
      })
      .catch(error => {
          console.error('Error fetching students:', error);
          $('#fetch_all_customer').html('<p>There was an error fetching the students. Please try again later.</p>');
      });
}

function _get_customer_profile(customer_id){

	var formData = 'customer_id=' + customer_id;
  
	axios.post(endpoint+'/admin/fetch-all-customer-api?access_key='+access_key, formData, { headers: apikey })
	  .then(response => {
		var access_check = response.data.check;
		var success = response.data.success;
  
		if (access_check==0){
		  _logout_();
		}else{
  
		  if (success==true){
            var customer_data = response.data.data[0];
            var first_name = customer_data.first_name;
            var middle_name = customer_data.middle_name;
            var last_name = customer_data.last_name;
            var fullname = first_name + ' ' + middle_name + ' ' + last_name
            var last_login = customer_data.last_login;
            var dob = customer_data.date_of_birth;
            var gender_id = customer_data.gender_id;
            var gender_name = customer_data.gender_name;
            var marital_status_id = customer_data.marital_status_id;
            var marital_status_name = customer_data.marital_status_name;
            var address = customer_data.address;
            var identification_type = customer_data.identification_type;
            var identification_id = customer_data.identification_id;
            var id_number = customer_data.id_number;
            var email_address = customer_data.email;
            var mobile_number = customer_data.mobile_number;
            var branch_name = customer_data.branch_name;
            var customer_type_id = customer_data.customer_type_id;
            var customer_type_name = customer_data.customer_type_name;
            var account_type_id = customer_data.account_type_id;
            var account_type_name = customer_data.account_type_name;
            var status_id = customer_data.status_id;
            var status_name = customer_data.status_name;
            var customer_id = customer_data.customer_id;
            var date_of_reg = customer_data.created_time;
           
            var passport = customer_data.passport;
            var documentStoragePath = customer_data.documentStoragePath + '/' + passport;
            
            $('#fullname').html(fullname);
            $('#last_login').html(last_login);

            $('#surname').val(first_name);
            $('#othernames').val(middle_name + ' ' + last_name);
            $('#dob').val(dob);
            $('#gender_id').val(dob);
            $('#id_number').val(id_number);
            $('#address').val(address);
            $("#email_address").val(email_address);
            $("#mobileno").val(mobile_number);
            $("#branch_id").val(branch_name);
            $("#customer_id").val(customer_id);
            $("#reg_date").val(date_of_reg);

            $("#customer_pic").attr('src', documentStoragePath);

          $("#gender_id").append('<option value="' + gender_id + '" selected="selected">' + gender_name +"</option>");
          $("#marital_status_id").append('<option value="' + marital_status_id + '" selected="selected">' + marital_status_name +"</option>");
          $("#identification_id").append('<option value="' + identification_id + '" selected="selected">' + identification_type +"</option>");
          $("#customer_type_id").append('<option value="' + customer_type_id + '" selected="selected">' + customer_type_name +"</option>");
          $("#account_id").append('<option value="' + account_type_id + '" selected="selected">' + account_type_name +"</option>");
          $("#status_id").append('<option value="' + status_id + '" selected="selected">' + status_name +"</option>");
  
		  }
		}
	});
}

function _get_gender() {
  axios.post(endpoint + '/admin/fetch-gender-api?access_key=' + access_key, null, { headers: apikey })
  .then(response => {
      var access_check = response.data.check;
      var success = response.data.success;
      var fetch = response.data.data;

      var text = '';
      if (access_check == 0) {
          _logout_(); 
      } else {
          if (success == true) {
              for (var i = 0; i < fetch.length; i++) {
                  var gender_id = fetch[i].gender_id;
                  var gender_name = fetch[i].gender_name;
                  text += '<option value="' + gender_id + '">' + gender_name + '</option>';
              }
              $('#gender_id').html('<option value="">== SELECT GENDER ==</option>' + text);
          }
      }
  });
}

function _get_marital_status() {
  axios.post(endpoint + '/admin/fetch-marital-status-api?access_key=' + access_key, null, { headers: apikey })
  .then(response => {
      var access_check = response.data.check;
      var success = response.data.success;
      var fetch = response.data.data;

      var text = '';
      if (access_check == 0) {
          _logout_(); 
      } else {
          if (success == true) {
              for (var i = 0; i < fetch.length; i++) {
                  var marital_status_id = fetch[i].marital_status_id;
                  var marital_status_name = fetch[i].marital_status_name;
                  text += '<option value="' + marital_status_id + '">' + marital_status_name + '</option>';
              }
              $('#marital_status_id').html('<option value="">== SELECT MARITAL STATUS ==</option>' + text);
          }
      }
  });
}

function _get_qualification() {
  axios.post(endpoint + '/admin/fetch-qualification-api?access_key=' + access_key, null, { headers: apikey })
  .then(response => {
      var access_check = response.data.check;
      var success = response.data.success;
      var fetch = response.data.data;

      var text = '';
      if (access_check == 0) {
          _logout_(); 
      } else {
          if (success == true) {
              for (var i = 0; i < fetch.length; i++) {
                  var qualification_id = fetch[i].qualification_id;
                  var qualification_name = fetch[i].qualification_name;
                  text += '<option value="' + qualification_id + '">' + qualification_name + '</option>';
              }
              $('#qualification_id').html('<option value="">== SELECT QUALIFICATION ==</option>' + text);
          }
      }
  });
}

function _get_means_of_id() {
  axios.post(endpoint + '/admin/fetch-means-of-id-api?access_key=' + access_key, null, { headers: apikey })
  .then(response => {
      var access_check = response.data.check;
      var success = response.data.success;
      var fetch = response.data.data;

      var text = '';
      if (access_check == 0) {
          _logout_(); 
      } else {
          if (success == true) {
              for (var i = 0; i < fetch.length; i++) {
                  var identification_id = fetch[i].identification_id;
                  var identification_type = fetch[i].identification_type;
                  text += '<option value="' + identification_id + '">' + identification_type + '</option>';
              }
              $('#identification_id').html('<option value="">== SELECT MEANS OF IDENTIFICATION ==</option>' + text);
          }
      }
  });
}

function _get_branch() {
  axios.post(endpoint + '/admin/fetch-branch-api?access_key=' + access_key, null, { headers: apikey })
  .then(response => {
      var access_check = response.data.check;
      var success = response.data.success;
      var fetch = response.data.data;

      var text = '';
      if (access_check == 0) {
          _logout_(); 
      } else {
          if (success == true) {
              for (var i = 0; i < fetch.length; i++) {
                  var branch_id = fetch[i].branch_id;
                  var branch_name = fetch[i].branch_name;
                  text += '<option value="' + branch_id + '">' + branch_name + '</option>';
              }
              $('#branch_id').html('<option value="">== SELECT BRANCH ==</option>' + text);
          }
      }
  });
}

function _get_department() {
  axios.post(endpoint + '/admin/fetch-department-api?access_key=' + access_key, null, { headers: apikey })
  .then(response => {
      var access_check = response.data.check;
      var success = response.data.success;
      var fetch = response.data.data;

      var text = '';
      if (access_check == 0) {
          _logout_(); 
      } else {
          if (success == true) {
              for (var i = 0; i < fetch.length; i++) {
                  var department_id = fetch[i].department_id;
                  var department_name = fetch[i].department_name;
                  text += '<option value="' + department_id + '">' + department_name + '</option>';
              }
              $('#department_id').html('<option value="">== SELECT DEPARTMENT ==</option>' + text);
          }
      }
  });
}

function _get_role() {
  axios.post(endpoint + '/admin/fetch-role-api?access_key=' + access_key, null, { headers: apikey })
  .then(response => {
      var access_check = response.data.check;
      var success = response.data.success;
      var fetch = response.data.data;

      var text = '';
      if (access_check == 0) {
          _logout_(); 
      } else {
          if (success == true) {
              for (var i = 0; i < fetch.length; i++) {
                  var role_id = fetch[i].role_id;
                  var role_name = fetch[i].role_name;
                  text += '<option value="' + role_id + '">' + role_name + '</option>';
              }
              $('#role_id').html('<option value="">== SELECT ROLE ==</option>' + text);
          }
      }
  });
}

function _get_post(role_id) {
  if (!role_id) {
      return;
  }
formData='role_id=' + role_id

  axios.post(endpoint + '/admin/fetch-post-api?access_key=' + access_key, formData, { headers: apikey })
  .then(response => {
      var access_check = response.data.check;
      var success = response.data.success;
      var fetch = response.data.data;

      var text = '';
      if (access_check == 0) {
          _logout_(); 
      } else {
          if (success == true) {
              for (var i = 0; i < fetch.length; i++) {
                  var post_id = fetch[i].position_id;
                  var position_name = fetch[i].position_name;
                  text += '<option value="' + post_id + '">' + position_name + '</option>';
              }
              $('#post_id').html('<option value="">== SELECT POSITION ==</option>' + text);
          }
      }
  });
}

function _get_status() {
  axios.post(endpoint + '/admin/fetch-status-api?access_key=' + access_key, null, { headers: apikey })
  .then(response => {
      var access_check = response.data.check;
      var success = response.data.success;
      var fetch = response.data.data;

      var text = '';
      if (access_check == 0) {
          _logout_(); 
      } else {
          if (success == true) {
              for (var i = 0; i < fetch.length; i++) {
                  var status_id = fetch[i].status_id;
                  var status_name = fetch[i].status_name;
                  text += '<option value="' + status_id + '">' + status_name + '</option>';
              }
              $('#status_id').html('<option value="">== SELECT STATUS ==</option>' + text);
          }
      }
  });
}







