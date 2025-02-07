<?php if($page=='dashboard'){?>
    <div class="w-[98%] flex gap-2 mt-3 flex-wrap content-start">
        <div class="count-div">
            <div class="w-[90%] m-5 font-bold">
                <div class="text-2xl" id="total_staff"></div>
                <div class="text-sm">TOTAL ADMIN/STAFF</div>
                <i class="bi-people-fill text-3xl"></i>
            </div>
        </div>

        <div class="count-div">
            <div class="w-[90%] m-5 font-bold">
                <div class="text-2xl" id="total_student"></div>
                <div class="text-sm">TOTAL CUSTOMERS</div>
                <i class="bi-people-fill text-3xl"></i>
            </div>
        </div>

        <div class="count-div">
            <div class="w-[90%] m-5 font-bold">
                <div class="text-2xl" id=""></div>
                <div class="text-sm">TOTAL BRANCHES</div>
                <i class="bi-bank2 text-3xl"></i>
            </div>
        </div>

        <div class="count-div">
            <div class="w-[90%] m-5 font-bold">
                <div class="text-2xl"></div>
                <div class="text-sm">TOTAL DEPARTMENT</div>
                <i class="bi-pc-display-horizontal text-3xl"></i>
            </div>
        </div>

        <div class="count-div">
            <div class="w-[90%] m-5 font-bold">
                <div class="text-2xl" id=""></div>
                <div class="text-sm">TOTAL ACCOUNTS TYPES</div>
                <i class="bi-wallet-fill text-3xl"></i>
            </div>
        </div>

        <div class="count-div">
            <div class="w-[90%] m-5 font-bold">
                <div class="text-2xl"></div>
                <div class="text-sm">TOTAL CUSTOMERS ACCOUNTS</div>
                <i class="bi-wallet-fill text-3xl"></i>
            </div>
        </div>

        <div class="count-div">
            <div class="w-[90%] m-5 font-bold">
                <div class="text-2xl">NGN <span class="counter" id="nacos_balance"></span></div>
                <div class="text-sm">TOTAL AMOUNT DEPOSITED</div>
                <i class="bi-wallet-fill text-3xl"></i>
            </div>
        </div>
				
        <div class="count-div">
            <div class="w-[90%] m-5 font-bold">
                <div class="text-2xl">NGN <span class="counter" id="nacos_balance"></span></div>
                <div class="text-sm">TOTAL AMOUNT WITHDREW</div>
                <i class="bi-box-arrow-in-down text-3xl"></i>
            </div>
        </div>

        <div class="count-div">
            <div class="w-[90%] m-5 font-bold">
                <div class="text-2xl">NGN <span class="counter" id="total_spent"></span></div>
                <div class="text-sm">TOTAL LOAN TAKEN</div>
                <i class="bi-wallet-fill text-3xl"></i>
            </div>
        </div>

        <div class="count-div">
            <div class="w-[90%] m-5 font-bold">
                <div class="text-2xl">NGN <span class="counter" id="total_spent"></span></div>
                <div class="text-sm">CUMULATIVE ACCOUNT BALANCE</div>
                <i class="bi-wallet-fill text-3xl"></i>
            </div>
        </div>

        <script>all_counts();</script>
	</div>
<?php }?>

<?php if($page=='all-staff'){?>
   <div class="w-[100%] h-[55px] text-white bg-[#EBEBEB] rounded-md font-body">
        <div class="w-[95%] h-[55px] m-auto flex justify-between items-center content-center gap-[5px] text-[10px] text-[#ABABAB]">
            <select class="w-[20%] h-[45px] bg-white pl-[20px] rounded-[5px] focus:border-black border-solid border focus:border-opacity-30 flex flex-grow" id="status_id" onchange="_all_staff(this.value, branch_id, department_id);">
                <option value="">All Status</option>
                <script>_get_status();</script>
            </select>

            <select class="w-[20%] h-[45px] bg-white pl-[20px] rounded-[5px] focus:border-black border-solid border focus:border-opacity-30 flex flex-grow" id="branch_id" onchange="_all_staff(status_id, this.value, department_id);">
                <option value="">All Branches</option>
                <script>_get_branch()</script>
            </select>

            <select class="w-[20%] h-[45px] bg-white pl-[20px] rounded-[5px] focus:border-black border-solid border focus:border-opacity-30 flex flex-grow" id="department_id" onchange="_all_staff(status_id, branch_id, this.value);">
                <option value="">All Department</option>
                 <script></script>
            </select>
            <input class="w-[30%] h-[45px] bg-white pl-[20px] rounded-[5px] outline-none focus:border-black border-solid border focus:border-opacity-30 flex flex-grow" type="text" id="search" onkeyup="_all_staff('');" placeholder="Type here to search..." title="Type here to search"/>
        </div>

        <div class="w-[100%] h-[40px] bg-[#ECF5F0] border-solid border border-[#A0E5BD] flex justify-center">
            <div class="w-[98%] flex items-center justify-between text-[#424141]">
                <div><i class="bi-people-fill"></i>  ACTIVE ADMINISTRATOR'S LIST</div>
                <button class="text-sm py-[5px] px-[10px] bg-[#0E4000]" title="Add new staff"  onClick="_get_form('staff_reg');">ADD NEW STAFF <i class="bi-person-plus"></i></button>
            </div>
        </div>

        <div class="w-[98%] m-auto mt-[15px] flex justify-center flex-wrap gap-[15px]" id="fetch_all_staff">
            <script>_all_staff('');</script>
        </div>
   </div>
<?php }?>


