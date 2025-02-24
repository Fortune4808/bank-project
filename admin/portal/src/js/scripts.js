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
        var post_id = staff_data.position_id
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
        var country_id = staff_data.country_id;
        var country_name = staff_data.country_name.toUpperCase();
        var state_id = staff_data.state_id;
        var state_name = staff_data.state_name.toUpperCase();
        var lga_id = staff_data.lga_id;
        var lga_name = staff_data.lga_name.toUpperCase();

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
        $("#firstname").val(first_name);
        $("#middlename").val(middle_name);
        $("#lastname").val(last_name);
        $("#dob").val(date_of_birth);
        $("#email_address").val(email_address);
        $("#phoneno").val(mobile_number);
        $("#staff_id").val(staff_id);
        $("#post").val(position_name);
        $("#post_id").val(post_id);
        $("#branch_name").val(branch_name);
        $("#branch_id").val(branch_id);
        $("#department_id").val(department_id);
        $("#department_name").val(department_name);
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
        $("#country_id").append('<option value="' + country_id + '" selected="selected">' + country_name +"</option>");
        $("#state_id").append('<option value="' + state_id + '" selected="selected">' + state_name +"</option>");
        $("#lga_id").append('<option value="' + lga_id + '" selected="selected">' + lga_name +"</option>");

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
        var country_id = staff_data.country_id;
        var country_name = staff_data.country_name.toUpperCase();
        var state_id = staff_data.state_id;
        var state_name = staff_data.state_name.toUpperCase();
        var lga_id = staff_data.lga_id;
        var lga_name = staff_data.lga_name.toUpperCase();

        var fullname = first_name + ' ' + middle_name + ' ' + last_name
        var staff_profile = capitalizeWords(fullname);

        var passport = staff_data.passport;
        var documentStoragePath = staff_data.documentStoragePath + '/' + passport;


        $("#fullname").html(fullname);
        $("#last_login").html(last_login);
        $("#staff_profile").html(staff_profile);
        $("#status_name").html(status_name);

        $("#firstname").val(first_name);
        $("#middlename").val(middle_name);
        $("#lastname").val(last_name);
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
        $("#country_id").append('<option value="' + country_id + '" selected="selected">' + country_name +"</option>");
        $("#state_id").append('<option value="' + state_id + '" selected="selected">' + state_name +"</option>");
        $("#lga_id").append('<option value="' + lga_id + '" selected="selected">' + lga_name +"</option>");
        

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
                              '<button class="text-sm py-[8px] px-[15px]" ' + (pagination.prev_page ? 'onclick="_all_customer(' + pagination.prev_page + ', \'' + status_id + '\')"' : 'disabled') + '>PREVIOUS</button>' +
                              '<button class="text-sm py-[8px] px-[15px]" ' + (pagination.next_page ? 'onclick="_all_customer(' + pagination.next_page + ', \'' + status_id + '\')"' : 'disabled') + '>NEXT</button>'+
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
            var branch_id = customer_data.branch_id;
            var customer_type_id = customer_data.customer_type_id;
            var customer_type_name = customer_data.customer_type_name;
            var account_type_id = customer_data.account_type_id;
            var account_type_name = customer_data.account_type_name;
            var status_id = customer_data.status_id;
            var status_name = customer_data.status_name;
            var customer_id = customer_data.customer_id;
            var date_of_reg = customer_data.created_time;
            var country_id = customer_data.country_id;
            var country_name = customer_data.country_name.toUpperCase();
            var state_id = customer_data.state_id;
            var state_name = customer_data.state_name.toUpperCase();
            var lga_id = customer_data.lga_id;
            var lga_name = customer_data.lga_name.toUpperCase();
           
            var passport = customer_data.passport;
            var documentStoragePath = customer_data.documentStoragePath + '/' + passport;
            
            $('#fullname').html(fullname);
            $('#last_login').html(last_login);

            $('#firstname').val(first_name);
            $('#middlename').val(middle_name);
            $('#lastname').val(last_name);
            $('#dob').val(dob);
            $('#gender_id').val(dob);
            $('#id_number').val(id_number);
            $('#address').val(address);
            $("#email_address").val(email_address);
            $("#mobileno").val(mobile_number);
            $("#branch_name").val(branch_name);
            $("#branch_id").val(branch_id);
            $("#customer_id").val(customer_id);
            $("#reg_date").val(date_of_reg);

            $("#customer_pic").attr('src', documentStoragePath);

          $("#gender_id").append('<option value="' + gender_id + '" selected="selected">' + gender_name +"</option>");
          $("#marital_status_id").append('<option value="' + marital_status_id + '" selected="selected">' + marital_status_name +"</option>");
          $("#identification_id").append('<option value="' + identification_id + '" selected="selected">' + identification_type +"</option>");
          $("#customer_type_id").append('<option value="' + customer_type_id + '" selected="selected">' + customer_type_name +"</option>");
          $("#account_id").append('<option value="' + account_type_id + '" selected="selected">' + account_type_name +"</option>");
          $("#status_id").append('<option value="' + status_id + '" selected="selected">' + status_name +"</option>");
          $("#country_id").append('<option value="' + country_id + '" selected="selected">' + country_name +"</option>");
          $("#state_id").append('<option value="' + state_id + '" selected="selected">' + state_name +"</option>");
          $("#lga_id").append('<option value="' + lga_id + '" selected="selected">' + lga_name +"</option>");
  
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
  axios.post(endpoint + '/admin/fetch-all-branch-api?access_key=' + access_key, null, { headers: apikey })
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

function showError(errorType, message) {
  $('#warning-div').html('<div><i class="bi-exclamation-circle"></i></div>' + errorType + '<br /><span>' + message + '</span>').fadeIn(500).delay(3000).fadeOut(100);
}