<?php if($page=='all-customer'){?>
   <div class="w-[100%] h-[55px] rounded-md font-body">
        <div class="w-[95%] h-[55px] m-auto flex justify-between items-center content-center gap-[5px] text-[10px] text-[#ABABAB]">
            <select class="w-[20%] h-[45px] bg-white pl-[20px] rounded-[5px] focus:border-black border-solid border focus:border-opacity-30 flex flex-grow" id="status_id" onchange="_all_customer(1, this.value, branch_id);">
                <option value="">All Status</option>
                <script>_get_status();</script>
            </select>

            <select class="w-[20%] h-[45px] bg-white pl-[20px] rounded-[5px] focus:border-black border-solid border focus:border-opacity-30 flex flex-grow" id="branch_id" onchange="_all_customer(1, status_id this.value)">
                <option value="">All Branches</option>
                <script>_get_level();</script>
            </select>
            <input class="w-[30%] h-[45px] bg-white pl-[20px] rounded-[5px] outline-none focus:border-black border-solid border focus:border-opacity-30 flex flex-grow" type="text" id="search" onkeyup="_all_customer(1, '');" placeholder="Type here to search..." title="Type here to search"/>
        </div>


        <div class="w-[100%] h-[40px] bg-[#ECF5F0] border-solid border border-[#A0E5BD] flex justify-center">
            <div class="w-[98%] flex items-center justify-between text-[#424141]">
                <div><i class="bi-people-fill"></i>  ALL CUSTOMER'S LIST</div>
                <button class="text-sm py-[5px] px-[10px] bg-[#0E4000]" title="Add New Customer"  onClick="_get_form('customer_reg');">ADD NEW CUSTOMER <i class="bi-person-plus"></i></button>
            </div>
        </div>

        <div class="w-[98%] m-auto mt-[10px]" id="fetch_all_customer">
            <script>_all_customer(1);</script>
        </div>
   </div>  
<?php }?>

<?php if ($page=='notification'){?>
    <div class="w-[100%] h-[55px] text-white bg-[#EBEBEB] rounded-md font-body">
        <div class="w-[95%] h-[55px] m-auto flex justify-between items-center content-center gap-[5px] text-[10px] text-[#ABABAB]">
            <input class="w-[20%] h-[45px] bg-white pl-[20px] rounded-[5px] outline-none focus:border-black border-solid border focus:border-opacity-30 flex flex-grow" type="date" id="start_date" title=""/>
            <input class="w-[20%] h-[45px] bg-white pl-[20px] rounded-[5px] outline-none focus:border-black border-solid border focus:border-opacity-30 flex flex-grow" type="date" id="end-date" title=""/>
            <button class="text-sm py-[8px] px-[15px]" title="submit" id="submit_btn" onclick="_all_notification($('#start_date').val(), $('#end-date').val())"><i class="bi-check2"></i> FETCH</button>
            <input class="w-[30%] h-[45px] bg-white pl-[20px] rounded-[5px] outline-none focus:border-black border-solid border focus:border-opacity-30 flex flex-grow" type="text" id="search" onkeyup="_all_notification('', '')" placeholder="Type here to search..." title="Type here to search"/>
        </div>

        <div class="bg-[#F4FDF8] text-[#A2A2A2] border-[#A5EAC2] border-[1px] w-[95%] mx-auto mt-[10px] flex gap-1 p-[10px] pl-[30px] text-[12px]">
            <i class="bi bi-bell text-[#46A0DD]"></i><p>Notifications</p>
        </div>

        <div class="mt-[10px] w-[95%] m-auto flex justify-center gap-[10px] flex-wrap" id="fetch_all_notification">
            <script>_all_notification('', '');</script>
        </div>
   </div>  
<?php }?>