function _add_new_staff(){
	var firstname = $('#firstname').val();
	var middlename = $('#middlename').val();
	var lastname = $('#lastname').val();
	var phoneno = $('#phoneno').val();
	var email = $('#email').val();
	var dob = $('#dob').val();
	var gender_id = $('#gender_id').val();
	var marital_status_id = $('#marital_status_id').val();
  var qualification_id = $('#qualification_id').val();	
  var identification_id = $('#identification_id').val();	
  var id_number = $('#id_number').val();	
  var country_id = $('#country_id').val();
  var state_id = $('#state_id').val();
  var lga_id = $('#lga_id').val();
  var address = $('#address').val();
  var branch_id = $('#branch_id').val();
  var department_id = $('#department_id').val();
  var role_id = $('#role_id').val();
  var post_id = $('#post_id').val();
  var status_id = $('#status_id').val();

	  if (firstname == '') {
		showError('FIRSTNAME ERROR!', 'Fill all Fields To Continue');
	  } else if (middlename == '') {
		showError('MIDDLENAME!', 'Fill all Fields To Continue');
	  } else if (lastname == '') {
		showError('LASTNAME ERROR!', 'Fill all Fields To Continue');
	  } else if (email == '') {
		showError('EMAIL ERROR!', 'Fill all Fields To Continue');
	  } else if (dob == '') {
		showError('DATE OF BIRTH ERROR!', 'Fill all Fields To Continue');
	  } else if (gender_id == '') {
		showError('GENDER ERROR!', 'Please select a gender');
	  } else if (marital_status_id === '') {
		showError('MARITAL STATUS ERROR!', 'Please select a marital status');
	  } else if (qualification_id === '') {
		showError('QUALIFICATION ERROR!', 'Please select a qualification');
    }else if(identification_id==''){
      showError('IDENTIFICATION ERROR!', 'Please select an identification');
    }else if (id_number==''){
      showError('ID NUMBER ERROR!', 'Fill all Fields To Continue');
    }else if (country_id==''){
      showError('COUNTRY ERROR!', 'Please select a country');
    }else if (state_id==''){
      showError('STATE ERROR!', 'Please select a state');
    }else if (lga_id==''){
      showError('LOCAL GOVERNMENT ERROR!', 'Please select a local government');
    }else if (address==''){
      showError('ADDRESS ERROR!', 'Fill all Fields To Continue');
    }else if (branch_id==''){
      showError('BRANCH ERROR!', 'Please select a branch');
    }else if (department_id==''){
      showError('DEPARTMENT ERROR!', 'Please select a department');
    }else if (role_id==''){
      showError('ROLE ERROR!', 'Please select a role');
    }else if (post_id==''){
      showError('POST ERROR!', 'Please select a post');
    }else if (status_id==''){
      showError('STATUS ERROR!', 'Please select a status');
    }else if (!validateTextInput(firstname)) {
		  showError('FIRSTNAME ERROR!', 'Digit is not allowed in firstname input');
    }else if (!validateTextInput(lastname)){
      showError('LASTNAME ERROR!', 'Digit is not allowed in lastname input');
    }else if (!validateTextInput(middlename)){
      showError('MIDDLENAME ERROR!', 'Digit is not allowed in middlename input');
    }else if (!validatePhoneNumber(phoneno)) {
		showError('PHONE ERROR!', 'Please ensure you enter a valid phone number');
  
	}else{
  
	  var btn_text  = $('#submit_btn').html();
	  $('#submit_btn').html('<i id="spinner" class="bi bi-arrow-repeat"></i> PROCESSING...');
	  document.getElementById('submit_btn').disabled = true;
  
	  var formData ='firstname=' + firstname + '&middlename=' + middlename + '&lastname=' + lastname + '&mobile_no=' + phoneno + '&email_address=' + email + '&dob=' + dob + '&gender_id=' + gender_id + '&marital_status_id=' + marital_status_id + '&qualification_id=' + qualification_id + '&identification_id=' + identification_id + '&id_number=' + id_number + '&branch_id=' + branch_id + '&lga_id=' + lga_id + '&address=' + address + '&department_id=' + department_id + '&role_id=' + role_id + '&post_id=' + post_id + '&status_id=' + status_id;

	  axios.post(endpoint + '/admin/add-new-staff-api?access_key=' + access_key, formData, { headers: apikey })
	  .then(response => {
		  var access_check = response.data.check;
		  var success = response.data.success;
		  var message = response.data.message;

		  if (access_check == 0) {
			  _logout_(); 
		  } else {
			if (success == true) {
				$('#success-div').html('<div><i class="bi-check-all"></i></div>SUCCESS!' + ' ' + message).fadeIn(500).delay(5000).fadeOut(100);
				$('#submit_btn').html(btn_text);
				document.getElementById('submit_btn').disabled=false;
				alert_close();
				_all_staff();
			}else{
				$('#warning-div').html('<div><i class="bi-check-all"></i></div>ERROR!' + ' ' + message).fadeIn(500).delay(5000).fadeOut(100);
          		$('#submit_btn').html(btn_text);
          		document.getElementById('submit_btn').disabled=false;
			}
		  }
	  })
	  .catch(error => {
		$('#warning-div').html('<div><i class="bi-check-all"></i></div>ERROR!' + ' ' + error).fadeIn(500).delay(5000).fadeOut(100);
		$('#submit_btn').html(btn_text);
		document.getElementById('submit_btn').disabled = false;
	  });
	  
	}
  }

  function _get_customer_type() {
    axios.post(endpoint + '/admin/fetch-customer-type-api?access_key=' + access_key, null, { headers: apikey })
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
                    var customer_type_id = fetch[i].customer_type_id;
                    var customer_type_name = fetch[i].customer_type_name;
                    text += '<option value="' + customer_type_id + '">' + customer_type_name + '</option>';
                }
                $('#customer_type_id').html('<option value="">== SELECT CUSTOMER TYPE ==</option>' + text);
            }
        }
    });
  }

  function _get_account_type() {
    axios.post(endpoint + '/admin/fetch-account-type-api?access_key=' + access_key, null, { headers: apikey })
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
                    var account_type_id = fetch[i].account_type_id;
                    var account_type_name = fetch[i].account_type_name;
                    text += '<option value="' + account_type_id + '">' + account_type_name + '</option>';
                }
                $('#account_type_id').html('<option value="">== SELECT ACCOUNT TYPE ==</option>' + text);
            }
        }
    });
  }

  function _add_new_customer(){
    var bvn = $('#bvn').val();
    var firstname = $('#firstname').val();
    var middlename = $('#middlename').val();
    var lastname = $('#lastname').val();
    var phoneno = $('#phoneno').val();
    var email = $('#email').val();
    var dob = $('#dob').val();
    var gender_id = $('#gender_id').val();
    var marital_status_id = $('#marital_status_id').val();
    var qualification_id = $('#qualification_id').val();	
    var identification_id = $('#identification_id').val();	
    var id_number = $('#id_number').val();	
    var country_id = $('#country_id').val();
    var state_id = $('#state_id').val();
    var lga_id = $('#lga_id').val();
    var address = $('#address').val();
    var branch_id = $('#branch_id').val();
    var customer_type_id = $('#customer_type_id').val();
    var account_type_id = $('#account_type_id').val();
    var status_id = $('#status_id').val();
    
    if (bvn==''){
      showError('BVN ERROR!', 'Fill all Fields To Continue');
    }else if (firstname == '') {
      showError('FIRSTNAME ERROR!', 'Fill all Fields To Continue');
      } else if (middlename == '') {
      showError('MIDDLENAME!', 'Fill all Fields To Continue');
      } else if (lastname == '') {
      showError('LASTNAME ERROR!', 'Fill all Fields To Continue');
      } else if (email == '') {
      showError('EMAIL ERROR!', 'Fill all Fields To Continue');
      } else if (dob == '') {
      showError('DATE OF BIRTH ERROR!', 'Fill all Fields To Continue');
      } else if (gender_id == '') {
      showError('GENDER ERROR!', 'Please select a gender');
      } else if (marital_status_id === '') {
      showError('MARITAL STATUS ERROR!', 'Please select a marital status');
      } else if (qualification_id === '') {
      showError('QUALIFICATION ERROR!', 'Please select a qualification');
      }else if(identification_id==''){
        showError('IDENTIFICATION ERROR!', 'Please select an identification');
      }else if (id_number==''){
        showError('ID NUMBER ERROR!', 'Fill all Fields To Continue');
      }else if (country_id==''){
        showError('COUNTRY ERROR!', 'Please select a country');
      }else if (state_id==''){
        showError('STATE ERROR!', 'Please select a state');
      }else if (lga_id==''){
        showError('LOCAL GOVERNMENT ERROR!', 'Please select a local government');
      }else if (address==''){
        showError('ADDRESS ERROR!', 'Fill all Fields To Continue');
      }else if (branch_id==''){
        showError('BRANCH ERROR!', 'Please select a branch');
      }else if (customer_type_id==''){
        showError('CUSTOMER TYPE ERROR!', 'Please select a customer type');
      }else if (account_type_id==''){
        showError('ACCOUNT TYPE ERROR!', 'Please select a account type');
      }else if (status_id==''){
        showError('STATUS ERROR!', 'Please select a status');
      }else if (!validateTextInput(firstname)) {
        showError('FIRSTNAME ERROR!', 'Digit is not allowed in firstname input');
      }else if (!validateTextInput(lastname)){
        showError('LASTNAME ERROR!', 'Digit is not allowed in lastname input');
      }else if (!validateTextInput(middlename)){
        showError('MIDDLENAME ERROR!', 'Digit is not allowed in middlename input');
      }else if (!validatePhoneNumber(phoneno)) {
      showError('PHONE ERROR!', 'Please ensure you enter a valid phone number');
    
    }else{
    
      var btn_text  = $('#submit_btn').html();
      $('#submit_btn').html('<i id="spinner" class="bi bi-arrow-repeat"></i> PROCESSING...');
      document.getElementById('submit_btn').disabled = true;
    
      var formData ='firstname=' + firstname + '&middlename=' + middlename + '&lastname=' + lastname + '&mobile_no=' + phoneno + '&email_address=' + email + '&dob=' + dob + '&gender_id=' + gender_id + '&marital_status_id=' + marital_status_id + '&identification_id=' + identification_id + '&id_number=' + id_number + '&branch_id=' + branch_id + '&lga_id=' + lga_id + '&address=' + address + '&status_id=' + status_id + '&bvn=' + bvn + '&customer_type_id=' + customer_type_id + '&account_type_id=' + account_type_id;
  
      axios.post(endpoint + '/admin/add-new-customer-api?access_key=' + access_key, formData, { headers: apikey })
      .then(response => {
        var access_check = response.data.check;
        var success = response.data.success;
        var message = response.data.message;
  
        if (access_check == 0) {
          _logout_(); 
        } else {
        if (success == true) {
          $('#success-div').html('<div><i class="bi-check-all"></i></div>SUCCESS!' + ' ' + message).fadeIn(500).delay(5000).fadeOut(100);
          $('#submit_btn').html(btn_text);
          document.getElementById('submit_btn').disabled=false;
          alert_close();
          _all_customer(1, '', '');
        }else{
          $('#warning-div').html('<div><i class="bi-check-all"></i></div>ERROR!' + ' ' + message).fadeIn(500).delay(5000).fadeOut(100);
          $('#submit_btn').html(btn_text);
          document.getElementById('submit_btn').disabled=false;
        }
        }
      })
      .catch(error => {
      $('#warning-div').html('<div><i class="bi-check-all"></i></div>ERROR!' + ' ' + error).fadeIn(500).delay(5000).fadeOut(100);
      $('#submit_btn').html(btn_text);
      document.getElementById('submit_btn').disabled = false;
      });
      
    }
    }

    function _all_branch(page, status_id) {
      $('#fetch_all_branch').html('<div class="ajax-loader"><br><img src="src/all-images/image-pix/ajax-loader.gif"/></div>').fadeIn(500);
      var search_txt = $('#search').val();
      var status_id = $('#status_id').val();
    
      var formData = 'search_txt=' + search_txt + '&status_id=' + status_id;
    
      axios.post(endpoint + '/admin/fetch-all-branch-api?access_key=' + access_key + '&page=' + page, formData, { headers: apikey })
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
                          text = '<table class="w-[100%] border-collapse"><thead><tr><th>SN</th><th>BRANCH ID</th><th>BRANCH NAME</th><th>BRANCH EMAIL ADDRESS</th><th>BRANCH MOBILE NUMBER</th><th>CREATED TIME</th><th>STATUS</th><th>ACTION</th></tr></thead><tbody class="bg-white">';
                          for (var i = 0; i < fetch.length; i++) {
                              var branch = fetch[i];
                              var branch_id = branch.branch_id;
                              var branch_name = branch.branch_name.toUpperCase();
                              var branch_email = branch.branch_email;
                              var branch_mobile_number = branch.branch_mobile_number;
                              var created_at = branch.created_time;
                              var status_name = branch.status_name;
    
                              text +=
                                  '<tr>'+
                                      '<td>' + (i + 1) + '</td>'+
                                      '<td>' + branch_id + '</td>'+
                                      '<td>' + branch_name + '</td>'+
                                      '<td>' + branch_email + '</td>'+
                                      '<td>' + branch_mobile_number + '</td>'+
                                      '<td>' + created_at + '</td>'+
                                      '<td>' + status_name + '</td>'+
                                      '<td><i onclick="_get_form_with_id(' + "'update-branch'" + "," + "'" + branch_id + "'" + ')" class="bi bi-pencil-square text-[15px] text-white p-[8px] bg-primary-color cursor-pointer hover:bg-[#444444]" title="VIEW PROFILE"></i></td>'+
                                  '</tr>';
                          }
                          text += '</tbody></table>' +
    
                          '<div class="my-[10px] flex justify-between">'+
                              '<div class="text-[#3a4669]">Showing ' + pagination.current_page + ' to ' + pagination.total_pages + ' of ' + pagination.total_branch + ' entries</div>'+
                              '<div class="flex gap-1">'+
                                  '<button class="text-sm py-[8px] px-[15px]" ' + (pagination.prev_page ? 'onclick="_all_branch(' + pagination.prev_page + ', \'' + status_id + '\')"' : 'disabled') + '>PREVIOUS</button>' +
                                  '<button class="text-sm py-[8px] px-[15px]" ' + (pagination.next_page ? 'onclick="_all_branch(' + pagination.next_page + ', \'' + status_id + '\')"' : 'disabled') + '>NEXT</button>'+
                              '</div>'+
                          '</div>';
    
                      } 
    
                      $('#fetch_all_branch').html(text);
                  } else {
            text = '<table class="w-[100%] border-collapse"><thead><tr><th>SN</th><th>BRANCH ID</th><th>BRANCH NAME</th><th>BRANCH EMAIL ADDRESS</th><th>BRANCH MOBILE NUMBER</th><th>CREATED TIME</th><th>STATUS</th><th>ACTION</th></tr></thead>' +
            '<tbody class="bg-white">' + 
            '</tbody></table>' + 
            '<div class="bg-[#FAF3F0] text-[#3a4669] border-[#F2BDA2] border-[1px] w-[100%] mx-auto mt-[5px] flex gap-1 p-[10px] pl-[30px] text-[12px]">' +
            '<i class="bi bi-bell"></i><p>' + message + '</p>' +
            '</div>';
    
                    $('#fetch_all_branch').html(text);
                  }
              }
          })
          .catch(error => {
              console.error('Error fetching branches:', error);
              $('#fetch_all_branch').html('<p>There was an error fetching the branches. Please try again later.</p>');
          });
    }

    function _get_each_branch(branch_id){

      var formData = 'branch_id=' + branch_id;
      
      axios.post(endpoint+'/admin/fetch-all-branch-api?access_key='+access_key, formData, { headers: apikey })
        .then(response => {
        var access_check = response.data.check;
        var success = response.data.success;
      
        if (access_check==0){
          _logout_();
        }else{
      
          if (success==true){
                var branch_data = response.data.data[0];
                var branch_name = branch_data.branch_name;
                var branch_email = branch_data.branch_email;
                var address = branch_data.branch_address;
                var branch_zipcode = branch_data.branch_zipcode;
                var branch_sortcode = branch_data.branch_sortcode;
                var country_id = branch_data.country_id;
                var country_name = branch_data.country_name.toUpperCase();
                var state_id = branch_data.state_id;
                var state_name = branch_data.state_name.toUpperCase();
                var lga_id = branch_data.lga_id;
                var lga_name = branch_data.lga_name.toUpperCase();
                var status_id = branch_data.status_id;
                var status_name = branch_data.status_name;
                var branch_mobile_number = branch_data.branch_mobile_number;
    
                $('#branch_name').val(branch_name);
                $('#branch_email').val(branch_email);
                $('#address').val(address);
                $('#branch_zipcode').val(branch_zipcode);
                $('#branch_sortcode').val(branch_sortcode);
                $('#branch_mobile_number').val(branch_mobile_number);
    
              $("#country_id").append('<option value="' + country_id + '" selected="selected">' + country_name +"</option>");
              $("#state_id").append('<option value="' + state_id + '" selected="selected">' + state_name +"</option>");
              $("#lga_id").append('<option value="' + lga_id + '" selected="selected">' + lga_name +"</option>");
              $("#status_id").append('<option value="' + status_id + '" selected="selected">' + status_name +"</option>");
      
          }
        }
      });
    }

    function _get_country() {
      axios.post(endpoint + '/admin/fetch-country-api?access_key=' + access_key, null, { headers: apikey })
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
                      var country_id = fetch[i].country_id;
                      var country_name = fetch[i].country_name.toUpperCase();
                      text += '<option value="' + country_id + '">' + country_name + '</option>';
                  }
                  $('#country_id').html('<option value="">== SELECT COUNTRY ==</option>' + text);
              }
          }
      });
    }

    function _get_state(country_id) {
      if (!country_id) {
          return;
      }
    formData='country_id=' + country_id
    
      axios.post(endpoint + '/admin/fetch-state-api?access_key=' + access_key, formData, { headers: apikey })
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
                      var state_id = fetch[i].state_id;
                      var state_name = fetch[i].state_name.toUpperCase();
                      text += '<option value="' + state_id + '">' + state_name + '</option>';
                  }
                  $('#state_id').html('<option value="">== SELECT STATE ==</option>' + text);
              }
          }
      });
    }

    function _get_lga(state_id) {
      if (!state_id) {
          return;
      }
    formData='state_id=' + state_id
    
      axios.post(endpoint + '/admin/fetch-lga-api?access_key=' + access_key, formData, { headers: apikey })
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
                      var lga_id = fetch[i].lga_id;
                      var lga_name = fetch[i].lga_name.toUpperCase();
                      text += '<option value="' + lga_id + '">' + lga_name + '</option>';
                  }
                  $('#lga_id').html('<option value="">== SELECT LOCAL GOVERNMENT ==</option>' + text);
              }
          }
      });
    }

    function _add_new_branch(){
      var branch_name = $('#branch_name').val();
      var branch_email = $('#branch_email').val();
      var branch_mobile_number = $('#branch_mobile_number').val();
      var address = $('#address').val();
      var branch_zipcode = $('#branch_zipcode').val();
      var branch_sortcode = $('#branch_sortcode').val();
      var state_id = $('#state_id').val();
      var lga_id = $('#lga_id').val();
      var status_id = $('#status_id').val();
      
      if (branch_name==''){
        showError('BRANCH NAME ERROR!', 'Fill all Fields To Continue');
      }else if (branch_email == '') {
        showError('BRANCH EMAIL ERROR!', 'Fill all Fields To Continue');
        } else if (address == '') {
        showError('BRANCH ADDRESS ERROR!', 'Fill all Fields To Continue');
        } else if (branch_zipcode == '') {
        showError('BRANCH ZIPCODE ERROR!', 'Fill all Fields To Continue');
        } else if (branch_sortcode == '') {
        showError('BRANCH SORTCODE ERROR!', 'Fill all Fields To Continue');
        }else if (country_id==''){
          showError('COUNTRY ERROR!', 'Please select a country');
        }else if (state_id==''){
          showError('STATE ERROR!', 'Please select a state');
        }else if (lga_id==''){
          showError('LOCAL GOVERNMENT ERROR!', 'Please select a local government');
        }else if (address==''){
          showError('ADDRESS ERROR!', 'Fill all Fields To Continue');
        }else if (status_id==''){
          showError('STATUS ERROR!', 'Please select a status');
      
      }else{
      
        var btn_text  = $('#submit_btn').html();
        $('#submit_btn').html('<i id="spinner" class="bi bi-arrow-repeat"></i> PROCESSING...');
        document.getElementById('submit_btn').disabled = true;
      
        var formData ='branch_name=' + branch_name + '&branch_email=' + branch_email + '&branch_mobile_number=' + branch_mobile_number + '&address=' + address + '&branch_zipcode=' + branch_zipcode + '&branch_sortcode=' + branch_sortcode + '&lga_id=' + lga_id + '&status_id=' + status_id;
    
        axios.post(endpoint + '/admin/add-new-branch-api?access_key=' + access_key, formData, { headers: apikey })
        .then(response => {
          var access_check = response.data.check;
          var success = response.data.success;
          var message = response.data.message;
    
          if (access_check == 0) {
            _logout_(); 
          } else {
          if (success == true) {
            $('#success-div').html('<div><i class="bi-check-all"></i></div>SUCCESS!' + ' ' + message).fadeIn(500).delay(5000).fadeOut(100);
            $('#submit_btn').html(btn_text);
            document.getElementById('submit_btn').disabled=false;
            alert_close();
            _all_branch(1, '');
          }else{
            $('#warning-div').html('<div><i class="bi-check-all"></i></div>ERROR!' + ' ' + message).fadeIn(500).delay(5000).fadeOut(100);
            $('#submit_btn').html(btn_text);
            document.getElementById('submit_btn').disabled=false;
          }
          }
        })
        .catch(error => {
        $('#warning-div').html('<div><i class="bi-check-all"></i></div>ERROR!' + ' ' + error).fadeIn(500).delay(5000).fadeOut(100);
        $('#submit_btn').html(btn_text);
        document.getElementById('submit_btn').disabled = false;
        });
        
      }
      }

      function fetchDepartment(page, department_id) {
        $('#fetch_all_department').html('<div class="ajax-loader"><br><img src="src/all-images/image-pix/ajax-loader.gif"/></div>').fadeIn(500);
        var search_txt = $('#search').val();
      
        var formData = 'department_id=' + department_id + '&search_txt=' + search_txt;
      
        axios.post(endpoint + '/admin/fetch-department-api?access_key=' + access_key + '&page=' + page, formData, { headers: apikey })
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
                            text = '<table class="w-[100%] border-collapse"><thead><tr><th>SN</th><th>DEPARTMENT NAME</th><th>DATE CREATED</th><th>ACTION</th></tr></thead><tbody class="bg-white">';
                            for (var i = 0; i < fetch.length; i++) {
                                var department_id = fetch[i].department_id;
                                var department_name = fetch[i].department_name.toUpperCase();
                                var created_time = fetch[i].created_time;
      
                                text +=
                                '<tr>'+
                                    '<td>' + (i + 1) + '</td>'+
                                    '<td>' + department_name + '</td>'+
                                    '<td>' + created_time + '</td>'+
                                    '<td><i onclick="_get_form_with_id(' + "'update-department'" + "," + "'" + department_id + "'" + ')" class="bi bi-pencil-square text-[15px] text-white p-[8px] bg-primary-color cursor-pointer hover:bg-[#444444]" title="VIEW DEPARTMENT"></i></td>'+
                                '</tr>';
                            }
                            text += '</tbody></table>'+
      
                            '<div class="my-[10px] flex justify-between">'+
                                '<div class="text-[#3a4669]">Showing ' + pagination.current_page + ' to ' + pagination.total_pages + ' of ' + pagination.total_department + ' entries</div>'+
                                '<div class="flex gap-1">'+
                                    '<button class="text-sm py-[8px] px-[15px]" ' +(pagination.prev_page ? 'onclick="fetchDepartment(' + pagination.prev_page + ', \'\')"' : 'disabled') +'>PREVIOUS</button>' +
                                    '<button class="text-sm py-[8px] px-[15px]" ' +(pagination.next_page ? 'onclick="fetchDepartment(' + pagination.next_page + ', \'\')"' : 'disabled') +'>NEXT</button>';
                                '</div>'+
                            '</div>';
      
                        } 
      
                        $('#fetch_all_department').html(text);
                    } else {
                        text = '<table class="w-[100%] border-collapse"><thead><tr><th>SN</th><th>DEPARTMENT NAME</th><th>DATE CREATED</th><th>ACTION</th></tr></thead>' +
                        '<tbody class="bg-white">' + 
                        '</tbody></table>' + 
                        '<div class="bg-[#FAF3F0] text-[#3a4669] border-[#F2BDA2] border-[1px] w-[100%] mx-auto mt-[5px] flex gap-1 p-[10px] pl-[30px] text-[12px]">' +
                        '<i class="bi bi-bell"></i><p>' + message + '</p>' +
                        '</div>';
                 
                        $('#fetch_all_department').html(text);
                 
                    }
                }
            })
            .catch(error => {
                console.error('Error fetching department:', error);
                $('#fetch_all_department').html('<p>There was an error fetching the department. Please try again later.</p>');
            });
      }

      function _get_each_department(department_id){

        var formData = 'department_id=' + department_id;
        
        axios.post(endpoint+'/admin/fetch-department-api?access_key='+access_key, formData, { headers: apikey })
          .then(response => {
          var access_check = response.data.check;
          var success = response.data.success;
        
          if (access_check==0){
            _logout_();
          }else{
        
            if (success==true){
                  var department_data = response.data.data[0];
                  department_name = department_data.department_name;
                  
                $('#department_name').val(department_name);
        
            }
          }
        });
      }

      function _all_loan(page, status_id) {
        $('#fetch_all_loan').html('<div class="ajax-loader"><br><img src="src/all-images/image-pix/ajax-loader.gif"/></div>').fadeIn(500);
        var search_txt = $('#search').val();
        var status_id = $('#status_id').val();
      
        var formData = 'search_txt=' + search_txt + '&status_id=' + status_id;
      
        axios.post(endpoint + '/admin/fetch-all-loan-requests-api?access_key=' + access_key + '&page=' + page, formData, { headers: apikey })
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
                          text = '<table class="w-[100%] border-collapse"><thead><tr><th>SN</th><th>PASSPORT</th><th>LOAN ID</th><th>FULLNAME</th><th>LOAN AMOUNT</th><th>LOAN DURATION</th><th>BRANCH</th><th>ACTION</th></tr></thead><tbody class="bg-white">';
                          for (var i = 0; i < fetch.length; i++) {
                              var loan_request = fetch[i];
                              var loan_id = loan_request.loan_id;
                              var first_name = loan_request.first_name.toUpperCase();
                              var middle_name = loan_request.middle_name.toUpperCase();
                              var last_name = loan_request.last_name.toUpperCase();
                              var loan_amount = loan_request.formatted_loan_amount;
                              var loan_duration = loan_request.loan_duration;
                              var branch_name = loan_request.branch_name;
                              var passport = loan_request.passport;
                              var documentStoragePath = loan_request.documentStoragePath;
    
                              text +=
                                  '<tr>'+
                                      '<td>' + (i + 1) + '</td>'+
                                      '<td><div class="w-[25px] h-[25px] rounded-full"><img class="w-[100%] h-[100%] object-cover rounded-full" src="' + documentStoragePath + '/' + passport + '" alt=""></div></td>'+
                                      '<td>'+ loan_id +'</td>'+
                                      '<td>' + first_name + ' ' + middle_name + ' ' + last_name +  '</td>'+
                                      '<td>'+ 'N ' + loan_amount + '</td>'+
                                      '<td>' + loan_duration + '</td>'+
                                      '<td>' + branch_name + '</td>'+
                                      '<td><i onclick="_get_form_with_id(' + "'customer-loan-module'" + "," + "'" + loan_id + "'" + ')" class="bi bi-pencil-square text-[15px] text-white p-[8px] bg-primary-color cursor-pointer hover:bg-[#444444]" title="VIEW PROFILE"></i></td>'+
                                  '</tr>';
                          }
                            text += '</tbody></table>' +
      
                            '<div class="my-[10px] flex justify-between">'+
                                '<div class="text-[#3a4669]">Showing ' + pagination.current_page + ' to ' + pagination.total_pages + ' of ' + pagination.total_loan + ' entries</div>'+
                                '<div class="flex gap-1">'+
                                    '<button class="text-sm py-[8px] px-[15px]" ' + (pagination.prev_page ? 'onclick="_all_loan(' + pagination.prev_page + ', \'' + status_id + '\')"' : 'disabled') + '>PREVIOUS</button>' +
                                    '<button class="text-sm py-[8px] px-[15px]" ' + (pagination.next_page ? 'onclick="_all_loan(' + pagination.next_page + ', \'' + status_id + '\')"' : 'disabled') + '>NEXT</button>'+
                                '</div>'+
                            '</div>';
      
                        } 
      
                        $('#fetch_all_loan').html(text);
                    } else {
              text = '<table class="w-[100%] border-collapse"><thead><tr><th>SN</th><th>PASSPORT</th><th>LOAN ID</th><th>FULLNAME</th><th>LOAN AMOUNT</th><th>LOAN DURATION</th><th>BRANCH</th><th>ACTION</th></tr></thead>' +
              '<tbody class="bg-white">' + 
              '</tbody></table>' + 
              '<div class="bg-[#FAF3F0] text-[#3a4669] border-[#F2BDA2] border-[1px] w-[100%] mx-auto mt-[5px] flex gap-1 p-[10px] pl-[30px] text-[12px]">' +
              '<i class="bi bi-bell"></i><p>' + message + '</p>' +
              '</div>';
      
                      $('#fetch_all_loan').html(text);
                    }
                }
            })
            .catch(error => {
                console.error('Error fetching loan requests:', error);
                $('#fetch_all_loan').html('<p>There was an error fetching the loan requests. Please try again later.</p>');
            });
      }

      function _get_each_loan(loan_id){

        var formData = 'loan_id=' + loan_id;
        
        axios.post(endpoint+'/admin/fetch-all-loan-requests-api?access_key='+access_key, formData, { headers: apikey })
          .then(response => {
          var access_check = response.data.check;
          var success = response.data.success;
        
          if (access_check==0){
            _logout_();
          }else{
        
            if (success==true){
                  var loan_data = response.data.data[0];
                  var last_login = loan_data.last_login;
                  var first_name = loan_data.first_name;
                  var middle_name = loan_data.middle_name;
                  var last_name = loan_data.last_name;
                  var othername = middle_name + ' ' + last_name;
                  var loan_id = loan_data.loan_id;
                  var loan_amount = loan_data.formatted_loan_amount;
                  var loan_duration = loan_data.loan_duration;
                  var loan_date = loan_data.loan_date;
                  var branch_name = loan_data.branch_name;
                  var customer_type_name = loan_data.customer_type_name;
                  var account_type_name = loan_data.account_type_name;
                  var customer_id = loan_data.customer_id;
                  var created_time = loan_data.created_time;

                  var passport = loan_data.passport;
                  var documentStoragePath = loan_data.documentStoragePath + '/' + passport;
      
                  $('#last_login').html(last_login);

                  $('#fullname').html(first_name + ' ' + middle_name + ' ' + last_name);

                  $('#last_login').val(last_login);
                  $('#surname').val(first_name);
                  $('#othernames').val(othername);
                  $('#loan_id').val(loan_id);
                  $('#loan_amount').val(loan_amount);
                  $('#loan_duration').val(loan_duration);
                  $('#date').val(loan_date);
                  $('#branch_id').val(branch_name);
                  $('#customer_type_id').val(customer_type_name);
                  $('#account_type_id').val(account_type_name);
                  $('#customer_id').val(customer_id);
                  $('#reg_date').val(created_time);

                  $("#customer_pic").attr('src', documentStoragePath);
        
            }
          }
        });
      }

      function _loan_reschedule(loan_id) {
        $('#fetch_all_loan_reschedule').html('<div class="ajax-loader"><br><img src="src/all-images/image-pix/ajax-loader.gif"/></div>').fadeIn(500);
      
        var formData = 'loan_id=' + loan_id;
      
        axios.post(endpoint + '/admin/fetch-all-loan-schedule-api?access_key=' + access_key, formData, { headers: apikey })
            .then(response => {
                var access_check = response.data.check;
                var success = response.data.success;
                var message = response.data.message;
                var fetch = response.data.data;
      
                if (access_check == 0) {
                    _logout_();
                } else {
                    var text = '';
      
                    if (success == true) {
                        if (fetch.length > 0) {
                          text = '<table class="w-[100%] border-collapse"><thead><tr><th>SN</th><th>LOAN ID</th><th>MONTH</th><th>LOAN BALANCE</th><th>SUB PAYMENT</th><th>INTEREST</th><th>TOTAL REPAYMENT</th><th>TRANSACTION DATE</th></tr></thead><tbody class="bg-white">';
                          for (var i = 0; i < fetch.length; i++) {
                              var _loan_schedule = fetch[i];
                              var loan_id = _loan_schedule.loan_id;
                              var month = _loan_schedule.month;
                              var principal = _loan_schedule.formatted_principal;
                              var monthly_repayment = _loan_schedule.formatted_monthly_repayment;
                              var interest = _loan_schedule.formmatted_interest;
                              var total_repayment = _loan_schedule.formatted_monthly_repayment;
                              var date = _loan_schedule.loan_date;
    
                              text +=
                                  '<tr>'+
                                      '<td>' + (i + 1) + '</td>'+
                                      '<td>'+ loan_id +'</td>'+
                                      '<td>' + month + '</td>'+
                                      '<td>'+ principal +'</td>'+
                                      '<td>' + monthly_repayment + '</td>'+
                                      '<td>' + interest + '</td>'+
                                      '<td>' + total_repayment + '</td>'+
                                      '<td>' + date + '</td>'+
                                  '</tr>';
                          }
                            text += '</tbody></table>';
      
                        } 
      
                        $('#fetch_all_loan_reschedule').html(text);
                    } else {
              text = '<table class="w-[100%] border-collapse"><thead><tr><th>SN</th><th>PASSPORT</th><th>LOAN ID</th><th>FULLNAME</th><th>LOAN AMOUNT</th><th>LOAN DURATION</th><th>BRANCH</th><th>ACTION</th></tr></thead>' +
              '<tbody class="bg-white">' + 
              '</tbody></table>' + 
              '<div class="bg-[#FAF3F0] text-[#3a4669] border-[#F2BDA2] border-[1px] w-[100%] mx-auto mt-[5px] flex gap-1 p-[10px] pl-[30px] text-[12px]">' +
              '<i class="bi bi-bell"></i><p>' + message + '</p>' +
              '</div>';
      
                      $('#fetch_all_loan_reschedule').html(text);
                    }
                }
            })
            .catch(error => {
                console.error('Error fetching loan reschedule:', error);
                $('#fetch_all_loan_reschedule').html('<p>There was an error fetching the loan reschedule. Please try again later.</p>');
            });
      }

      function _update_staff_data(staff_id) {
        var firstname = $('#firstname').val();
        var middlename = $('#middlename').val();
        var lastname = $('#lastname').val();
        var dob = $('#dob').val();
        var gender_id = $('#gender_id').val();
        var marital_status_id = $('#marital_status_id').val();
        var identification_id = $('#identification_id').val();
        var id_number = $('#id_number').val();
        var email_address = $('#email_address').val();
        var phoneno = $('#phoneno').val();
        var address = $('#address').val();
        var post_id = $('#post_id').val();
        var branch_id = $('#branch_id').val();
        var department_id = $('#department_id').val();
        var status_id = $('#status_id').val();
        var role_id = $('#role_id').val();
        var lga_id = $('#lga_id').val();
        var qualification_id = $('#qualification_id').val();
        
        if (firstname == '') {
            showError('FIRST NAME ERROR!', 'Please fill in the first name.');
        } else if (lastname == '') {
            showError('LAST NAME ERROR!', 'Please fill in the last name.');
        } else if (email_address == '') {
            showError('EMAIL ADDRESS ERROR!', 'Please fill in the email address.');
        } else if (phoneno == '') {
            showError('PHONE NUMBER ERROR!', 'Please fill in the phone number.');
        } else if (address == '') {
            showError('ADDRESS ERROR!', 'Please fill in the address.');
        } else if (post_id == '') {
            showError('POST ERROR!', 'Please fill in the post ID.');
        } else if (branch_id == '') {
            showError('BRANCH ERROR!', 'Please fill in the branch ID.');
        } else if (department_id == '') {
            showError('DEPARTMENT ERROR!', 'Please fill in the department ID.');
        } else if (!validatePhoneNumber(phoneno)) {
            showError('PHONE NUMBER ERROR!', 'Invalid phone number format.');
        } else if (!validateTextInput(firstname) || !validateTextInput(lastname)) {
            showError('NAME ERROR!', 'Names must contain only valid characters.');
        } else {
            var btn_text = $('#submit_btn').html();
            $('#submit_btn').html('<i id="spinner" class="bi bi-arrow-repeat"></i> UPDATING...');
            document.getElementById('submit_btn').disabled = true;
    
            var formData = 'firstname=' + firstname + 
                           '&middlename=' + middlename + 
                           '&lastname=' + lastname + 
                           '&dob=' + dob + 
                           '&gender_id=' + gender_id + 
                           '&marital_status_id=' + marital_status_id + 
                           '&identification_id=' + identification_id + 
                           '&id_number=' + id_number + 
                           '&email_address=' + email_address + 
                           '&mobile_no=' + phoneno + 
                           '&address=' + address + 
                           '&post_id=' + post_id + 
                           '&branch_id=' + branch_id + 
                           '&department_id=' + department_id + 
                           '&role_id=' + role_id +
                           '&status_id=' + status_id +
                           '&qualification_id=' + qualification_id +
                           '&lga_id=' + lga_id +
                           '&staff_id=' + staff_id;
    
            axios.post(endpoint + '/admin/update-staff-api?access_key=' + access_key, formData, { headers: apikey })
                .then(response => {
                    var access_check = response.data.check;
                    var success = response.data.success;
                    var message = response.data.message;
    
                    if (access_check == 0) {
                        _logout_();
                    } else {
                        if (success == true) {
                            $('#success-div').html('<div><i class="bi-check-all"></i></div>SUCCESS!' + ' ' + message).fadeIn(500).delay(5000).fadeOut(100);
                            _all_staff();
                        } else {
                            $('#warning-div').html('<div><i class="bi-check-all"></i></div>ERROR!' + ' ' + message).fadeIn(500).delay(5000).fadeOut(100);
                        }
                        $('#submit_btn').html(btn_text);
                        document.getElementById('submit_btn').disabled = false;
                    }
                })
                .catch(error => {
                    $('#warning-div').html('<div><i class="bi-check-all"></i></div>ERROR!' + ' ' + error).fadeIn(500).delay(5000).fadeOut(100);
                    $('#submit_btn').html(btn_text);
                    document.getElementById('submit_btn').disabled = false;
                });
        }
    }

    function _update_customer_data(customer_id) {
      var firstname = $('#firstname').val();
      var middlename = $('#middlename').val();
      var lastname = $('#lastname').val();
      var dob = $('#dob').val();
      var gender_id = $('#gender_id').val();
      var marital_status_id = $('#marital_status_id').val();
      var identification_id = $('#identification_id').val();
      var id_number = $('#id_number').val();
      var email_address = $('#email_address').val();
      var phoneno = $('#mobileno').val();
      var address = $('#address').val();
      var customer_type_id = $('#customer_type_id').val();
      var branch_id = $('#branch_id').val();
      var status_id = $('#status_id').val();
      var account_id = $('#account_id').val();
      var lga_id = $('#lga_id').val();
      
      if (firstname == '') {
          showError('FIRST NAME ERROR!', 'Please fill in the first name.');
      } else if (lastname == '') {
          showError('LAST NAME ERROR!', 'Please fill in the last name.');
      } else if (email_address == '') {
          showError('EMAIL ADDRESS ERROR!', 'Please fill in the email address.');
      } else if (phoneno == '') {
          showError('PHONE NUMBER ERROR!', 'Please fill in the phone number.');
      } else if (address == '') {
          showError('ADDRESS ERROR!', 'Please fill in the address.');
      } else if (customer_type_id == '') {
          showError('CUSTOMER TYPE ERROR!', 'Please fill in the post ID.');
      } else if (branch_id == '') {
          showError('BRANCH ERROR!', 'Please fill in the branch ID.');
      } else if (gender_id == '') {
          showError('GENDER ERROR!', 'Please fill in the department ID.');
      } else if (!validatePhoneNumber(phoneno)) {
          showError('PHONE NUMBER ERROR!', 'Invalid phone number format.');
      } else if (!validateTextInput(firstname) || !validateTextInput(lastname)) {
          showError('NAME ERROR!', 'Names must contain only valid characters.');
      } else {
          var btn_text = $('#submit_btn').html();
          $('#submit_btn').html('<i id="spinner" class="bi bi-arrow-repeat"></i> UPDATING...');
          document.getElementById('submit_btn').disabled = true;
  
          var formData = 'firstname=' + firstname + 
                         '&middlename=' + middlename + 
                         '&lastname=' + lastname + 
                         '&dob=' + dob + 
                         '&gender_id=' + gender_id + 
                         '&marital_status_id=' + marital_status_id + 
                         '&identification_id=' + identification_id + 
                         '&id_number=' + id_number + 
                         '&email_address=' + email_address + 
                         '&mobile_no=' + phoneno + 
                         '&address=' + address + 
                         '&customer_type_id=' + customer_type_id + 
                         '&branch_id=' + branch_id + 
                         '&account_type_id=' + account_id +
                         '&status_id=' + status_id +
                         '&lga_id=' + lga_id +
                         '&customer_id=' + customer_id;
  
          axios.post(endpoint + '/admin/update-customer-api?access_key=' + access_key, formData, { headers: apikey })
              .then(response => {
                  var access_check = response.data.check;
                  var success = response.data.success;
                  var message = response.data.message;
  
                  if (access_check == 0) {
                      _logout_();
                  } else {
                      if (success == true) {
                          $('#success-div').html('<div><i class="bi-check-all"></i></div>SUCCESS!' + ' ' + message).fadeIn(500).delay(5000).fadeOut(100);
                          alert_close();
                          _all_customer();
                      } else {
                          $('#warning-div').html('<div><i class="bi-check-all"></i></div>ERROR!' + ' ' + message).fadeIn(500).delay(5000).fadeOut(100);
                      }
                      $('#submit_btn').html(btn_text);
                      document.getElementById('submit_btn').disabled = false;
                  }
              })
              .catch(error => {
                  $('#warning-div').html('<div><i class="bi-check-all"></i></div>ERROR!' + ' ' + error).fadeIn(500).delay(5000).fadeOut(100);
                  $('#submit_btn').html(btn_text);
                  document.getElementById('submit_btn').disabled = false;
              });
      }
  }

  function fetchBackend(){
    axios.post(endpoint+'/admin/fetch-backend-settings-api?access_key='+access_key, null, { headers: apikey })
    .then(response => {
        var access_check = response.data.check;
        var success = response.data.success;
  
        if (access_check == 0) {
            _logout_(); 
        } else {
            if (success == true) {
                var data = response.data.data;
                var minimum_account_balance = data.minimum_account_balance;
                var maximum_loan_amount = data.maximum_loan_amount;
                var maximum_duration = data.maximum_duration;
                var minimum_loan_amount = data.minimum_loan_amount;
                var loan_rate = data.loan_rate;
  
                $('#minimum_account_balance').val(minimum_account_balance);
                $('#maximum_loan_amount').val(maximum_loan_amount);
                $('#maximum_duration').val(maximum_duration);
                $('#minimum_loan').val(minimum_loan_amount);
                $('#loan_rate').val(loan_rate);
            }
        }
    })
  }

  function updateSystem(){
    var minimum_account_balance = $('#minimum_account_balance').val();
    var maximum_loan_amount = $('#maximum_loan_amount').val();
    var maximum_duration = $('#maximum_duration').val();
    var minimum_loan_amount = $('#minimum_loan').val();
    var loan_rate = $('#loan_rate').val();
  
    if (minimum_account_balance==''){
      showError('MINIMUM BALANCE ERROR!', 'Fill all Fields To Continue');
    }else if (maximum_loan_amount==''){
      showError('MAXIMUM LOAN ERROR!', 'Fill all Fields To Continue');
    }else if (maximum_duration==''){
      showError('MAXIMUM DURATION ERROR!', 'Fill all Fields To Continue');
    }else if (minimum_loan_amount==''){
      showError('MINIMUM LOAN ERROR!', 'Fill all Fields To Continue');
    }else if (loan_rate==''){
      showError('LOAN RATE ERROR!', 'Fill all Fields To Continue');
    }else{
  
      var btn_text  = $('#submit_btn').html();
        $('#submit_btn').html('<i id="spinner" class="bi bi-arrow-repeat"></i> SUBMITTING...');
        document.getElementById('submit_btn').disabled = true;
  
        var formData = 'minimum_account_balance=' + minimum_account_balance + '&maximum_loan_amount=' + maximum_loan_amount + '&maximum_duration=' + maximum_duration + '&minimum_loan_amount=' + minimum_loan_amount + '&loan_rate=' + loan_rate;
  
        axios.post(endpoint+'/admin/update-backend-settings-api?access_key='+access_key, formData, { headers: apikey })
        .then(response => {
            var access_check = response.data.check;
            var success = response.data.success;
            var message = response.data.message;
    
            if (access_check == 0) {
                _logout_(); 
            } else {
                if (success == true) {
                    $('#success-div').html('<div><i class="bi-check-all"></i></div>SUCCESS!' + ' ' + message).fadeIn(500).delay(5000).fadeOut(100);
                    $('#submit_btn').html(btn_text);
                    document.getElementById('submit_btn').disabled=false;
                    alert_close();
                }else{
                    $('#warning-div').html('<div><i class="bi-check-all"></i></div>ERROR!' + ' ' + message).fadeIn(500).delay(5000).fadeOut(100);
                    $('#submit_btn').html(btn_text);
                    document.getElementById('submit_btn').disabled=false;
                }
            }
        })
        .catch(error => {
            $('#warning-div').html('<div><i class="bi-check-all"></i></div>ERROR!' + ' ' + error).fadeIn(500).delay(5000).fadeOut(100);
            $('#submit_btn').html(btn_text);
            document.getElementById('submit_btn').disabled = false;
        });
    }
  }

  function _change_pass(staff_id){
    var old_pass = $('#old_pass').val();
    var new_pass = $('#new_pass').val();
	var confirm_pass = $('#confirm_pass').val();

    if (old_pass==''){
        showError('OLD PASSWORD ERROR!', 'Fill all Fields To Continue');
    }else if (new_pass==''){
        showError('NEW PASSWORD ERROR!', 'Fill all Fields To Continue');
    }else if (confirm_pass==''){
        showError('CONFIRM PASSWORD ERROR!', 'Fill all Fields To Continue');
    }else{

        var btn_text  = $('#submit_btn').html();
        $('#submit_btn').html('<i id="spinner" class="bi bi-arrow-repeat"></i> SUBMITTING...');
        document.getElementById('submit_btn').disabled = true;

        var formData = 'staff_id=' + staff_id + '&old_pass=' + old_pass + '&new_pass=' + new_pass + '&confirm_pass=' + confirm_pass;
        axios.post(endpoint+'/admin/change-pass-api?access_key='+access_key, formData, { headers: apikey })

        .then(response => {
            var access_check = response.data.check;
            var success = response.data.success;
            var message = response.data.message;
    
            if (access_check == 0) {
                _logout_(); 
            } else {
                if (success == true) {
                    $('#success-div').html('<div><i class="bi-check-all"></i></div>SUCCESS!' + ' ' + message).fadeIn(500).delay(5000).fadeOut(100);
                    $('#submit_btn').html(btn_text);
                    document.getElementById('submit_btn').disabled=false;
                    alert_close();
                }else{
                    $('#warning-div').html('<div><i class="bi-check-all"></i></div>ERROR!' + ' ' + message).fadeIn(500).delay(5000).fadeOut(100);
                    $('#submit_btn').html(btn_text);
                    document.getElementById('submit_btn').disabled=false;
                }
            }
        })
        .catch(error => {
            $('#warning-div').html('<div><i class="bi-check-all"></i></div>ERROR!' + ' ' + error).fadeIn(500).delay(5000).fadeOut(100);
            $('#submit_btn').html(btn_text);
            document.getElementById('submit_btn').disabled = false;
        });
    }
}