<?php if($page=='customer-profile'){?>
    <div class="mt-[60px] mb-[150px] log-div" id="student-profile">
        <div class="text-[14px] font-bold text-primary-color pl-[10px] pb-[15px] border-b border-primary-color">BASIC INFORMATION</div>

        <div class="mt-[10px] text-[12px] flex gap-[5px]">
            <div class="w-[100%]">
                <label class="px-[15px] text-gray-500"> SURNAME:</label><br/>
                <input class="formInput" type="text" id="surname" placeholder="SURNAME"/>
            </div>

            <div class="w-[100%]">
                <label class="px-[15px] text-gray-500"> OTHER NAMES:</label><br/>
                <input class="formInput" type="text" id="othernames" placeholder="OTHER NAMES"/>
            </div>
        </div>

        <div class="mt-[10px] text-[12px] flex gap-[5px]">
            <div class="w-[100%]">
                <label class="px-[15px] text-gray-500"> DATE OF BIRTH:</label><br/>
                <input class="formInput" type="date" id="dob" placeholder="DATE OF BIRTH"/>
            </div>

            <div class="w-[100%]">
                <label class="px-[15px] text-gray-500"> GENDER:</label><br/>
                <select class="formInput" id="gender_id">
                    <script>_get_gender();</script>
                </select>
            </div>

            <div class="w-[100%]">
                <label class="px-[15px] text-gray-500"> MARITAL STATUS:</label><br/>
                <select class="formInput" id="marital_status_id">
                   
                </select>
            </div>
        </div>

        <div class="text-[14px] font-bold text-primary-color pl-[10px] pb-[15px] mt-[50px] border-b border-primary-color">PERSONAL INFORMATION</div>

        <div class="mt-[10px] text-[12px] flex gap-[5px]">
            <div class="w-[100%]">
                <label class="px-[15px] text-gray-500"> IDENTIFICATION TYPE:</label><br/>
                <select class="formInput" id="identification_id">
                    <script>_get_gender();</script>
                </select>
            </div>

            <div class="w-[100%]">
                <label class="px-[15px] text-gray-500"> ID NUMBER:</label><br/>
                <input class="formInput" type="tel" id="id_number" placeholder="ID NUMBER"/>
            </div>

        </div>

        <div class="text-[14px] font-bold text-primary-color pl-[10px] pb-[15px] mt-[50px] border-b border-primary-color">CONTACT INFORMATION</div>
        
        <div class="mt-[10px] text-[12px] flex gap-[5px]">
            <div class="w-[100%]">
                <label class="px-[15px] text-gray-500"> EMAIL ADDRESS:</label><br/>
                <input class="formInput" type="email" id="email_address" placeholder="EMAIL ADDRESS"/>
            </div>

            <div class="w-[100%]">
                <label class="px-[15px] text-gray-500"> PHONE NUMBER:</label><br/>
                <input class="formInput" type="tel" id="mobileno" placeholder="PHONE NUMBER"/>
            </div>
        </div>
         <div class="w-[100%]">
            <label class="px-[15px] text-gray-500"> ADDRESS:</label><br/>
            <input class="formInput" type="tel" id="address" placeholder="ADDRESS"/>
        </div>

        <div class="text-[14px] font-bold text-primary-color pl-[10px] pb-[15px] mt-[50px] border-b border-primary-color">ACCOUNT INFORMATION</div>

        <div class="mt-[10px] text-[12px] flex gap-[5px]">
            <div class="w-[100%]">
                <label class="px-[15px] text-gray-500"> BRANCH:</label><br/>
                <div class="relative flex items-center">
                    <input class="formInput" type="text" readonly="readonly" id="branch_id" placeholder="BRANCH"/>
                    <i class="bi-lock-fill absolute right-3 text-primary-color"></i>
                </div>
            </div>

            <div class="w-[100%]">
                <label class="px-[15px] text-gray-500"> CUSTOMER TYPE:</label><br/>
                <select class="formInput" id="customer_type_id">
                    <script>
                         
                    </script>
                </select>
            </div>
        </div>
                
        <div class="mt-[10px] text-[12px] flex gap-[5px]">
            <div class="w-[100%]">
                <label class="px-[15px] text-gray-500"> ACCOUNT TYPE:</label><br/>
                <select class="formInput" id="account_id">
                    <script>
                         
                    </script>
                </select>
            </div>

            <div class="w-[100%]">
                <label class="px-[15px] text-gray-500"> STATUS:</label><br/>
                <select class="formInput" id="status_id">
                    <script>
                         
                    </script>
                </select>
            </div>
        </div>

        <div class="mt-[10px] text-[12px] flex gap-[5px]">
            <div class="w-[100%]">
                <label class="px-[15px] text-gray-500"> CUSTOMER ID:</label><br/>
                <div class="relative flex items-center">
                    <input class="formInput" type="text" readonly="readonly" id="customer_id" placeholder="CUSTOMER ID"/>
                    <i class="bi-lock-fill absolute right-3 text-primary-color"></i>
                </div>
            </div>

            <div class="w-[100%]">
                <label class="px-[15px] text-gray-500"> DATE OF REGISTRATION:</label><br/>
                <div class="relative flex items-center">
                    <input class="formInput" type="text" readonly="readonly" id="reg_date" placeholder="DATE OF REGISTRATION"/>
                    <i class="bi-lock-fill absolute right-3 text-primary-color"></i>
                </div>
            </div>
        </div>

        <button class="w-[15%] float-right mt-[20px]" id="submit_btn" title="" onclick="">UPDATE PROFILE <i class="bi-check2"></i></button>
        <script>_get_customer_profile('<?php echo $ids;?>')</script>
    </div>
<?php }?>