function _deposit(){
  var account_no = $('#account_no').val();
  var amount = $('#amount').val();

  if (account_no==''){
      showError('ACCOUNT NUMBER ERROR!', 'Fill all Fields To Continue');
  }else if (amount==''){
      showError('AMOUNT ERROR!', 'Fill all Fields To Continue');
  }else{

      var btn_text  = $('#submit_btn').html();
      $('#submit_btn').html('<i id="spinner" class="bi bi-arrow-repeat"></i> SUBMITTING...');
      document.getElementById('submit_btn').disabled = true;

      var formData = 'account_number=' + account_no + '&amount=' + amount;
      axios.post(endpoint+'/admin/deposit-api?access_key='+access_key, formData, { headers: apikey })

      .then(response => {
          var access_check = response.data.check;
          var success = response.data.success;
          var message = response.data.message;
  
          if (access_check == 0) {
              _logout_(); 
          } else {
              if (success == true) {
                  $('#success-div').html('<div><i class="bi-check-all"></i></div>SUCCESS!' + ' ' + message).fadeIn(500).delay(5000).fadeOut(100);
                  $('#submit_btn').html(btn_text);
                  document.getElementById('submit_btn').disabled=false;
                  alert_close();
              }else{
                  $('#warning-div').html('<div><i class="bi-check-all"></i></div>ERROR!' + ' ' + message).fadeIn(500).delay(5000).fadeOut(100);
                  $('#submit_btn').html(btn_text);
                  document.getElementById('submit_btn').disabled=false;
              }
          }
      })
      .catch(error => {
          $('#warning-div').html('<div><i class="bi-check-all"></i></div>ERROR!' + ' ' + error).fadeIn(500).delay(5000).fadeOut(100);
          $('#submit_btn').html(btn_text);
          document.getElementById('submit_btn').disabled = false;
      });
  }
}