<?php if($page=='expenses-module'){?>
   <div class="w-[100%] h-[55px] text-white bg-[#EBEBEB] rounded-md font-body">
        <div class="w-[95%] mx-[auto]">
            <input class="w-[100%] h-[40px] mt-[7.5px] outline-none px-[10px] text-black/50 rounded-md focus:border border-black/30" type="text" id="search" onkeyup="fetchExpenses(1, '')"/>
        </div>

        <div class="w-[100%] h-[40px] bg-[#ECF5F0] mt-[7px] border-solid border border-[#A0E5BD] flex justify-center">
            <div class="w-[98%] flex items-center justify-between text-[#424141]">
                <div><i class="bi-cash-coin"></i>  ALL EXPENSES LIST</div>
                <button class="text-sm py-[5px] px-[10px] bg-[#0E4000]" title="Add new expenses"  onClick="_get_form('new-expenses');">ADD NEW EXPENSES <i class="bi-cash-coin"></i></button>
            </div>
        </div>

        <div class="w-[98%] m-auto mt-[10px]" id="fetch_all_expenses">
            <script>fetchExpenses(1);</script>
        </div>
   </div>  
<?php }?>

<?php if($page=='faculty-module'){?>
   <div class="w-[100%] h-[55px] text-white bg-[#EBEBEB] rounded-md font-body">
        <div class="w-[95%] mx-[auto]">
            <input class="w-[100%] h-[40px] mt-[7.5px] outline-none px-[10px] text-black/50 rounded-md focus:border border-black/30" type="text" id="search" onkeyup="fetchFaculties(1, '')"/>
        </div>

        <div class="w-[100%] h-[40px] bg-[#ECF5F0] mt-[7px] border-solid border border-[#A0E5BD] flex justify-center">
            <div class="w-[98%] flex items-center justify-between text-[#424141]">
                <div><i class="bi-cash-coin"></i>  ALL FACULTY LIST</div>
                <button class="text-sm py-[5px] px-[10px] bg-[#0E4000]" title="Add new faculty"  onClick="_get_form('add-faculty');">ADD NEW FACULTY <i class="bi-cash-coin"></i></button>
            </div>
        </div>

        <div class="w-[98%] m-auto mt-[10px]" id="fetch_all_faculty">
            <script>fetchFaculties(1, '');</script>
        </div>
   </div>  
<?php }?>

<?php if($page=='department-module'){?>
   <div class="w-[100%] h-[55px] text-white bg-[#EBEBEB] rounded-md font-body">
        <div class="w-[95%] mx-[auto]">
            <input class="w-[100%] h-[40px] mt-[7.5px] outline-none px-[10px] text-black/50 rounded-md focus:border border-black/30" type="text" id="search" onkeyup="fetchDepartment(1, '')"/>
        </div>

        <div class="w-[100%] h-[40px] bg-[#ECF5F0] mt-[7px] border-solid border border-[#A0E5BD] flex justify-center">
            <div class="w-[98%] flex items-center justify-between text-[#424141]">
                <div><i class="bi-cash-coin"></i>  ALL DEPARTMENT LIST</div>
                <button class="text-sm py-[5px] px-[10px] bg-[#0E4000]" title="Add new department"  onClick="_get_form('add-department');">ADD NEW DEPARTMENT <i class="bi-cash-coin"></i></button>
            </div>
        </div>

        <div class="w-[98%] m-auto mt-[10px]" id="fetch_all_department">
            <script>fetchDepartment(1, '');</script>
        </div>
   </div>  
<?php }?>

<?php include 'aos-script.php';?>


<script>
    superplaceholder({
        el: search,
            sentences: [ 'Type here to search'],
            options: {
            letterDelay: 80,
            loop: true,
            startOnFocus: false
        }
    });
</script>



  