function _update_branch(branch_id){
  var branch_name = $('#branch_name').val();
  var branch_email = $('#branch_email').val();
  var branch_mobile_number = $('#branch_mobile_number').val();
  var address = $('#address').val();
  var branch_zipcode = $('#branch_zipcode').val();
  var branch_sortcode = $('#branch_sortcode').val();
  var state_id = $('#state_id').val();
  var lga_id = $('#lga_id').val();
  var status_id = $('#status_id').val();
  
  if (branch_name==''){
    showError('BRANCH NAME ERROR!', 'Fill all Fields To Continue');
  }else if (branch_email == '') {
    showError('BRANCH EMAIL ERROR!', 'Fill all Fields To Continue');
    } else if (address == '') {
    showError('BRANCH ADDRESS ERROR!', 'Fill all Fields To Continue');
    } else if (branch_zipcode == '') {
    showError('BRANCH ZIPCODE ERROR!', 'Fill all Fields To Continue');
    } else if (branch_sortcode == '') {
    showError('BRANCH SORTCODE ERROR!', 'Fill all Fields To Continue');
    }else if (country_id==''){
      showError('COUNTRY ERROR!', 'Please select a country');
    }else if (state_id==''){
      showError('STATE ERROR!', 'Please select a state');
    }else if (lga_id==''){
      showError('LOCAL GOVERNMENT ERROR!', 'Please select a local government');
    }else if (address==''){
      showError('ADDRESS ERROR!', 'Fill all Fields To Continue');
    }else if (status_id==''){
      showError('STATUS ERROR!', 'Please select a status');
  }else{

      var btn_text  = $('#submit_btn').html();
      $('#submit_btn').html('<i id="spinner" class="bi bi-arrow-repeat"></i> SUBMITTING...');
      document.getElementById('submit_btn').disabled = true;

      var formData ='branch_name=' + branch_name + '&branch_email=' + branch_email + '&branch_mobile_number=' + branch_mobile_number + '&address=' + address + '&branch_zipcode=' + branch_zipcode + '&branch_sortcode=' + branch_sortcode + '&lga_id=' + lga_id + '&status_id=' + status_id + '&branch_id=' + branch_id;
      axios.post(endpoint+'/admin/update-branch-api?access_key='+access_key, formData, { headers: apikey })

      .then(response => {
          var access_check = response.data.check;
          var success = response.data.success;
          var message = response.data.message;
  
          if (access_check == 0) {
              _logout_(); 
          } else {
              if (success == true) {
                  $('#success-div').html('<div><i class="bi-check-all"></i></div>SUCCESS!' + ' ' + message).fadeIn(500).delay(5000).fadeOut(100);
                  $('#submit_btn').html(btn_text);
                  document.getElementById('submit_btn').disabled=false;
                  alert_close();
                  _all_branch();
              }else{
                  $('#warning-div').html('<div><i class="bi-check-all"></i></div>ERROR!' + ' ' + message).fadeIn(500).delay(5000).fadeOut(100);
                  $('#submit_btn').html(btn_text);
                  document.getElementById('submit_btn').disabled=false;
              }
          }
      })
      .catch(error => {
          $('#warning-div').html('<div><i class="bi-check-all"></i></div>ERROR!' + ' ' + error).fadeIn(500).delay(5000).fadeOut(100);
          $('#submit_btn').html(btn_text);
          document.getElementById('submit_btn').disabled = false;
      });
  }
}

function all_counts(){
  axios.post(endpoint+'/admin/all-tables-count-api?access_key='+access_key, null, { headers: apikey })
  .then(response => {
      var access_check = response.data.check;
      var success = response.data.success;

      if (access_check == 0) {
          _logout_(); 
      } else {
          if (success == true) {
              var count = response.data.data[0];
              var staff_count = count.staff_count;
              var customer_count = count.customer_count;
              var branch_count =  count.branch_count;
              var department_count = count.department_count;
              var total_accounts_types = count.account_type_count;
              var total_customer_account = count.account_count;
              var total_amount_deposit =  count.deposit_amount;
              var loan_amount = count.loan_amount;
              var cumulative_account_balance = count.account_balance;
              var alert = (count.alert_count>=9) ? '9+' : count.alert_count;

              $('#total_staff').html(staff_count);
              $('#total_customer').html(customer_count);
              $('#total_branch').html(branch_count);
              $('#total_department').html(department_count);
              $('#total_accounts_types').html(total_accounts_types);
              $('#total_customer_account').html(total_customer_account);
              $('#total_amount_deposit').html(formatNumberWithComma(total_amount_deposit));
              $('#total_loan_taken').html(formatNumberWithComma(loan_amount));
              $('#cumulative_account_balance').html(formatNumberWithComma(cumulative_account_balance));
              $('#alert').html(alert);
          }
      }
  })
}

function _all_notification(start_date, end_date) {
  var search = $('#search').val()

  $('#fetch_all_notification').html('<div class="ajax-loader"><br><img src="src/all-images/image-pix/ajax-loader.gif"/></div>').fadeIn(500);
  var formData = 'start_date=' + start_date + '&end_date=' + end_date + '&search_txt=' + search;

  axios.post(endpoint+'/admin/fetch-notification-api?access_key='+access_key, formData, { headers: apikey })
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
              var alert_id = fetch[i].alert_id;
              var fullname = fetch[i].fullname.toUpperCase();
              var short_alert_description = fetch[i].short_alert_description;
              var created_time = fetch[i].created_time;
    
              text +=
    
              '<div class="w-[30%] h-[110px] bg-white flex rounded-[5px] border-table-box-border border-[1px] cursor-pointer transition-all duration-700 hover:scale-105" onClick="_get_form_with_id(' + "'notification-module'" + "," + "'" + alert_id+ "'" + ')">'+
                '<div class="w-[90%] mx-auto mt-[10px] text-[#333]">'+
                    '<div class="w-[100%] flex justify-between">'+
                        '<div><i class="bi bi-person-circle"></i> <span>'+ fullname +'</span></div>'+
                        '<div><i class="bi bi-check2-all text-[15px]"></i></div>'+
                    '</div>'+

                    '<div class="mt-[8px] text-[12px] text-[#A2A2A2]">'+ short_alert_description+'...' +'</div>'+
                    '<div class="mt-[8px] flex justify-end gap-1 text-[10px] text-[#EDA564]"><i class="bi bi-alarm"></i> '+ created_time +'</div>'+
                '</div>'+
            '</div>';
    
          }

          $('#fetch_all_notification').html(text);
      }else{
          text +=
        '<div class="false-notification-div">' +
        "<p> " + message + " </p>" + '</div>';
      $('#fetch_all_notification').html(text);
      }
    }
  })
  .catch(error => {
      var errorMessage = '<div class="false-notification-div"><p>' + error + '</p></div>';
      $('#fetch_all_notification').html(errorMessage);
  });
}







